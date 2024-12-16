import Header from './MainHeader';
import RecipeCard from './RecipeCard';

interface Recipe {
  id: string;
  title: string;
  steps: string[];
}

interface HomeLayoutProps {
  recipes: Recipe[];
}

export default function HomeLayout({ recipes }: HomeLayoutProps) {
  return (
    <>
      <Header title="Welcome to the Recipe Book" />
      <main>
        <div className="recipe-list">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} name={recipe.title} id={recipe.id} />
          ))}
        </div>
      </main>
    </>
  );
}

