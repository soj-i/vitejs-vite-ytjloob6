import { useNavigate, useLocation } from 'react-router-dom';

interface HeaderProps {
  title: string | number;
}

export default function Header({ title }: HeaderProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleButtonClick = () => {
    if (location.pathname === '/add-recipe') {
      navigate('/');
    } else {
      navigate('/add-recipe');
    }
  };

  return (
    <header>
      <h1>{title}</h1>
      <button id="page" onClick={handleButtonClick}>
        {location.pathname === '/add-recipe' ? 'Back' : 'Add Recipe'}
      </button>
    </header>
  );
}