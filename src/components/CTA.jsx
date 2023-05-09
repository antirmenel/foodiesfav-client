import { useState } from "react";
import { motion } from "framer-motion";

const CTA = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();
    const res = await fetch("/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    const data = await res.json();
    if (data?.status !== 401) {
      setShow(true);
      setEmail("");
      console.log("Email sent");
    } else {
      console.log("Error");
    }
  };
  // Define animation variants
  const variants = {
    visible: { y: 0, opacity: 1 },
    hidden: { y: -50, opacity: 0 },
  };
  const variantsTitle = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <section className="text-gray-500 body-font dark:bg-dark dark:text-white ">
      <div className="container px-5 py-12 mx-auto text-center">
        <motion.h1
          className="Bodoni sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 dark:text-white"
          variants={variantsTitle}
        >
          Whip up something special
        </motion.h1>
        <motion.p
          className="leading-relaxed mb-4 text-base"
          Title={variantsTitle}
        >
          join our exclusive recipe community by subscribing to our monthly
          curated recipes, available only to our valued subscribers.
        </motion.p>
        {show ? (
          <motion.div
            className="relative bg-green-100 border-t-4 border-green-500 rounded-b text-green-900 px-4 py-3 shadow-md mb-4"
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-between items-center">
              <p className="font-bold uppercase tracking-wider Bodoni">
                Success!
              </p>
              <p className="ml-4">
                Thank you for subscribing to our newsletter! We're excited to
                share our latest news, updates, and special recipes with you.
              </p>
              <button onClick={() => setShow(false)} className="px-4 py-3">
                <svg
                  className="fill-current h-6 w-6 text-red-500"
                  role="button"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <title>Close</title>
                  <path d="M14.348 14.849c.195.195.195.512 0 .707-.195.195-.512.195-.707 0l-3.182-3.182-3.182 3.182c-.195.195-.512.195-.707 0-.195-.195-.195-.512 0-.707l3.182-3.182-3.182-3.182c-.195-.195-.195-.512 0-.707s.512-.195.707 0l3.182 3.182 3.182-3.182c.195-.195.512-.195.707 0 .195.195.195.512 0 .707l-3.182 3.182 3.182 3.182z" />
                </svg>
              </button>
            </div>
          </motion.div>
        ) : null}

        <motion.form
          onSubmit={sendEmail}
          className="flex flex-col lg:flex-row lg:w-2/3 w-full mx-auto px-8 space-y-4 sm:space-y-0 sm:space-x-4 sm:px-0 items-end"
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="relative flex-grow w-full"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <motion.label
              htmlFor="email"
              className="block text-sm font-medium  uppercase mb-2 Bodoni text-orange-500"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <span style={{ alignSelf: "flex-start" }}>Email</span>
            </motion.label>

            <motion.input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-gray-100 dark:bg-white bg-opacity-50 border border-orange-500 focus:border-red-500 focus:bg-transparent focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out "
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            />
          </motion.div>
          <motion.button
            type="submit"
            className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-0 py-2 px-8 focus:outline-none text-lg Bodoni uppercase "
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Subscribe
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default CTA;
