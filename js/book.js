let container = document.getElementById('page');
let category = null;
for (let i = 0; i < recipes.length; i++) {
    let recipe = recipes[i];
        
    // Add category if different
    let potionCategory = recipe['category'];
    if (category != potionCategory) {
        let categoryTitle = document.createElement('h2');
        categoryTitle.innerText = potionCategory;
        categoryTitle.id = potionCategory.toLowerCase();
        container.appendChild(categoryTitle);

        let categoryContainer = document.createElement('section');
        categoryContainer.id = "category-" + potionCategory.toLowerCase();
        categoryContainer.classList.add('category');
        container.appendChild(categoryContainer);
        
        category = potionCategory;
    }

    // Create DOM Element
    let article = document.createElement('article');
    article.id = recipe['id'];
    article.classList.add('recipe');
        
    // Format Potion Data
    let potionTitle = recipe['name'];
    let potionIngredients = recipe['ingredients'];
    let potionDescription = recipe['description'];

    article.innerHTML = `
        <h3 class="recipe-name">${potionTitle}</h3>
        <p class="recipe-description">${potionDescription}</p>
        <p class="recipe-ingredients">${potionIngredients.join(", ")}</p>
    `;

    let correctCategory = document.getElementById('category-' + potionCategory.toLowerCase());
    correctCategory.appendChild(article);
}

// Secrets special case
let discoveredRecipes = JSON.parse(localStorage.getItem("discoveredRecipes")) || [];

const secretRecipes = recipes.filter(recipe => recipe.secret);
const secretDiscovered = secretRecipes.some(recipe => 
    discoveredRecipes.includes(recipe.id)
);

// Lock undiscovered potions
const allRecipes = document.querySelectorAll(".recipe");
allRecipes.forEach(recipeAttribut => {
    const recipeId = recipeAttribut.id;
    const recipe = recipes.find(recipe => recipe.id === recipeId);

    if (recipe.secret && !secretDiscovered) {
        const secretCategory = document.getElementById('secret');
        recipeAttribut.style.display = "none";
        secretCategory.style.display = "none";
        return;
    }

    if (!discoveredRecipes.includes(recipeId)) {
        recipeAttribut.querySelector(".recipe-name").innerText = "???";
        recipeAttribut.querySelector(".recipe-description").innerText = "Potion non découverte.";
        recipeAttribut.querySelector(".recipe-ingredients").innerText = "???";
    }
});