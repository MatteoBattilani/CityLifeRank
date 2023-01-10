const button = document.querySelector("#search");
const inputField = document.querySelector("#inputField");
const dataContainer = document.querySelector("#data-container");

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

function displayTopCities() {
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
          citiesWithScores.sort((a, b) => b.score - a.score);
          const topCities = citiesWithScores.slice(0, 10);
          topCities.forEach((city) => {
            const cityDiv = document.createElement("div");
            cityDiv.innerHTML = `
                <h2>${city.name}</h2>
                <p>Teleport City Score: ${city.score}</p>
              `;
            dataContainer.appendChild(cityDiv);
          });
        })
        .catch((error) => console.error(error));
    })
    .catch((error) => {
      console.error(error);
    });
}

window.addEventListener("load", displayTopCities);
