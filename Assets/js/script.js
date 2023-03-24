var formatInputDog = document.querySelector("#formatDog");
var formatInputCat = document.querySelector("#formatCat");
var catShowEl = document.querySelector("#catShow");
var dogShowEl = document.querySelector("#dogShow");
var mostRecentSearchEl = document.querySelector("#mostRecentSearch");

// local storage dog
var getSearchedDog = function () {
  let dogHistory = JSON.parse(localStorage.getItem("searchedDog"));
  if (dogHistory) {
    dogShowEl.querySelector('h2').style.display = null;
    dogShowEl.querySelector(".img-container").innerHTML = "<img src='" + dogHistory + "'/>";
  }
};

var setSearchedDog = function (text) {
  return localStorage.setItem("searchedDog", JSON.stringify(text));
};

// //  local storage Cat
var getSearchedCat = function () {
  let catHistory = JSON.parse(localStorage.getItem("searchedCat"));
  if (catHistory) {
    catShowEl.querySelector('h2').style.display = null;
    catShowEl.querySelector(".img-container").innerHTML = "<img src='" + catHistory + "'/>";
  }
};
var setSearchedCat = function (text) {
  return localStorage.setItem("searchedCat", JSON.stringify(text));
};

var toJSON = function (response) {
  return response.json();
};

var renderDogs = function (data) {
  mostRecentSearchEl.querySelector(".img-container").innerHTML = "<img src='" + data.message + "'/>";
  setSearchedDog(data.message);
};

var renderCats = function (data) {
  mostRecentSearchEl.querySelector(".img-container").innerHTML = "<img src='" + data[0].url + "'/>";
  setSearchedCat(data[0].url);
};

function dogBreed(event) {
  event.preventDefault();
  var format = formatInputDog.value.trim();
  var dogAPIURL = "https://dog.ceo/api/breed/" + format + "/images/random";

  fetch(dogAPIURL)
    .then(toJSON)
    .then(renderDogs)
    .catch(function (err) {
    });
}
formatInputDog.addEventListener("change", dogBreed);

function catBreed(event) {
  event.preventDefault();

var catAPIURL = "https://api.thecatapi.com/v1/images/search?limit=1&breed_ids=" + formatInputCat.value.trim();

  fetch(catAPIURL)
    .then(function (response) {
      return response.json();
    })
    .then(renderCats);
}

formatInputCat.addEventListener("change", catBreed);

getSearchedCat();
getSearchedDog();
