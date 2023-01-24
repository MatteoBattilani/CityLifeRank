// ----------------------------CONSTANTS AND VARIABLES-----------------------------------------------

const button = document.querySelector("#search");
const inputField = document.querySelector("#inputField");
const bestContainer = document.querySelector("#best-container");
const worstContainer = document.querySelector("#worst-container");
const scoringContainer = document.querySelector("#scoring-container");
const cityDescriptionContainer = document.querySelector("#city-description");
// -----------------------------------LISTENERS---------------------------------------------------

// Following listeners call the displayTopCities and displayWorstCities functions when the page is refreshed
window.addEventListener("load", displayTopCities);
window.addEventListener("load", displayWorstCities);

// This listener retrieves the result of the city searched via the search button
button.addEventListener("click", (event) => {
  // Prevenire l'invio del form
  event.preventDefault();
  scoringContainer.innerHTML = "";
  cityDescriptionContainer.innerHTML = ""; // svuoto il div che contiene l'eventuale descrizione di un'altra città
  cityDescriptionContainer.classList.remove(
    "border-container",
    "windows-background"
  ); // elimino il border della descrizione della città (se dovesse esserci)
  const city = inputField.value.toLowerCase(); // the city must always be in lower case for the function to work.
  axios
    .get(`https://api.teleport.org/api/cities/?search=${city}`)
    .then((response) => {
      // Estrarre i dati che desideri visualizzare
      const data = response.data;
      // Creare il contenuto HTML che desideri inserire nel div
      console.log(data);
      let linksCount = 0;
      const searchResults = response.data._embedded["city:search-results"];

      for (let i = 0; i < searchResults.length; i++) {
        for (let key in searchResults[i]._links) {
          linksCount++;
        }
      }
      // Se ci sono città omonime mostro all'utente una lista di tali città in modo che scelga quella corretta
      if (linksCount > 1) {
        let html = "<ol class='list'>";
        const promises = [];
        for (let i = 0; i < searchResults.length; i++) {
          promises.push(axios.get(searchResults[i]._links["city:item"].href));
        }
        Promise.all(promises).then((responses) => {
          for (let i = 0; i < responses.length; i++) {
            if (responses[i].data._links.hasOwnProperty("city:urban_area")) {
              html += `<li class='list-item' data-href='${searchResults[i]._links["city:item"].href}'>${searchResults[i].matching_full_name}</li>`;
            }
          }
          html += "</ol>";
          if (html === "<ol class='list'></ol>") {
            html =
              '<div class="alert alert-warning" role="alert">City not found in database</div>';
          }
          scoringContainer.innerHTML = html;
        });

        scoringContainer.addEventListener("click", (event) => {
          if (event.target.tagName === "LI") {
            axios
              .get(event.target.getAttribute("data-href"))
              .then((response) => {
                // NUOVA CHIAMATA API
                const urbanAreaUrl =
                  response.data._links["city:urban_area"].href;
                axios
                  .get(urbanAreaUrl)
                  .then((response) => {
                    const data = response.data;
                    console.log(data);
                    const scoresUrl = response.data._links["ua:scores"].href;
                    axios
                      .get(scoresUrl)
                      .then((response) => {
                        const scoresData = response.data;
                        // Fai qualcosa con i dati delle valutazioni
                        let categories = response.data.categories;
                        let summary = response.data.summary;
                        let cityScore = response.data.teleport_city_score;
                        for (let i = 0; i < categories.length; i++) {
                          let htmlDescription = `<p>${summary}</p> 
                          <p style='text-align: center;'><b>City Scoring: ${cityScore.toFixed(
                            2
                          )}<b></p>`;
                          let html = "<div class='categories'>";
                          for (let i = 0; i < categories.length; i++) {
                            let score = categories[i].score_out_of_10;
                            html += `<div><span class='dot' style='background-color: ${categories[i].color};'></span>
                              <span>${categories[i].name}</span>`;
                            if (Number.isInteger(score)) {
                              html += `<p>${score}/10</p>
                              </div>`;
                            } else {
                              html += `
                              <p>${score.toFixed(1)}/10</p>
                              </div>`;
                            }
                          }
                          html += "</div>";
                          cityDescriptionContainer.classList.add(
                            "border-container",
                            "windows-background",
                            "paragraph"
                          );
                          cityDescriptionContainer.innerHTML = htmlDescription;
                          scoringContainer.innerHTML = html;
                        }
                        console.log(scoresData);
                      })
                      .catch((error) => {
                        console.error(error);
                      });
                  })
                  .catch((error) => {
                    console.error(error);
                  });
              })
              .catch((error) => {
                console.error(error);
              });
          }
        });
      } else {
        // SE NON CI SONO CITTà OMONIME ALLORA DEVO MOSTRARE SEMPLICEMENTE I DATI
      }
    })
    .catch((error) => {
      console.error(error);
    });
});

