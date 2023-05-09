import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <motion.section 
      className="text-gray-600 body-font dark:bg-dark dark:text-white "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1 
        className="Bodoni text-base font-semibold lg:px-24 md:text-center md:text-xl px-4 text-justify"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        “Cooking is not difficult. Everyone has taste, even if they don’t realize it. Even if you’re not a great chef, there’s nothing to stop you understanding the difference between what tastes good and what doesn’t.”
      </motion.h1>

      <motion.div 
        className="container flex flex-col items-center mx-auto md:flex-row py-24 px-4 lg:px-24"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="flex flex-col items-center text-center">
          <motion.h1 
            className="Bodoni font-medium mb-4 sm:text-4xl text-3xl text-gray-900 title-font dark:text-white"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Making cooking a breeze.
          </motion.h1>
          <motion.p 
            className="Bodoni leading-relaxed mb-8 text-justify"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Our carefully curated selection of recipes includes a wide range of options to suit any taste, dietary requirement, or cooking skill level. With our easy-to-follow instructions and helpful tips, you can feel confident in the kitchen and elevate your cooking game.
            <br />
            Explore new ingredients, learn new techniques, and discover new flavors with our extensive recipe collection.
            <br />
            So come and join us on a culinary journey around the world, and let our recipes inspire you to create delicious meals that will impress your family and friends.
          </motion.p>
          <motion.button 
  className="Bodoni bg-gradient-to-r from-orange-500 to-red-500 btn md:text-xl md:py-2 px-6 py-2 text-lg text-white tracking-wider uppercase"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  transition={{ duration: 0.2 }}
>
  <Link to="/recipes" class="text-white">
    Explore Recipes
  </Link>
</motion.button>

        </div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
