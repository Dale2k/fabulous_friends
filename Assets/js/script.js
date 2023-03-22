var apiURL = "https://dog.ceo/api/breed/hound/images";
var formatInput = document.querySelector('#format');



var toJSON = function (response) {
  console.log(response);
  return response.json();
};
var idEl = document.querySelector("#id");

var renderCats = function (data) {
  console.log(data);
  idEl.innerHTML = null;
  for (i = 0; i < data.message.length; i++) {
    var cardLink = document.createElement("img");
    cardLink.setAttribute("src", data.message[i]);
    idEl.appendChild(cardLink);
  }
};

// if (format) {
//   apiURL = baseURL + format + q;
// }

// var apiURL = baseURL + q;

fetch(apiURL)
  .then(toJSON)
  .then(renderCats)
  .catch(function (err) {
    console.log(err);
  });

  var format = formatInput.value.trim();

  
  var baseURL = 'https://dog.ceo/api/breed/';
  console.log(baseURL)



  if (format) {
    apiURL = baseURL + format + '/images/random'
  }