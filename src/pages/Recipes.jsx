import { useState } from "react";
import { allRecipes } from "../Data";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
function Recipes() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredRecipes = allRecipes.filter((recipe) => {
    return recipe.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="dark:bg-dark dark:text-white">
  <motion.div className="container mx-auto mt-10 px-4 " initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
    <motion.h1 className="text-3xl font-bold mb-6 text-center Bodoni uppercase text-orange-500 tracking-widest" initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.5 }}>All Recipes</motion.h1>
    <motion.div className="mb-6" initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4, duration: 0.5 }}>
      <input type="text" className="border dark:bg-dark dark:text-white border-gray-400 py-2 px-4  w-full text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent" placeholder="Search by recipe name" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
    </motion.div>
    <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8" initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6, duration: 0.5 }}>
      {filteredRecipes.map((recipe) => (
      <Link key={recipe.id} to={`/recipe/${recipe.id}`} className="bg-white shadow-md rounded-lg overflow-hidden h-full dark:bg-dark dark:text-white" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <img className="h-48 w-full object-cover" src={recipe.image_url} alt={recipe.name} />
        <div className="p-4">
          <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-2">{recipe.name}</h2>
          <p className="text-gray-600 dark:text-white mb-4">{recipe.description}</p>
          <div className="flex justify-between items-center">
            <motion.a className="text-orange-500 uppercase inline-flex items-center" href={recipe.url} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1 }} style={{ marginTop: "auto" }}>
              Learn More
              <AiOutlineArrowRight className="ml-2"/>
            </motion.a>
            <div className="text-gray-500 dark:text-white text-sm">{recipe.calories} Calories</div>
          </div>
        </div>
      </Link>
      ))}
    </motion.div>
  </motion.div>
  <CTA />
  <Footer />
</div>
  );
}

export default Recipes;
