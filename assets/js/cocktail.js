API_key = 1;

var randomCocktail = function() {
    API_key = 1
    fetch("www.thecocktaildb.com/api/json/v1/1/random.php");
};

document.querySelector("#cocktail-button").addEventListener("click", function(event) {
    console.log("Test")
   });

var displayCocktail = function(){
   
    for (var i = 0; i < cocktail.length; i++) {

    var repoName = repos[i].owner.login + "/" + repos[i].name;
    
    var cocktailEl = document.createElement("div");
    var titleEl = document.createElement("span");
    
    titleEl.textContent = cocktailName;
    
    cocktailEl.appendChild(titleEl);
    
    cocktailContainerEl.appendChild(cocktailEl);
   };
}