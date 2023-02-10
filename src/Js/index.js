import "../CSS/style.css";

// ----------------------------CONSTANTS AND VARIABLES-----------------------------------------------

const button = document.querySelector("#search");
const inputField = document.querySelector("#inputField");
const bestContainer = document.querySelector("#best-container");
const worstContainer = document.querySelector("#worst-container");
const scoringContainer = document.querySelector("#scoring-container");
const cityDescriptionContainer = document.querySelector("#city-description");
const backContainer = document.querySelector("#back");
const backButton = document.querySelector("#back-button");
// -----------------------------------LISTENERS---------------------------------------------------

// Following listeners call the displayTopCities and displayWorstCities functions when the page is refreshed
window.addEventListener("load", displayTopCities);
window.addEventListener("load", displayWorstCities);

// this listener retrieves the result of the city searched via the search button
button.addEventListener("click", async (event) => {
  event.preventDefault();
  backContainer.classList.add("invisible"); //it is important to make it invisible because if I have already done a search then it is visible
  scoringContainer.innerHTML = "";
  cityDescriptionContainer.innerHTML = "";
  cityDescriptionContainer.classList.remove(
    "border-container",
    "windows-background"
  );
  const city = inputField.value.toLowerCase();
  // Make a GET request to the Teleport API with the city name
  try {
    const response = await axios.get(
      `https://api.teleport.org/api/cities/?search=${city}`
    );
    // Get the search results from the API response
    const searchResults = response.data._embedded["city:search-results"];
    let html = "<ol class='list'>";
    const promises = [];
    // Loop through the search results and make a GET request for each city
    for (let i = 0; i < searchResults.length; i++) {
      promises.push(axios.get(searchResults[i]._links["city:item"].href));
    }
    // Wait for all the city requests to complete
    const responses = await Promise.all(promises);
    // Loop through the city responses and add the city to the HTML string if it has an urban area
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
    alert("A generic error is occurred.");
  }
});

// this listener is activated when clicking on an element with the tag 'li' within the 'scoringcontainer'.
scoringContainer.addEventListener("click", async (event) => {
  // When an 'LI' element is clicked, a request for city data is made
  if (event.target.tagName === "LI") {
    try {
      const cityData = await axios.get(event.target.getAttribute("data-href"));
      // The URL for the city's urban area (urbanAreaUrl) and the urban area data (urbanAreaData) is obtained by calling the API.
      const urbanAreaUrl = cityData.data._links["city:urban_area"].href;
      const urbanAreaData = await axios.get(urbanAreaUrl);
      // The URL for the scores (scoresUrl) and the scores data (scoresData) is obtained by calling the API.
      const scoresUrl = urbanAreaData.data._links["ua:scores"].href;
      let scoresData = await axios.get(scoresUrl);

      scoresData = scoresData.data;

      createCityScoreHTML(scoresData);
    } catch (error) {
      alert("A generic error is occurred.");
    }
  }
});

// this listener is activated when clicking on the div cointaining "to the home"
backButton.addEventListener("click", function () {
  location.reload();
});

// this listener is activated when clicking on the name of a city in the best and worst lists
scoringContainer.addEventListener("click", async (event) => {
  if (event.target.id === "city-name") {
    try {
      let cityName = event.target.textContent.toLowerCase();
      cityName = cityName.replace(/\s/g, "-"); // this is important for handling multi-word city names
      const cityData = await axios.get(
        `https://api.teleport.org/api/urban_areas/slug:${cityName}/scores/`
      );

      const scoresData = cityData.data;
      createCityScoreHTML(scoresData);
      backContainer.classList.remove("invisible");
    } catch (error) {
      alert("A generic error is occurred.");
    }
  }
});

// ----------------------------------------------FUNCTIONS-------------------------------------------------

// Function used to create description and score of a city
const createCityScoreHTML = (scoresData) => {
  // Extract the categories, summary, and city score from the data
  let categories = scoresData.categories;
  let summary = scoresData.summary;
  let cityScore = scoresData.teleport_city_score;

  // Create HTML to display the summary and city score
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

// Function for creating the html for city's categories
const createHTMLCategories = (categories) => {
  let html = "<div class='categories'>";
  // Loop through each category and create HTML for each
  for (let category of categories) {
    let score = category.score_out_of_10;
    let firstDecimal = +score.toFixed(1).slice(-1);
    html += `<div id="categories-div" class="d-flex">
              <div class='dot' style='background-color: ${category.color};'></div>
              <div class="categories-text"><p class="mb-0 pb-0">${category.name}</p>`;
    // Check if score has one decimal or not
    if (firstDecimal == 0) {
      html += `<p class="scoring-text mt-0 pt-0" style="text-align: left;">${score.toFixed(
        0
      )}/10</p>`;
    } else {
      html += `<p class="scoring-text mt-0 pt-0" style="text-align: left;">${score.toFixed(
        1
      )}/10</p>`;
    }

    html += "</div></div>";
  }
  html += "</div>";
  return html;
};

// This function retrieves the 10 best cities according to the teleport_city_score via the teleport api
// The flag of each city's country is also fetched and displayed in the HTML.
async function displayTopCities() {
  bestContainer.innerHTML = "Loading...";
  try {
    const timestamp = new Date().getTime();
    const urbanAreasResponse = await axios.get(
      `https://api.teleport.org/api/urban_areas/?t=${timestamp}` // A timestamp is created to avoid cache issues when making API requests
    );
    // A GET request to the Teleport API to retrieve data about all urban areas
    const cities = urbanAreasResponse.data._links["ua:item"];
    // Create an array of promises for each city's scores and country data.
    const citiesPromises = cities.map(async (city) => {
      const cityResponse = await axios.get(city.href);
      const cityScores = await axios.get(
        cityResponse.data._links["ua:scores"].href
      );
      const cityCountry = await axios.get(
        cityResponse.data._links["ua:countries"][0].href
      );
      // Return an object with the city's name, score, and country code.
      return {
        name: city.name,
        score: cityScores.data.teleport_city_score,
        countryCode: cityCountry.data.iso_alpha2,
      };
    });
    // Wait for all the city data promises to resolve and get an array of the fulfilled values.
    const citiesWithScores = await Promise.allSettled(citiesPromises);
    // Filter the array to only include cities with fulfilled promises and sort them based on their score in descending order.
    const topCities = citiesWithScores
      .filter((city) => city.status === "fulfilled")
      .map((city) => city.value)
      .sort((a, b) => b.score - a.score)
      .slice(0, 10);
    bestContainer.innerHTML = "";
    // Loop through the top 10 cities and display their information.
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
    alert("A generic error is occurred.");
  }
}

// This function retrieves the 10 worst cities according to the teleport_city_score via the teleport api
// The flag of each city's country is also fetched and displayed in the HTML.
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
    const topCities = citiesWithScores
      .filter((city) => city.status === "fulfilled")
      .map((city) => city.value)
      // sorting by lowest score
      .sort((a, b) => a.score - b.score)
      .slice(0, 10);
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
    alert("A generic error is occurred.");
  }
}
