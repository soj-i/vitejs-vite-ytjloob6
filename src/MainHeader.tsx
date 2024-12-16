import ColorSelector from './ColorSelector';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  title: string | number;
}

export default function Header({ title }: HeaderProps) {
  const nextPage = useNavigate();
  return (
    <header>
      <h1>{title}</h1>
      <button id="page" onClick={() => nextPage('/add-recipe')}>Add Recipe</button>
    </header>
  );
}
