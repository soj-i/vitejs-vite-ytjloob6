import { Link  } from 'react-router-dom';

interface RecipeCardProps {
    name: string;
    id: string;
}

export default function RecipeCard({ name, id }: RecipeCardProps) {
    return (
        <div className = "recipe-card">
            <h3>{name}</h3>
                <button>View Recipe</button>

            
        </div>
    )
}