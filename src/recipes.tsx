import { useState } from 'react';
import RecipeCard from './RecipeCard';

interface Recipe {
    id: string;
    title: string;
    steps: string[];
}

export default function Recipes() { // we're building an array of recipes here. inside parentheses is start state
    const [recipes, setRecipes] = useState<Recipe[]>([]); 

    return (
        <div>
      <h2>Recipes</h2>
      <div className="recipe-list">
        {recipes.map((recipe: any) => (
          <RecipeCard key={recipe.id} name={recipe.title} id={recipe.id} />
        ))}
      </div>
    </div>
    );
   
}