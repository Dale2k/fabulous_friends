var apiURL = "https://dog.ceo/api/breed/";
var baseURL = "https://dog.ceo/api/breed/";
var formatInput = document.querySelector("#format");
// var format = formatInput.value.trim();
// console.log(format);
var formatInputCat = document.querySelector("#formatCat");
var starBtn = document.querySelector(".btn1");
var starBtn2 = document.querySelector(".btn2");
var cardLink = document.createElement("img");
// var catBaseApi = 'https://api.thecatapi.com/v1/breeds';

// var dogShowUrl = document.getElementById('a');
// dogShowUrl = dogShowUrl.value.url;

var catShowEl = document.querySelector("#catShow");
var dogShowEl = document.querySelector("#dogShow");

var catBasic2 =
  "https://api.thecatapi.com/v1/images/search?limit=1&breed_ids=" +
  formatInputCat.value.trim() +
  "&api_key=REPLACE_ME";

// local storage dog
var getSearchedDog = function () {
  let dogHistory = JSON.parse(localStorage.getItem("searchedDog"));
  console.log(dogHistory);
  let new2Img = document.createElement("img");
  new2Img.setAttribute("src", dogHistory);
  dogShowEl.append(new2Img);
};

var setSearchedDog = function (text) {
  // var searchedDog = getSearchedDog();
  // searchedDog.push(text);
  return localStorage.setItem("searchedDog", JSON.stringify(text));
};

// //  local storage Cat
var getSearchedCat = function () {
  let catHistory = JSON.parse(localStorage.getItem("searchedCat"));
  console.log(catHistory);
  let newImg = document.createElement("img");
  newImg.setAttribute("src", catHistory);
  catShowEl.append(newImg);
};
var setSearchedCat = function (text) {
  // var searchedCat = getSearchedCat();
  // searchedCat.push(text);
  return localStorage.setItem("searchedCat", JSON.stringify(text));
};

var toJSON = function (response) {
  // console.log(response);
  return response.json();
};
var idEl = document.querySelector("#id");

var renderDogs = function (data) {
  console.log(data);
  // for (i = 0; i < data.message.length; i++) {
  // var cardLink = document.createElement("img");
  cardLink.setAttribute("src", data.message);
  idEl.appendChild(cardLink);
  setSearchedDog(data.message);
  // }
};

// if (format) {
//   apiURL = baseURL + format + q;
// }

// var apiURL = baseURL + q;

// if (format) {
//   apiURL = baseURL + format + '/images/random'
//   console.log(apiURL);
// }
function dogBreed() {
  var format = formatInput.value.trim();
  console.log(format);
  // if (format) {
  apiURL = baseURL + format + "/images/random";
  console.log(apiURL);
  // }
  fetch(apiURL)
    .then(toJSON)
    .then(renderDogs)
    .catch(function (err) {
      console.log(err);
    });
  // fetch('https://dog.ceo/api/breed/akita/images/random')
  // .then(function (response){
  //   console.log(response)
  //   return response.json();
  // }).then(function(data){
  //   console.log(data);
  // })
}
starBtn.addEventListener("click", dogBreed);
// dogBreed()

function catBreed() {
  fetch(catBasic2)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      cardLink.setAttribute("src", data[0].url);
      idEl.appendChild(cardLink);
      setSearchedCat(data[0].url);
    });
}

starBtn2.addEventListener("click", catBreed);

getSearchedCat();
getSearchedDog();
