import ColorSelector from './ColorSelector';

interface HeaderProps {
  title: string | number;
}

export default function Header({ title }: HeaderProps) {
  return (
    <header>
      <h1>{title}</h1>
      <ColorSelector />
    </header>
  );
}
