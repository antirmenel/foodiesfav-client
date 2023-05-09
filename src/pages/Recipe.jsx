import { useParams } from "react-router-dom";
import { allRecipes } from "../Data";
import Footer from "../components/Footer";
import CTA from "../components/CTA";

const Recipe = () => {
  window.scrollTo(0, 0); // <-- Add this line to force page to show from the top
  const { id } = useParams();
  const recipe = allRecipes.find((r) => r.id === parseInt(id));

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden dark:bg-dark dark:text-white">
        <div className="container px-5 py-8 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="recipe"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded-lg"
              src={recipe.image_url}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm text-gray-500 tracking-widest mb-2">
                Dietary Restrictions: {recipe.dietary_restrictions}
              </h2>
              <h1 className="text-gray-900 dark:text-white text-3xl title-font font-medium mb-4 Bodoni">
                {recipe.name}
              </h1>
              <div className="flex mb-4">
                <hr className="w-16 h-1 bg-orange-500 rounded-full" />
              </div>
              <p className="leading-relaxed mb-6">{recipe.description}</p>
              <h3 className="Bodoni text-gray-900 dark:text-white text-xl font-medium mb-2">
                Ingredients
              </h3>
              <ul className="list-disc list-inside mb-6">
                {recipe.ingredients.map((ingredient) => (
                  <li key={ingredient} className="mb-2">
                    {ingredient}
                  </li>
                ))}
              </ul>
              <h3 className="Bodoni text-gray-900 dark:text-white text-xl font-medium mb-2">
                Instructions
              </h3>
              <ol className="list-decimal list-inside mb-6">
                {recipe.instructions.map((instruction) => (
                  <li key={instruction} className="mb-2">
                    {instruction}
                  </li>
                ))}
              </ol>
              <div className="flex justify-between mb-4">
                <p className="text-gray-900 dark:text-white font-medium">
                  Prep Time: {recipe.prep_time}
                </p>
                <p className="text-gray-900 dark:text-white font-medium">
                  Cook Time: {recipe.cook_time}
                </p>
              </div>
              <div className="flex justify-between mb-4">
                <p className="text-gray-900 dark:text-white font-medium">
                  Total Time: {recipe.total_time}
                </p>
                <p className="text-gray-900 dark:text-white font-medium">
                  Yield: {recipe.y_ield}
                </p>
              </div>
              <p className="text-gray-900 dark:text-white font-medium mb-2">
                Calories: {recipe.calories}
              </p>
            </div>
          </div>
        </div>
      </section>
      <CTA />
      <Footer />
    </div>
  );
};

export default Recipe;
