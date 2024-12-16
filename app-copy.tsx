import { useEffect, useState } from 'react';
import RecipeStep from './RecipeStep';
import Layout from './Layout';
import './style.css';
import ColorContextProvider from './ColorContext';

export default function App() {
  // Add states for tracking input and recipe steps
  const [input, setInput] = useState('');
  const [recipeSteps, setRecipeSteps] = useState({});

  // useEffect(() => {
  //   // fetch data
  //   console.log('hello');
  // });

  return ( //pieces of html we want rendered
    <ColorContextProvider>
      <Layout>
        <form
          onSubmit={(e) => {
            // TODO #1: Prevent default behavior
            e.preventDefault();

            const id = `step-${Math.floor(Math.random() * Date.now())}`;

            // TODO #3: Add new recipe step to state
            setRecipeSteps({
              ...recipeSteps,
              [id]: input,
            });

            // TODO #4: Clear input text
            setInput('');
          }}
        >
          <label htmlFor="recipe-step">Add task:</label>
          <textarea
            id="recipe-step"
            name="step"
            rows={3}
            // TODO #2: Set value to input & add input handler
            value={input}
            onChange={(e) => setInput(e.target.value)}
          ></textarea>
          <button id="add-btn" type="submit">
            Add
          </button>
        </form>

        <ol>
          {Object.entries(recipeSteps).map(([k, v]) => (
            <RecipeStep key={k} stepText={v} />
          ))}
        </ol>
      </Layout>
    </ColorContextProvider>
  );
}
