import { useState } from 'react';

interface Recipe {
  id: string;
  title: string;
  steps: string[];
}

interface RecipeEditorProps {
  recipe: Recipe;
  setSelectedRecipe: (recipe: Recipe | null) => void;
  handleDeleteRecipe: (id: string) => void;
}

export default function RecipeEditor({
  recipe,
  setSelectedRecipe,
  handleDeleteRecipe,
}: RecipeEditorProps) {
  const [title, setTitle] = useState(recipe.title);
  const [steps, setSteps] = useState(recipe.steps);
  const [input, setInput] = useState('');

  const handleAddStep = (e: React.FormEvent) => {
    e.preventDefault();
    setSteps([...steps, input]);
    setInput('');
  };

  const handleRemoveStep = (index: number) => {
    setSteps(steps.filter((_, i) => i !== index));
  };

  const handleSave = () => {
    setSelectedRecipe(null);
    // Update the recipe in the parent component
  };

  return (
    <div className="recipe-editor">
      <h2>Edit Recipe</h2>
      <label id ="rec-box" htmlFor="recipe-title" aria-label="eddit-steps">Recipe Title:</label>
      <input
        id="recipe-title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label id ="rec-box" htmlFor="recipe-step" aria-label="recipe-step">Add Step:</label>
      <textarea
        id="recipe-step"
        name="step"
        rows={3}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
      <button id ="sub-button" tabIndex={7} onClick={handleAddStep}>Add Step</button>
      <ol>
        {steps.map((step, index) => (
          <li key={index}>
            {step}
            <button id ="sub-button" tabIndex={8} onClick={() => handleRemoveStep(index)}>Remove</button>
          </li>
        ))}
      </ol>
      <button id ="sub-button" tabIndex={9} onClick={handleSave}>Done</button>
      <button id ="sub-button" tabIndex={10} onClick={() => handleDeleteRecipe(recipe.id)}>Delete Recipe</button>
    </div>
  );
}