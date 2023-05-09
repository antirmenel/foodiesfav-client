import React from "react";
import { motion } from "framer-motion";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import {privacy} from "../Data";

const PrivacyPolicy = () => {
  const currentDate = new Date().toDateString(); // Insert current date here
  const headerVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <>
      <div className="max-w-2xl mx-auto py-6 px-4 sm:px-6 lg:px-8 dark:bg-dark dark:text-dark">
        <motion.header
          className="text-center"
          variants={headerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 className="text-4xl font-bold mb-6 Bodoni text-orange-500">
            Privacy Policy
          </motion.h1>
          <motion.p className="text-gray-500 text-sm mb-8">{`Last updated: ${currentDate}`}</motion.p>
        </motion.header>
        {privacy.map((section, index) => (
          <motion.div
            key={index}
            className="mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-2 Bodoni">{section.title}</h2>
            <motion.p
              className="text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {section.content}
            </motion.p>
          </motion.div>
        ))}
      </div>
      <CTA />
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
