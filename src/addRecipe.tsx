import { useState } from 'react';
import RecipeStep from './RecipeStep';

export default function AddRecipe() {
  const [input, setInput] = useState('');
  const [recipeSteps, setRecipeSteps] = useState({});

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const id = `step-${Math.floor(Math.random() * Date.now())}`;
        setRecipeSteps({
          ...recipeSteps,
          [id]: input,
        });
        setInput('');
      }}
    >
      <label htmlFor="recipe-step">Add task:</label>
      <textarea
        id="recipe-step"
        name="step"
        rows={3}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
      <button id="add-btn" type="submit">
        Add
      </button>
      <ol>
        {Object.entries(recipeSteps).map(([k, v]) => (
          <RecipeStep key={k} stepText={v} />
        ))}
      </ol>
    </form>
  );
}