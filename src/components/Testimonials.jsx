import React from "react";
import { motion } from "framer-motion";
import { testimonialsData } from "../Data";
import { IoMdQuote } from "react-icons/io";
const Testimonials = () => {
  const container = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      className="text-gray-600 body-font dark:bg-dark dark:text-white "
      variants={container}
      initial="hidden"
      animate="show"
    >
      <div className="container px-5 py-12 mx-auto">
        <motion.h1
          className="text-3xl font-medium title-font text-gray-900 mb-12 text-center Bodoni dark:bg-dark dark:text-white "
          variants={item}
        >
          Testimonials
        </motion.h1>
        <motion.div
          className="flex flex-wrap -m-4 dark:bg-dark dark:text-white"
          variants={container}
        >
          {testimonialsData.map((testimonial) => (
            <motion.div
              className="p-4 md:w-1/2 w-full"
              variants={item}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div className="h-full bg-gray-100 dark:bg-dark dark:text-white p-8 rounded dark:border-white border-2">
                <IoMdQuote className="block w-5 h-5 text-orange-500 mb-4" />
                <p className="leading-relaxed mb-6">{testimonial.text}</p>
                <span className="title-font font-medium text-gray-900 dark:text-white">
                  {testimonial.author}
                </span>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Testimonials;
