// reference for browser router logic: https://v5.reactrouter.com/web/api/BrowserRouter

import { useState, useEffect } from 'react';
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
  const [recipes, setRecipes] = useState<Recipe[]>(() => {
    var savedRecipes = localStorage.getItem('recipes');  // pull local storage content
    return savedRecipes ? JSON.parse(savedRecipes) : [ // checks for recipes in local storage
      { //defaults
        id: '1',
        title: 'Jollof Rice',
        steps: ['Cook rice', 'Prepare sauce', 'Mix rice and sauce'],
      },
      {
        id: '2',
        title: 'Egusi',
        steps: ['Prepare egusi', 'Cook meat', 'Mix egusi with meat'],
      },
    ];
  });

  useEffect(() => { // incorporated from file project presentations
    localStorage.setItem('recipes', JSON.stringify(recipes));
  }, [recipes]);

  const addRecipe = (title: string, steps: string[]) => {
    const newRecipe = {
      id: `recipe-${Math.floor(Math.random() * Date.now())}`, // taken from code snippet during lecture
      title,
      steps,
    };
    setRecipes([...recipes, newRecipe]); // adds new recipe to the list, incorporated from class code-along
  };

  return (
    <ColorContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomeLayout recipes={recipes} setRecipes={setRecipes} />} />
          <Route path="/add-recipe" element={<PostRecipe addRecipe={addRecipe} />} />
        </Routes>
      </Router>
    </ColorContextProvider>
  );
}