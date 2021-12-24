const pokemonDiv = document.getElementById("pokemon");

var backy = document.getElementById("back");

const apiData = {
  url: "https://pokeapi.co/api/v2/",
  type: "pokemon",
  id: "133",
};

const { url, type, id } = apiData;

const apiUrl = `${url}${type}/${id}`;

fetch(apiUrl)
  .then((data) => data.json())
  .then((pokemon) => generateHtml(pokemon));

const generateHtml = (data) => {
  console.log(data);
  var real = data.name.charAt(0).toUpperCase() + data.name.slice(1);
  var html = `
  <div class="name">${real}</div>
    <img src=${data.sprites.front_default}>
    <div class="details">
        <span>Height: ${data.height}</span>
        <span>Weight: ${data.weight}</span>
    </div>
    <div id="back"></div>
  `;

  pokemonDiv.innerHTML += html;
};

const button = document.querySelector(".btn");

function change() {
  const apiData = {
    url: "https://pokeapi.co/api/v2/",
    type: "pokemon",
    id: "133",
  };
  const new_id = Math.floor(Math.random() * 151 + 1);
  apiData["id"] = new_id;

  const { url, type, id } = apiData;

  const apiUrl = `${url}${type}/${id}`;

  fetch(apiUrl)
    .then((data) => data.json())
    .then((pokemon) => generateHtml(pokemon));

  var generateHtml = (data) => {
    console.log(data);
    var real = data.name.charAt(0).toUpperCase() + data.name.slice(1);
    var html = `
    <div class="name">${real}</div>
    <img src=${data.sprites.front_default}>
    <div class="details">
        <span>Height: ${data.height}</span>
        <span>Weight: ${data.weight}</span>
    </div>
    <div id="back"></div>
  `;

    pokemonDiv.innerHTML = html;

    const scenery = Math.floor(Math.random() * 9 + 1);
    document.getElementById("back").style.background = "url(scenery/" + scenery + ".jpg)";

    document.getElementById("pokemon").style.background = "url(backgrounds/" + scenery + ".png)";
  };
}

button.onclick = change;
