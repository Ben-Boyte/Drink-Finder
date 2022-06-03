const clickButton = document.querySelector("#cocktail-button").addEventListener("click", (findCocktail));

<<<<<<< HEAD
    
    function findCocktail() {
    
    const APIkey = 1;
    var cocktailFinder = "https://thecocktaildb.com/api/json/v1/1/random.php";

    fetch(cocktailFinder)

    .then(response => response.json()).then(data => {
        
         const cocktail = (data.drinks[0].strDrink);
         const cocktailRecipe = (data.drinks[0].strInstructions);
        console.log(cocktail, cocktailRecipe);

        const drink = document.getElementById('drink');
        const drinkEl = document.createElement('div');
        const titleEl = document.createElement('span');
        titleEl.textContent = cocktail;
        drinkEl.appendChild(titleEl);
        drink.appendChild(drinkEl);

        const recipe = document.getElementById('recipe');
        const recipeEl = document.createElement('div');
        const spanEl = document.createElement('span');
        spanEl.textContent = cocktailRecipe;
        recipeEl.appendChild(spanEl);
        recipe.appendChild(recipeEl);


    })
};
=======
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
>>>>>>> 09cd9ba6ff9413773da3fcddcc46f4cbcbf07bc0
