import ColorSelector from './ColorSelector';

interface HeaderProps {
  title: string | number;
}

export default function Header({ title }: HeaderProps) {
  return (
    <header>
      <h1>{title}</h1>
      <button id = "create" onClick={() => alert('Add Recipe button clicked!')}>Add Recipe</button>
    </header>
  );
}
