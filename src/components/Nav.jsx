import { useEffect, useState } from "react";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { Link } from "react-router-dom";
import { navLinks } from "../Data";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleMenuClick = () => setShowMenu(!showMenu);
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    document.body.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  useEffect(() => {
    setIsDarkMode(
      localStorage.getItem("color-theme") === "dark" ||
        window.matchMedia("(prefers-color-scheme: dark)").matches
    );
  }, []);

  useEffect(() => {
    document.body.classList.toggle("dark", isDarkMode);
    localStorage.setItem("color-theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header className="text-black dark:bg-dark dark:text-white body-font lg:pt-6 lg:mb-16 container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <Link
        to="/"
        className="flex title-font font-extrabold items-center text-orange-500 lg:text-3xl mb-4 md:mb-0 Bodoni md:mx-auto"
      >
        FOODIES FAV
      </Link>
      <div className="md:hidden">
        <button
          onClick={handleMenuClick}
          className="flex items-center px-3 py-2 text-orange-500 border-orange-500 hover:text-gray-900 hover:border-gray-900"
        >
          {showMenu ? <IoMdClose size={24} /> : <IoMdMenu size={24} />}
        </button>
      </div>
      <nav
        className={`${
          showMenu
            ? "block flex-col"
            : "hidden md:ml-auto md:mr-auto md:flex flex-wrap items-center text-base justify-center font-medium tracking-widest lg:space-x-8 md:flex-grow"
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.text}
            to={link.href}
            className="mr-5 hover:text-orange-500"
          >
            {link.text}
          </Link>
        ))}
      </nav>
      <button
        id="theme-toggle"
        type="button"
        className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-gray-200 text-sm p-2.5"
        onClick={toggleTheme}
      >
        {isDarkMode ? (
          <MdDarkMode className="h-6 w-6" />
        ) : (
          <MdLightMode className="h-6 w-6" />
        )}
      </button>
    </header>
  );
};

export default Nav;
