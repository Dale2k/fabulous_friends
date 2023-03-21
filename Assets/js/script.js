var apiURL = "https://api.thecatapi.com/v1/images/search"

var toJSON = function (response) {
    return response.json();
}
var idEl = document.querySelector('#id')

var renderCats = function({ id }) {
    idEl.innerHTML = null;
    for(i=0;i<id.length;i++) {
        var cardLink = document.createElement('a');
        cardLink.href = results.url
        idEl.appendChild
    }
}



fetch(apiURL) 
    .then(toJSON); 
        console.log(response);
    
    .then(renderCats) 
        console.log(data);
    
    
    .catch(function (err) {
        console.log(err)
    })

    

console.log("hello")



