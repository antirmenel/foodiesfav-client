import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const handleContactClick = () => {
  window.location.href = "mailto:antirmenel@gmail.com";
};

const linkVariants = {
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
    },
  },
};

const ErrorPage = () => (
  <motion.div
    className="bg-gray-100 min-h-screen flex flex-col justify-center items-center dark:bg-dark dark:text-white"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    <h1 className="text-4xl md:text-4xl lg:text-5xl font-black text-center text-orange-500 uppercase tracking-widest mb-4 lg:mb-8 Bodoni">
      Website is under maintenance
    </h1>
    <p className="text-center dark:text-white text-lg md:text-xl lg:text-xl mb-8 lg:mb-12">
      I am working hard to improve the user experience. stay tuned!
    </p>
    <div className="flex flex-col lg:flex-row space-y-4 lg:space-x-4 lg:space-y-0 uppercase tracking-wider Bodoni">
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.2 }}
      >
        <motion.button
          className="bg-gradient-to-r from-orange-500 to-red-500 hover:bg-gray-700 text-white font-bold uppercase py-3 px-6 lg:text-lg"
          whileHover={{ scale: 1.1, color: "#FFF", backgroundColor: "#1D4ED8" }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.2 }}
          onClick={handleContactClick}
        >
          Contact me
        </motion.button>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.2 }}
      >
        <motion.div
          className="border-2 border-gray-800 dark:text-white dark:border-white text-black font-bold py-3 px-6 lg:text-lg text-center sm:inline-block"
          variants={linkVariants}
        >
          <Link to="/">Home</Link>
        </motion.div>
      </motion.div>
    </div>
  </motion.div>
);

export default ErrorPage;
