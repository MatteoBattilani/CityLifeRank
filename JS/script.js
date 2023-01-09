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
      // Estrarre le città dalla risposta
      const cities = response.data._links["ua:item"];
      // Ordinare le città in base al punteggio dell'indice della qualità della vita
      cities.sort((a, b) => {
        // Recuperare il punteggio dell'indice della qualità della vita per ogni città
        const qualityOfLifeScoreA =
          a.quality_of_life && a.score.quality_of_life
            ? a.score.quality_of_life
            : 0;
        const qualityOfLifeScoreB =
          b.quality_of_life && b.score.quality_of_life
            ? b.score.quality_of_life
            : 0;
        // Confrontare i punteggi e ritornare 1, -1 o 0 a seconda del risultato del confronto
        if (qualityOfLifeScoreA > qualityOfLifeScoreB) {
          return -1;
        } else if (qualityOfLifeScoreA < qualityOfLifeScoreB) {
          return 1;
        } else {
          return 0;
        }
      });

      // Prendere le prime 10 città
      const topCities = cities.slice(0, 10);
      // Creare il contenuto HTML
      let html = "";
      topCities.forEach((city) => {
        html += `
          <div class="city">
            <h2>${city.name}</h2>
            <p>Quality of Life Index: ${city.href}</p>
          </div>
        `;
      });
      // Inserire il contenuto HTML nel div
      dataContainer.innerHTML = html;
    })
    .catch((error) => console.log(error));
}

window.addEventListener("load", displayTopCities);
