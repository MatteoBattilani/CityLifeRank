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
      // per ogni città presente in ua:item
      for (let i = 0; i < cities.length; i++) {
        axios
          .get(cities[i].href)
          .then((response) => {
            const city = response.data._links["ua:scores"];
            axios.get(city.href).then((response) => {
              const punteggio = response.data.teleport_city_score;
              console.log(punteggio);
              cities[i].teleport_city_score = punteggio;
              if (i === cities.length - 1) {
                // tutte le chiamate sono state completate
                cities.sort((a, b) => {
                  return b.teleport_city_score - a.teleport_city_score;
                });
                // prendi le prime 10 città
                const topCities = cities.slice(0, 10);
                topCities.forEach((city) => {
                  const cityDiv = document.createElement("div");
                  cityDiv.innerHTML = `
                 <h2>${city.name}</h2>
                 <p>Teleport City Score: ${city.teleport_city_score}</p>
               `;
                  dataContainer.appendChild(cityDiv);
                });
              }
            });
          })
          .catch((error) => {
            console.error(error);
          });
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

window.addEventListener("load", displayTopCities);
