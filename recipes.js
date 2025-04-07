const recipes = [
    {
        name: "Allergy-Free Pancakes",
        category: "breakfast",
        ingredients: ["flour", "eggs", "milk"],
        substitutions: {
            "eggs": "flaxseed mixture",
            "milk": "almond milk"
        },
        image: "https://images.pexels.com/photos/3764640/pexels-photo-3764640.jpeg",
        instructions: "Mix all ingredients and cook on a skillet."
    },
    {
        name: "Gluten-Free Pasta",
        category: "lunch",
        ingredients: ["gluten-free pasta", "olive oil", "garlic"],
        substitutions: {},
        image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
        instructions: "Boil pasta and sauté garlic in olive oil."
    },
    {
        name: "Dairy-Free Chocolate Cake",
        category: "dessert",
        ingredients: ["flour", "cocoa powder", "sugar", "almond milk"],
        substitutions: {
            "butter": "coconut oil",
            "milk": "almond milk"
        },
        image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
        instructions: "Mix ingredients and bake at 350°F for 30 minutes."
    },
    {
        name: "Allergy-Free Smoothie",
        category: "breakfast",
        ingredients: ["Banana", "Spinach", "Almond Milk"],
        substitutions: {},
        image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
        instructions: "Blend all ingredients until smooth."
    },
    {
        name: "Quinoa Salad",
        category: "lunch",
        ingredients: ["Quinoa", "Cherry Tomatoes", "Cucumber", "Olive Oil"],
        substitutions: {},
        image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
        instructions: "Cook quinoa and mix with chopped vegetables."
    },
    {
        name: "Vegan Chocolate Mousse",
        category: "dessert",
        ingredients: ["Avocado", "Cocoa Powder", "Maple Syrup"],
        substitutions: {},
        image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
        instructions: "Blend all ingredients until creamy."
    },
    {
        name: "Chickpea Curry",
        category: "dinner",
        ingredients: ["Chickpeas", "Coconut Milk", "Curry Powder"],
        substitutions: {},
        image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
        instructions: "Cook chickpeas with coconut milk and curry powder."
    },
    {
        name: "Fruit Salad",
        category: "dessert",
        ingredients: ["Mixed Fruits (Apple, Banana, Orange)"],
        substitutions: {},
        image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
        instructions: "Chop fruits and mix together."
    }
];

const substitutionMap = {
    "wheat": "quinoa flour",
    "dairy": "coconut yogurt",
    "nuts": "sunflower seeds",
    "eggs": "flaxseed meal",
    "shellfish": "tofu",
    "soy": "coconut aminos"
};

function filterRecipes(allergies) {
    return recipes.filter(recipe => 
        !recipe.ingredients.some(ingredient => 
            allergies.includes(ingredient)
        )
    );
}

// Get safe recipes for current user
function getSafeRecipes() {
    try {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        const userAllergies = currentUser?.allergies || [];
        return filterRecipes(userAllergies);
    } catch (e) {
        console.error("Error loading user allergies:", e);
        return recipes; // Return all recipes if error occurs
    }
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    const safeRecipes = getSafeRecipes();
    console.log("Safe recipes:", safeRecipes);
    
    // Update UI with filtered recipes
    if (typeof updateRecipeDisplay === 'function') {
        updateRecipeDisplay(safeRecipes);
    }
});
