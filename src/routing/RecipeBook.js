import React, { useState } from "react";

function App() {
    const [recipes, setRecipes] = useState([]);
    const [newRecipe, setNewRecipe] = useState({ title: "", ingredients: "" });

    // Handle form input
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewRecipe({ ...newRecipe, [name]: value });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (newRecipe.title && newRecipe.ingredients) {
            setRecipes([...recipes, newRecipe]);
            setNewRecipe({ title: "", ingredients: "" });
        }
    };

    // Delete recipe
    const handleDelete = (index) => {
        setRecipes(recipes.filter((_, i) => i !== index));
    };

    return (
        <div className="App">
         <h1>Recipe Manager</h1>

            {/* Add recipe form */}
            <form onSubmit={handleSubmit} className="recipe-form">
            
                <input
                    type="text"
                    name="title"
                    value={newRecipe.title}
                    onChange={handleInputChange}
                    placeholder="Recipe Title"
                    required
                />
                <textarea
                    name="ingredients"
                    value={newRecipe.ingredients}
                    onChange={handleInputChange}
                    placeholder="Ingredients (comma separated)"
                    required
                />
                <button type="submit">Add Recipe</button>
            </form>

            {/* Recipe list */}
            <div className="recipe-list">
                {recipes.length === 0 ? (
                    <p>No recipes added yet.</p>
                ) : (
                    recipes.map((recipe, index) => (
                        <div key={index} className="recipe-card">
                            <h2>{recipe.title}</h2>
                            <p>
                                <strong>Ingredients:</strong> {recipe.ingredients}
                            </p>
                            <button onClick={() => handleDelete(index)}>Delete</button>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default App;