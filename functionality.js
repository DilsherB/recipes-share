const recipes = [
  {
    name: "Achar Gosht",
  ingredients: "Chicken 1/2 kg, Achar Gosht Masala, Zeera, Chopped Onion 1/4 kg, Cooking Oil 1/8 kg",
  instructions: "Fry chicken in oil for 10 min, Add (Chopped Onion, Zeera and Achar Gosht Masala), Cook for 20 min"},
  {
    name: "Chicken Karahi",
    ingredients: "Chicken 1/2 kg, Karahi Masala, Chopped Onion 1/4 kg, Cooking Oil 1/8 kg, Zeera",
    instructions: "Fry chicken in oil for 10 min, Add (Chopped Onion, Karahi Masala), Cook for 20 min"
  },
];

const displayRecipes = () => {
  const recipeList = document.getElementById("recipeList");
  recipeList.innerHTML = "";
  recipes.forEach((recipe, index) => {
    const card = document.createElement('div');
    card.classList.add('recipe-card');
    const ingredientsList = recipe.ingredients.split(',').map(item => `<li>${item.trim()}</li>`).join('');
    const instructionsList = recipe.instructions.split(',').map(item => `<li>${item.trim()}</li>`).join('');
    card.innerHTML += `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${recipe.name}</h5>
        <h6 class="card-subtitle">Ingredients:</h6>
        <p class="card-text">${ingredientsList}</p>
        <h6 class="card-subtitle">Instructions:</h6>
        <p class="card-text">${instructionsList}</p>
        <button type="button" style="font-size: 1rem;" onclick="editRecipe(${index})">Edit</button>
        <button type="button" style="font-size: 1rem;" onclick="deleteRecipe(${index})">Delete</button>
      </div>
    </div>
    `;
    recipeList.appendChild(card);
  })
}
displayRecipes();