interface Recipe {
    id: string;
    title: string;
    steps: string[];
  }
  
  interface RecipeCardProps {
    recipe: Recipe;
    onSelectRecipe: (recipe: Recipe) => void;
    onDeleteRecipe: (id: string) => void;
  }
  
  export default function RecipeCard({ recipe, onSelectRecipe, onDeleteRecipe }: RecipeCardProps) {
    return (
        <label aria-label="recipe cards">
      <div tabIndex = {2} aria-label = {`recipe`} className ="recipe-card">
        <h3>{recipe.title}</h3>
        <label aria-label="view recipe button">
        <button onClick={() => onSelectRecipe(recipe)}>View Recipe</button>
        </label>
        <label aria-label="delete recipe button">
        <button onClick={() => onDeleteRecipe(recipe.id)}>Delete Recipe</button>
        </label>
      </div>
        </label>
    );
  }