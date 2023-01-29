// ----------------------------CONSTANTS AND VARIABLES-----------------------------------------------

const button = document.querySelector("#search");
const inputField = document.querySelector("#inputField");
const bestContainer = document.querySelector("#best-container");
const worstContainer = document.querySelector("#worst-container");
const scoringContainer = document.querySelector("#scoring-container");
const cityDescriptionContainer = document.querySelector("#city-description");
const backContainer = document.querySelector("#back");

// -----------------------------------LISTENERS---------------------------------------------------

// Following listeners call the displayTopCities and displayWorstCities functions when the page is refreshed
window.addEventListener("load", displayTopCities);
window.addEventListener("load", displayWorstCities);

// THIS LISTENER RETRIEVES THE RESULT OF THE CITY SEARCHED VIA THE SEARCH BUTTON
button.addEventListener("click", async (event) => {
  event.preventDefault();
  backContainer.classList.add("invisible"); //è importante renderlo invisibile perchè se ho già fatto una ricerca allora è visibile
  scoringContainer.innerHTML = "";
  cityDescriptionContainer.innerHTML = "";
  cityDescriptionContainer.classList.remove(
    "border-container",
    "windows-background"
  );
  const city = inputField.value.toLowerCase();
  try {
    const response = await axios.get(
      `https://api.teleport.org/api/cities/?search=${city}`
    );
    const searchResults = response.data._embedded["city:search-results"];
    let html = "<ol class='list'>";
    const promises = [];
    for (let i = 0; i < searchResults.length; i++) {
      promises.push(axios.get(searchResults[i]._links["city:item"].href));
    }
    const responses = await Promise.all(promises);
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
    backContainer.classList.remove("invisible");
  } catch (error) {
    console.error(error);
  }
});

// THIS LISTENER IS ACTIVATED WHEN CLICKING ON AN ELEMENT WITH THE TAG 'LI' WITHIN THE 'scoringContainer'.
scoringContainer.addEventListener("click", async (event) => {
  if (event.target.tagName === "LI") {
    try {
      const cityData = await axios.get(event.target.getAttribute("data-href"));
      const urbanAreaUrl = cityData.data._links["city:urban_area"].href;
      const urbanAreaData = await axios.get(urbanAreaUrl);
      const scoresUrl = urbanAreaData.data._links["ua:scores"].href;
      let scoresData = await axios.get(scoresUrl);

      scoresData = scoresData.data;

      createCityScoreHTML(scoresData);
    } catch (error) {
      console.error(error);
    }
  }
});

// THIS LISTENER IS ACTIVATED WHEN CLICKING ON THE DIV COINTAINING "TO THE HOME"
backContainer.addEventListener("click", function () {
  location.reload();
});

// THIS LISTENER IS ACTIVATED WHEN CLICKING ON THE NAME OF A CITY IN THE BEST AND WORST LISTS
scoringContainer.addEventListener("click", async (event) => {
  if (event.target.id === "city-name") {
    try {
      let cityName = event.target.textContent.toLowerCase();
      cityName = cityName.replace(/\s/g, "-");
      console.log(cityName);
      const cityData = await axios.get(
        `https://api.teleport.org/api/urban_areas/slug:${cityName}/scores/`
      );

      const scoresData = cityData.data;
      createCityScoreHTML(scoresData);
      backContainer.classList.remove("invisible");
    } catch (error) {
      console.error(error);
    }
  }
});

// ----------------------------------------------FUNCTIONS-------------------------------------------------

// FUNCTION USED TO CREATE DESCRIPTION AND SCORE OF A CITY
const createCityScoreHTML = (scoresData) => {
  let categories = scoresData.categories;
  let summary = scoresData.summary;
  let cityScore = scoresData.teleport_city_score;

  let htmlDescription = `<p>${summary}</p> 
                <p style='text-align: center;'><b>City Scoring: ${cityScore.toFixed(
                  2
                )}<b></p>`;

  scoringContainer.innerHTML = createHTMLCategories(categories);

  cityDescriptionContainer.classList.add(
    "border-container",
    "windows-background",
    "paragraph"
  );
  cityDescriptionContainer.innerHTML = htmlDescription;
};

// FUNCTION FOR CREATING THE HTML FOR CITY'S CATEGORIES
const createHTMLCategories = (categories) => {
  let html = "<div class='categories'>";
  for (let category of categories) {
    let score = category.score_out_of_10;
    let firstDecimal = +score.toFixed(1).slice(-1);
    html += `<div id="categories-div" class="d-flex">
              <div class='dot' style='background-color: ${category.color};'></div>
              <div class="paragraph"><p class="mb-0 pb-0">${category.name}</p>`;

    if (firstDecimal == 0) {
      html += `<p class="scoring-text mt-0 pt-0">${score.toFixed(0)}/10</p>`;
    } else {
      html += `<p class="scoring-text mt-0 pt-0">${score.toFixed(1)}/10</p>`;
    }

    html += "</div></div>";
  }
  html += "</div>";
  return html;
};

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
          <h4 id="city-name" style="display: inline-block">${city.name}</h4>
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
          <h4 id="city-name" style="display: inline-block">${city.name}</h4>
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
