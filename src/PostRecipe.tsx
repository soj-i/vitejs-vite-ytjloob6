// reference for form handling https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/forms_and_events/

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './MainHeader';

interface PostRecipeProps {
  addRecipe: (title: string, steps: string[]) => void;
}

export default function PostRecipe({ addRecipe }: PostRecipeProps) {
  const [title, setTitle] = useState('');
  const [steps, setSteps] = useState<string[]>([]);
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const handleAddStep = (e: React.FormEvent) => {
    e.preventDefault();
    setSteps([...steps, input]);
    setInput('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addRecipe(title, steps);
    navigate('/');
  };

  return (
    <>
      <Header title="Add a New Recipe" />
      <main>
        <form onSubmit={handleSubmit}>
          <label htmlFor="recipe-title" aria-label = "recipe title" id="sub-box" >Recipe Title:</label>
          <input tabIndex={3}
            id="recipe-title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor="recipe-step" id="sub-box" aria-label = "add recipe step" tabIndex={4}>Step(s):</label>
          <textarea 
            id="recipe-step"
            name="step"
            rows={3}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          ></textarea>

          <label htmlFor="add-step" aria-label = "complete adding step" tabIndex={5}>
          <button aria-label = "complete adding step"onClick={handleAddStep} id="sub-button" >Add Step</button>
          </label>
          <label htmlFor="submit-recipe" aria-label = "submit recipe" tabIndex={6}>Submit Recipe:
          <button type="submit" id="sub-button">Submit Recipe</button>
          </label>
          <ol>
            {steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </form>
      </main>
    </>
  );
}