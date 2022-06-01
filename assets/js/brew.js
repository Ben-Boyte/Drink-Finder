const searchTxt = document.getElementById("searchText");
const searchBtn = document.getElementById('searchBtn').addEventListener('click', (search));

function search() {

    const searchResult = searchTxt.value;   
   
    const results = "https://api.openbrewerydb.org/breweries/search?query=" + searchResult;
    
    let response = fetch(results);

    

    fetch(results)
.then(response => response.text())
.then(data => console.log(data));
    
};





// async function fetchText() {
//     let response = await fetch(url);
//     let data = await response.text();
//     console.log(data);
// }

//fetchText();