import { useState } from 'react';
import Header from './MainHeader';
import Recipes from './recipes';
import RecipeEditor from './RecipeEditor';

interface Recipe {
  id: string;
  title: string;
  steps: string[];
}

interface HomeLayoutProps {
  recipes: Recipe[];
  setRecipes: (recipes: Recipe[]) => void;
}

export default function HomeLayout({ recipes, setRecipes }: HomeLayoutProps) {
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  const handleSelectRecipe = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleDeleteRecipe = (id: string) => {
    setRecipes(recipes.filter(recipe => recipe.id !== id));
  };

  return (
    <>
      <section tabIndex={0}>
      <Header title="Welcome to the Recipe Book" />
      </section>
      <main>
        {selectedRecipe ? (
          <RecipeEditor
            recipe={selectedRecipe}
            setSelectedRecipe={setSelectedRecipe}
            handleDeleteRecipe={handleDeleteRecipe}
          />
        ) : (
          <Recipes
            recipes={recipes}
            setRecipes={setRecipes}
            onSelectRecipe={handleSelectRecipe}
          />
        )}
      </main>
    </>
  );
}