const API_key = 1;

var randomCocktail = function() {
    fetch("https://thecocktaildb.com/api/json/v1/1/random.php");
};

document.querySelector("#cocktail-button").addEventListener("click", function(event) {

    const cocktailFinder = "https://thecocktaildb.com/api/json/v1/1/random.php";

    fetch(cocktailFinder);

    console.log(randomCocktail);

   });

// var displayCocktail = function(){
   
//     for (var i = 0; i < cocktail.length; i++) {

//     var cocktailName = cocktail[i].strDrink
    
//     var cocktailEl = document.createElement("div");
//     var titleEl = document.createElement("span");
    
//     titleEl.textContent = cocktailName;
    
//     cocktailEl.appendChild(titleEl);
    
//     cocktailContainerEl.appendChild(cocktailEl);
//    };
// }