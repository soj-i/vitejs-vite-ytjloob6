import { ReactNode } from 'react';
import Header from './MainHeader';
import { Link } from 'react-router-dom';



export default function HomeLayout() {
  return ( //Header is holding both title and pagebutton
    <> 
      <Header title="Welcome to the Recipe Book" /> 
      <main>testing please work</main>
      
    </>
  );
}
