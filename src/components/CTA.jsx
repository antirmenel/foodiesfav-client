import React, { useState } from "react";
import { motion } from "framer-motion";
import { AiFillCloseCircle } from "react-icons/ai";

const CTA = () => {
  const [email, setEmail] = useState("");
  const [show, setShow] = useState(false);
  const [data, setData] = useState({ status: null, message: "" });

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) throw new Error("Network response was not ok");

      const { status, message } = await res.json();

      setData({ status, message });
      setShow(true);
      setEmail("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="text-gray-700 dark:text-white body-font">
      <div className="container px-5 py-12 mx-auto text-center">
        <motion.h1
          className="Bodoni sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 dark:text-white"
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
        >
          Whip up something special
        </motion.h1>
        <motion.p
          className="leading-relaxed mb-4 text-base"
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.7 }}
        >
          join our exclusive recipe community by subscribing to our monthly
          curated recipes, available only to our valued subscribers.
        </motion.p>
        {show && (
          <motion.div
            className={`relative bg-${
              data.status === 409 ? "red" : "green"
            }-100 border-t-4 border-${
              data.status === 409 ? "red" : "green"
            }-500 rounded-b text-green-900 px-4 py-3 shadow-md mb-4`}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7 }}
          >
            <div className="flex justify-between items-center">
              <p className="font-bold uppercase tracking-wider Bodoni">
                {data.status === 409 ? "Error" : "Success!"}
              </p>
              <p className="ml-4">{data.message}</p>
              <button onClick={() => setShow(false)} className="px-4 py-3">
                <AiFillCloseCircle />
              </button>
            </div>
          </motion.div>
        )}
        <motion.form
          onSubmit={sendEmail}
          className="flex flex-col lg:flex-row lg:w-2/3 w-full mx-auto px-8 space-y-4 sm:space-y-0 sm:space-x-4 sm:px-0 items-end"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-gray-100 dark:bg-white bg-opacity-50 border border-orange-500 focus:border-red-500 focus:bg-transparent focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out "
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          />
          <motion.button
            type="submit"
            className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-0 py-2 px-8 focus:outline-none text-lg Bodoni uppercase "
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            subscribe
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default CTA;
