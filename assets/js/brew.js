const searchTxt = document.getElementById("searchText");
const searchBtn = document.getElementById('searchBtn').addEventListener('click', (search));
//const container = document.getElementById('container');

function search() {

    const searchResult = searchTxt.value;   
   
    const results = "https://api.openbrewerydb.org/breweries/search?query=" + searchResult;
    

    fetch(results)

.then(function(response){
    return response.json();
})

.then(function(data) {
const brewName = data[0].name;
const brewStreet = data[0].street;
console.log(brewName, brewStreet)

const container = document.getElementById('container');
const brewEl = document.createElement("li");
const titleEl = document.createElement("span");
titleEl.textContent = brewName;
brewEl.appendChild(titleEl);
container.appendChild(brewEl);

const address = document.getElementById('address');
const divEl = document.createElement("li");
const spanEl = document.createElement("span");
spanEl.textContent = brewStreet;
divEl.appendChild(spanEl);
address.appendChild(divEl);

});


};
