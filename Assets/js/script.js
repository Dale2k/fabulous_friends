var apiURL = "https://api.thecatapi.com/v1/images/search?&limit=10";

var toJSON = function (response) {
  console.log(response);
  return response.json();
};
var idEl = document.querySelector("#id");

var renderCats = function (data) {
  console.log(data);
  idEl.innerHTML = null;
  for (i = 0; i < data.length; i++) {
    var cardLink = document.createElement("img");
    cardLink.setAttribute("src", data[i].url);
    idEl.appendChild(cardLink);
  }
};

fetch(apiURL)
  .then(toJSON)
  .then(renderCats)
  .catch(function (err) {
    console.log(err);
  });
