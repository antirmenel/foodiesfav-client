import { Link } from "react-router-dom";
import { allRecipes } from "../Data";
import { motion } from "framer-motion";
import { AiOutlineArrowRight } from "react-icons/ai";

const Trending = () => {
  const trendyRecipes = allRecipes.filter((recipe) => recipe.type === "trendy");

  const recipesToShow = trendyRecipes.slice(0, 3); // limit to 3 recipes

  const cardVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="text-gray-600 body-font dark:bg-dark dark:text-white ">
      <div className="container px-5 py-12 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {recipesToShow.map((recipe) => {
            return (
              <motion.div
                className="bg-white dark:bg-dark dark:text-white shadow-md rounded-lg overflow-hidden dark:border-white border-2"
                key={recipe.id}
                variants={cardVariants}
                initial="initial"
                animate="animate"
              >
                <Link to={`/recipe/${recipe.id}`}>
                  <motion.img
                    className="h-48 w-full object-cover"
                    src={recipe.image_url}
                    alt={recipe.name}
                    whileHover={{ scale: 1.05 }}
                  />
                  <div className="p-4">
                    <h2 className="text-lg font-medium text-gray-900 dark:text-white">
                      {recipe.name}
                    </h2>
                    <p className="text-gray-600 dark:text-white">
                      {recipe.description}
                    </p>
                    <div className="mt-4">
                      <motion.a
                        className="text-orange-500 inline-flex items-center uppercase"
                        href={recipe.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        style={{ marginTop: "auto" }}
                      >
                        <AiOutlineArrowRight className="ml-2" />
                      </motion.a>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Trending;
