import React from "react";

function Ingredients() {
    const ingredients = [
        {
            name: "envelopes unflavored gelatin",
            quantity: "2"
        },
        {
            name: "cup sugar",
            quantity: "1/2"
        },
        {
            name: "teaspoon salt",
            quantity: "1"
        },
        {
            name: "can (12 oz) apple juice",
            quantity: "1"
        },
        {
            name: " cup lemon juice",
            quantity: "1/2"
        },
        {
            name: "tablespoons vinegar",
            quantity: "2"
        },
        {
            name: "cup shredded carrot",
            quantity: "1"
        },
        {
            name: "cup sliced celery",
            quantity: "1"
        },
        {
            name: "cup finely shredded cabbage",
            quantity: "1"
        },
        {
            name: "cup chopped green pepper",
            quantity: "1/2"
        },
        {
            name: "can (4 oz) chopped pimiento",
            quantity: "1"
        }
    ]
    const ingredientsList = ingredients.map(ingrdient => <li key={ingrdient.name} className="ingredients"><em>{ingrdient.quantity}</em>  -  {ingrdient.name}</li>);
    return (
        <div>
            <h2>
                Ingredients
            </h2>
            
            <ul>{ingredientsList}</ul>
            
        </div>
    );
}
export default Ingredients;