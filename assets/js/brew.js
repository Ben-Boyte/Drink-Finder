const searchTxt = document.getElementById('searchText').value;
const searchBtn = document.getElementById('searchBtn').addEventListener('click', (search));

function search() {
    var results = ("https://api.openbrewerydb.org/breweries/search?query=" + (searchTxt));
    console.log(results);
  };

//let response = fetch(url);

//fetch(url)
//.then(response => response.text())
//.then(data => console.log(data));

// async function fetchText() {
//     let response = await fetch(url);
//     let data = await response.text();
//     console.log(data);
// }

//fetchText();