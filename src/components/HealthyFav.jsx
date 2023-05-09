import { Link } from "react-router-dom";
import { allRecipes } from "../Data";
import { motion } from "framer-motion";
import { AiOutlineArrowRight } from "react-icons/ai";

function HealthyFav() {
  const healthyRecipes = allRecipes.filter(
    (recipe) => recipe.type === "healthy"
  );

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-12 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 dark:text-white text-gray-900 Bodoni w-1/2">
              Eat well, live well with our healthiest dishes.
            </h1>
            <div className="h-1 w-20 bg-orange-500 "></div>
          </div>
          <p className="lg:w-1/2 w-full leading-relaxed dark:text-white text-gray-500">
            Our website offers a diverse selection of delicious and nutritious
            recipes to support a balanced diet. We curate our recipes to
            accommodate a variety of dietary needs, including vegetarian,
            low-calorie, gluten-free, and more. Our philosophy is that healthy
            food should be tasty and enjoyable, which is reflected in our recipe
            collection. Whether you need a quick weeknight meal or a special
            occasion dish, our website has a wide range of options. Our goal is
            to inspire and motivate individuals to lead a healthy and fulfilling
            lifestyle by providing wholesome and nutritious food choices.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {healthyRecipes.map((recipe) => {
            return (
              <Link to={`/recipe/${recipe.id}`} key={recipe.id}>
                <motion.div
                  className="bg-white shadow-md rounded-lg overflow-hidden h-96 w-full dark:bg-dark dark:text-white dark:border-white border-2 "
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.img
                    className="h-48 w-full object-cover"
                    src={recipe.image_url}
                    alt={recipe.name}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  />
                  <motion.div
                    className="p-4 h-48"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <motion.h2
                      className="text-lg font-medium text-gray-900 dark:text-white"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.6 }}
                    >
                      {recipe.name}
                    </motion.h2>
                    <motion.p
                      className="text-gray-600 dark:text-white"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.8 }}
                    >
                      {recipe.description}
                    </motion.p>
                    <motion.div
                      className="mt-4"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 1 }}
                    >
                      <motion.a
                        className="text-orange-500 uppercase inline-flex items-center"
                        href={recipe.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        style={{ marginTop: "auto" }}
                      >
                        Learn More
                        <AiOutlineArrowRight className="ml-2" />
                      </motion.a>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default HealthyFav;
