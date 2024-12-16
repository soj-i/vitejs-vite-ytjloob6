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
          <label htmlFor="recipe-title">Recipe Title:</label>
          <input
            id="recipe-title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor="recipe-step">Add Step:</label>
          <textarea
            id="recipe-step"
            name="step"
            rows={3}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          ></textarea>
          <button onClick={handleAddStep}>Add Step</button>
          <button type="submit">Submit Recipe</button>
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