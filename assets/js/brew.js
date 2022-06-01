const searchTxt = document.getElementById("searchText");
const searchBtn = document.getElementById('searchBtn').addEventListener('click', (search));

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
});


};
