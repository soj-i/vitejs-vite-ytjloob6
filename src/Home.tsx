import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h2>Welcome to the Recipe Step Tracker</h2>
      <Link to="/add-recipe">
        <button id="create">Add Recipe</button>
      </Link>
    </div>
  );
}