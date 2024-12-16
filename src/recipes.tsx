import RecipeCard from './RecipeCard';

interface Recipe {
  id: string;
  title: string;
  steps: string[];
}

interface RecipesProps {
  recipes: Recipe[];
  setRecipes: (recipes: Recipe[]) => void;
  onSelectRecipe: (recipe: Recipe) => void;
}

export default function Recipes({ recipes, setRecipes, onSelectRecipe }: RecipesProps) {
  const handleDeleteRecipe = (id: string) => {
    setRecipes(recipes.filter(recipe => recipe.id !== id));
  };

  return (
    <div>
      <div className="recipe-list">
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            onSelectRecipe={onSelectRecipe}
            onDeleteRecipe={handleDeleteRecipe}
          />
        ))}
      </div>
    </div>
  );
}