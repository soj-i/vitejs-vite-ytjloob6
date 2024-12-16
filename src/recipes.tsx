import { useState } from 'react';
import RecipeStep from './RecipeStep';

interface Recipe {
    title: string;
    steps: string[];
}

export default function Recipes() {
    const [recipes, setRecipes] = useState<Recipe[]>([]);

    // const addRecipe = (title: string, steps: string[]) => {
    //     setRecipes([...recipes, { title, steps }]);
    // };

    return (
        <div>
            <h2>Recipes</h2>
            <ul>
                {recipes.map((recipe, index) => (
                    <li key={index}>
                        <h3>{recipe.title}</h3>
                        <ol>
                            {recipe.steps.map((step, stepIndex) => (
                                <RecipeStep key={stepIndex} stepText={step} />
                            ))}
                        </ol>
                    </li>
                ))}
            </ul>
            {/* Add form or other components to add new recipes */}
        </div>
    );
}