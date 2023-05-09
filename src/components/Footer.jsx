import React, { useEffect } from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const about = [
    { text: "About", href: "/about" },
    { text: "Privacy Policy", href: "/privacy" },
  ];

  const foodRecipesLinks = [
    { text: "Recipes", href: "/recipes" },
    { text: "Quick and easy", href: "/quick" },
    { text: "Ingredients", href: "/ingredients" },
    { text: "Occasions", href: "/occasions" },
    { text: "Trends", href: "/trends" },
  ];

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  useEffect(() => {
    function handleScrollAnimation() {
      // add code for scroll animation here
    }
    window.addEventListener("scroll", handleScrollAnimation);
    return () => {
      window.removeEventListener("scroll", handleScrollAnimation);
    };
  }, []);

  return (
    <footer className="footer  body-font dark:text-white">
      <div className="container px-5 pt-24 mx-auto flex flex-wrap justify-between items-center flex-col md:flex-row">
        <div className="w-full md:w-64 text-center mb-10 md:mb-0">
          <a
            href="/"
            className="flex title-font font-medium items-center justify-center text-gray-900"
          >
            <span className="ml-3 text-xl text-orange-500 Bodoni uppercase">
              Foodies Fav
            </span>
          </a>
          <p className=" text-sm  Bodoni tracking-widest uppercase ">
            Taste the difference with our recipes
          </p>
        </div>
        <motion.div
          className="flex flex-wrap justify-between"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          {[
            { title: "MORE", links: about },
            { title: "FOOD & RECIPES", links: foodRecipesLinks },
          ].map((section) => (
            <motion.div
              className="w-full md:w-64 px-4 mb-10"
              key={section.title}
              variants={sectionVariants}
            >
              <motion.h2
                className="title-font font-medium text-orange-500 tracking-widest text-sm mb-3 Bodoni"
                variants={sectionVariants}
              >
                {section.title}
              </motion.h2>
              <motion.nav
                className="list-none mb-10"
                variants={sectionVariants}
              >
                {section.links.map((link) => (
                  <motion.li
                    key={link.text}
                    variants={sectionVariants}
                    whileHover={{ scale: 1.1 }}
                    className="py-1"
                  >
                    <a
                      href={link.href}
                      className=" hover:text-orange-500 uppercase tracking-wider Bodoni"
                    >
                      {link.text}
                    </a>
                  </motion.li>
                ))}
              </motion.nav>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <motion.div
        className="bg-orange-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.p
            className=" text-sm text-center sm:text-left Bodoni dark:text-black"
            initial={{ x: -50 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
          >
            Made with love —
            <a
              href="https://github.com/antirmenel"
              rel="noopener noreferrer"
              className=" ml-1"
              target="_blank"
            >
              Menel Antir
            </a>
          </motion.p>
       
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
