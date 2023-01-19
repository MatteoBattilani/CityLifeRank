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
function displayTopCities() {
  dataContainer.innerHTML = "Caricamento in corso...";
  axios
    .get("https://api.teleport.org/api/urban_areas/")
    .then((response) => {
      const cities = response.data._links["ua:item"];
      const promises = cities.map((city) => {
        return axios.get(city.href).then((res) => {
          const cityScores = res.data._links["ua:scores"].href;
          const cityCountry = res.data._links["ua:countries"][0].href;
          return axios.get(cityScores).then((scores) => {
            return axios.get(cityCountry).then((country) => {
              const countryCode = country.data.iso_alpha2;
              return {
                name: city.name,
                score: scores.data.teleport_city_score,
                countryCode: countryCode,
              };
            });
          });
        });
      });
      return Promise.all(promises);
    })
    .then((citiesWithScores) => {
      citiesWithScores.sort((a, b) => b.score - a.score);
      const topCities = citiesWithScores.slice(0, 10);
      dataContainer.removeChild(dataContainer.firstChild);
      topCities.forEach((city) => {
        const countryFlag = `https://restcountries.com/v2/alpha/${city.countryCode}`;
        axios.get(countryFlag).then((response) => {
          const flag = response.data.flag;
          const cityDiv = document.createElement("div");
          cityDiv.innerHTML = `<img src="${flag}" alt="${city.name}" style="width: 20px">
          <h4>${city.name}</h4>
          <p>Teleport City Score: ${city.score}</p>
          `;
          dataContainer.appendChild(cityDiv);
        });
      });
    })
    .catch((error) => console.error(error));
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