// ----------------------------------------------FUNCTIONS-------------------------------------------------

// This function retrieves the 10 best cities according to the teleport_city_score via the teleport api
async function displayTopCities() {
  bestContainer.innerHTML = "Loading...";
  try {
    const timestamp = new Date().getTime();
    const urbanAreasResponse = await axios.get(
      `https://api.teleport.org/api/urban_areas/?t=${timestamp}`
    );
    const cities = urbanAreasResponse.data._links["ua:item"];
    const citiesPromises = cities.map(async (city) => {
      const cityResponse = await axios.get(city.href);
      const cityScores = await axios.get(
        cityResponse.data._links["ua:scores"].href
      );
      const cityCountry = await axios.get(
        cityResponse.data._links["ua:countries"][0].href
      );
      return {
        name: city.name,
        score: cityScores.data.teleport_city_score,
        countryCode: cityCountry.data.iso_alpha2,
      };
    });
    const citiesWithScores = await Promise.allSettled(citiesPromises);
    console.log("cities with scores: ", citiesWithScores);
    const topCities = citiesWithScores
      .filter((city) => city.status === "fulfilled")
      .map((city) => city.value)
      .sort((a, b) => b.score - a.score)
      .slice(0, 10);
    console.log("top cities: ", topCities);
    bestContainer.innerHTML = "";
    for (let i = 0; i < topCities.length; i++) {
      const city = topCities[i];
      const countryFlag = `https://restcountries.com/v2/alpha/${city.countryCode}`;
      const flagResponse = await axios.get(countryFlag);
      const flag = flagResponse.data.flag;
      const cityDiv = document.createElement("div");
      cityDiv.innerHTML = `
        <span style="display: inline-block">
          <h4 style="display: inline-block; margin-right: 6px;">${i + 1}.</h4>
          <h4 style="display: inline-block"> ${city.name}</h4>
          <img src="${flag}" alt="${
        city.name
      }" style="width: 20px;display: inline-block; margin-bottom: 6px; margin-left: 6px;">
        </span>
        <p>Teleport City Score: ${city.score.toFixed(2)}</p>
      `;

      bestContainer.appendChild(cityDiv);
    }
  } catch (error) {
    console.error(error);
  }
}

// This function retrieves the 10 worst cities according to the teleport_city_score via the teleport api
async function displayWorstCities() {
  worstContainer.innerHTML = "Loading...";
  try {
    const timestamp = new Date().getTime();
    const urbanAreasResponse = await axios.get(
      `https://api.teleport.org/api/urban_areas/?t=${timestamp}`
    );
    const cities = urbanAreasResponse.data._links["ua:item"];
    const citiesPromises = cities.map(async (city) => {
      const cityResponse = await axios.get(city.href);
      const cityScores = await axios.get(
        cityResponse.data._links["ua:scores"].href
      );
      const cityCountry = await axios.get(
        cityResponse.data._links["ua:countries"][0].href
      );
      return {
        name: city.name,
        score: cityScores.data.teleport_city_score,
        countryCode: cityCountry.data.iso_alpha2,
      };
    });
    const citiesWithScores = await Promise.allSettled(citiesPromises);
    console.log("cities with scores: ", citiesWithScores);
    const topCities = citiesWithScores
      .filter((city) => city.status === "fulfilled")
      .map((city) => city.value)
      // ordinamento in base al punteggio più basso
      .sort((a, b) => a.score - b.score)
      .slice(0, 10);
    console.log("top cities by lowest score: ", topCities);
    worstContainer.innerHTML = "";
    for (let i = 0; i < topCities.length; i++) {
      const city = topCities[i];
      const countryFlag = `https://restcountries.com/v2/alpha/${city.countryCode}`;
      const flagResponse = await axios.get(countryFlag);
      const flag = flagResponse.data.flag;
      const cityDiv = document.createElement("div");
      cityDiv.innerHTML = `
        <span style="display: inline-block">
          <h4 style="display: inline-block; margin-right: 6px;">${i + 1}.</h4>
          <h4 style="display: inline-block"> ${city.name}</h4>
          <img src="${flag}" alt="${
        city.name
      }" style="width: 20px;display: inline-block; margin-bottom: 6px; margin-left: 6px;">
        </span>
        <p>Teleport City Score: ${city.score.toFixed(2)}</p>
      `;
      worstContainer.appendChild(cityDiv);
    }
  } catch (error) {
    console.error(error);
  }
}
