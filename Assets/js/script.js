var apiURL = "https://api.thecatapi.com/v1/images/0XYvRd7oD"

//var toJSON = function (response) {
    //return response.json();




fetch(apiURL)
    .then(function(response) {
    return response.json();
    console.log(response);
    })
    .then(function (data) {
        console.log(data);
    })
    .catch(function (err) {
        console.log(err)
    })


console.log("hello")

