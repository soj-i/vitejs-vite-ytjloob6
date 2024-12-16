import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeLayout from './HomeLayout';
import PostRecipe from './PostRecipe';
import './style.css';
import ColorContextProvider from './ColorContext';

interface Recipe {
  id: string;
  title: string;
  steps: string[];
}

export default function App() {
  const [recipes, setRecipes] = useState<Recipe[]>([
    {
      id: '1',
      title: 'Jollof Rice',
      steps: ['Cook rice', 'Prepare sauce', 'Mix rice and sauce'],
    },
    {
      id: '2',
      title: 'Egusi',
      steps: ['Prepare egusi', 'Cook meat', 'Mix egusi with meat'],
    },
  ]);

  const addRecipe = (title: string, steps: string[]) => {
    const newRecipe = {
      id: `recipe-${Math.floor(Math.random() * Date.now())}`,
      title,
      steps,
    };
    setRecipes([...recipes, newRecipe]);
  };

  return (
    <ColorContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomeLayout recipes={recipes} />} />
          <Route path="/add-recipe" element={<PostRecipe addRecipe={addRecipe} />} />
        </Routes>
      </Router>
    </ColorContextProvider>
  );
}