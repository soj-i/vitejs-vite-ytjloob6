// referenced for BrowserRouter Aliasing: https://v5.reactrouter.com/web/api/BrowserRouter
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomeLayout from './HomeLayout';
import './style.css';
import ColorContextProvider from './ColorContext';
import PageTwo from './pageTwo';


export default function App() {
  // Add states for tracking input and recipe steps
  // const [input, setInput] = useState('');
  // const [recipeSteps, setRecipeSteps] = useState({});

  // useEffect(() => {
  //   // fetch data
  //   console.log('hello');
  // });

  return ( //pieces of html we want rendered
    <ColorContextProvider>
      <Router>
        <Routes>
             <Route path="/" element={<HomeLayout/>} />
             <Route path="/add-recipe" element={<PageTwo/>} />
        </Routes>
      </Router>


    </ColorContextProvider>
  );
}
