// ----------------------------CONSTANTS AND VARIABLES-----------------------------------------------

const button = document.querySelector("#search");
const inputField = document.querySelector("#inputField");
const dataContainer = document.querySelector("#data-container");
const data2Container = document.querySelector("#data2-container");

// -----------------------------------LISTENERS---------------------------------------------------

// Following listeners call the displayTopCities and displayWorstCities functions when the page is refreshed
window.addEventListener("load", displayTopCities);
window.addEventListener("load", displayWorstCities);

// This listener retrieves the result of the city searched via the search button
button.addEventListener("click", (event) => {
  // Prevenire l'invio del form
  event.preventDefault();
  const city = inputField.value;
  axios
    .get(`https://api.teleport.org/api/urban_areas/slug:${city}/scores/`)
    .then((response) => {
      // Estrarre i dati che desideri visualizzare
      const data = response.data;
      // Creare il contenuto HTML che desideri inserire nel div
      const html = `
        <p>City: ${data.name}</p>
        <p>Quality of Life Index: ${data.categories[0].score_out_of_10}</p>
        <p>Healthcare Index: ${data.categories[1].score_out_of_10}</p>
        <p>Cost of Living Index: ${data.categories[2].score_out_of_10}</p>
      `;
      // Inserire il contenuto HTML nel div
      dataContainer.innerHTML = html;
    })
    .catch((error) => {
      console.error(error);
    });
});

// ----------------------------------------------FUNCTIONS-------------------------------------------------

// This function retrieves the 10 best cities according to the teleport_city_score via the teleport api
async function displayTopCities() {
  dataContainer.innerHTML = "Loading...";
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
    dataContainer.innerHTML = "";
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

      dataContainer.appendChild(cityDiv);
    }
  } catch (error) {
    console.error(error);
  }
}

// This function retrieves the 10 worst cities according to the teleport_city_score via the teleport api
function displayWorstCities() {
  data2Container.innerHTML = "Caricamento in corso...";
  axios
    .get("https://api.teleport.org/api/urban_areas/")
    .then((response) => {
      const cities = response.data._links["ua:item"];

      const promises = cities.map((city) => axios.get(city.href));
      Promise.all(promises)
        .then((responses) => {
          const citiesWithScores = responses.map((response, i) => {
            const cityScores = response.data._links["ua:scores"];
            return axios.get(cityScores.href).then((res) => {
              return {
                name: cities[i].name,
                score: res.data.teleport_city_score,
              };
            });
          });

          return Promise.all(citiesWithScores);
        })
        .then((citiesWithScores) => {
          citiesWithScores.sort((a, b) => a.score - b.score);
          const worstCities = citiesWithScores.slice(0, 10);
          data2Container.removeChild(data2Container.firstChild);
          worstCities.forEach((city) => {
            const cityDiv = document.createElement("div");
            cityDiv.innerHTML = `
                <h4>${city.name}</h4>
                <p>Teleport City Score: ${city.score}</p>
              `;
            data2Container.appendChild(cityDiv);
          });
        })
        .catch((error) => console.error(error));
    })
    .catch((error) => {
      console.error(error);
    });
}
