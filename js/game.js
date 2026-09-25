const ingredientsContainer = document.getElementById('ingredients');
for (let i = 0; i < ingredientsList.length; i++) {
    // Create DOM Element
    let aside = document.createElement('aside');
    ingredientsContainer.appendChild(aside);
    aside.draggable = true;
    aside.classList.add('ingredient');
    aside.innerText = ingredientsList[i];
}

// Game Start

const ingredients = document.querySelectorAll('.ingredient');
const cauldron = document.getElementById('cauldron');

let draggedIngredient = null;
let discoveredRecipes = JSON.parse(localStorage.getItem("discoveredRecipes")) || [];

ingredients.forEach(ingredient => {
    ingredient.addEventListener("dragstart", () => {
        draggedIngredient = ingredient;
        ingredient.classList.add("dragging");
    });

    ingredient.addEventListener("dragend", () => {
        draggedIngredient = null;
        ingredient.classList.remove("dragging");
    });
})

function allowDrop(c) {
    c.addEventListener("dragover", (e) => {
        e.preventDefault();
    });

    c.addEventListener("drop", (e) => {
        e.preventDefault();
        if (!draggedIngredient) {
            return;
        }
        c.appendChild(draggedIngredient);
    });
}

// Tap for Mobile
ingredients.forEach(ingredient => {
    ingredient.addEventListener("click", (e) => {
        cauldron.appendChild(ingredient);
    });
});

function allowTap(c) {
    c.addEventListener("click", (e) => {
        if (!e.target.classList.contains("ingredient")) {
            return;
        }
        ingredientsContainer.appendChild(e.target);
    });
}


allowDrop(ingredientsContainer);
allowDrop(cauldron);

allowTap(cauldron);

const mixButton = document.getElementById('mix');
const message = document.getElementById('message');
const discoveredName = document.getElementById('discovered-name');
const discoveredDescription = document.getElementById('discovered-description');
mixButton.addEventListener("click", (e) => {
    e.preventDefault();
    const selectedIngredients = [...cauldron.querySelectorAll(".ingredient")].map(ingredient => ingredient.innerText);
    const recipe = checkRecipe(selectedIngredients);
    
    if (recipe) {
        if (!discoveredRecipes.includes(recipe.id)) {
            discoveredRecipes.push(recipe.id);
            localStorage.setItem("discoveredRecipes", JSON.stringify(discoveredRecipes));
        }
        discoveredName.innerText = "Tu as découvert : " + recipe.name + " !";
        discoveredDescription.innerText = recipe.description;
    } else {
        const failedMessage = failedRecipes[Math.floor(Math.random() * failedRecipes.length)];
        discoveredName.innerText = "Oh non !";
        discoveredDescription.innerText = failedMessage;
    }

    message.showPopover();
});

function checkRecipe(ingredients) {
    const selected = [...ingredients].sort();
    const recipe = recipes.find(recipe => {
        const ingredients = [...recipe.ingredients].sort();
        return JSON.stringify(selected) === JSON.stringify(ingredients);
    });
    return recipe || null;
}