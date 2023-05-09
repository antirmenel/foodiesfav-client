import React, { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";

const CTA = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [data, setData] = useState(null);

  const sendEmail = async (e) => {
    e.preventDefault();
    const res = await fetch("/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    const { status } = res;
    const message =
      status === 409
        ? "Email already exists"
        : "Thank you for subscribing to our newsletter! We're excited to share our latest news, updates, and special recipes with you.";
    setShow(true);
    setData({ status, message });
    setEmail("");
    console.log(`Show state set to true for ${status} status`);
  };

  return (
    <section className="text-gray-500 body-font dark:bg-dark dark:text-white ">
      <div className="container px-5 py-12 mx-auto text-center">
        <h1 className="Bodoni sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 dark:text-white">
          Whip up something special
        </h1>
        <p className="leading-relaxed mb-4 text-base">
          join our exclusive recipe community by subscribing to our monthly
          curated recipes, available only to our valued subscribers.
        </p>
        {show && (
          <div
            className={`relative ${
              data.status === 409 ? "bg-red-100" : "bg-green-100"
            } border-t-4 ${
              data.status === 409 ? "border-red-500" : "border-green-500"
            } rounded-b text-green-900 px-4 py-3 shadow-md mb-4`}
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
          </div>
        )}

        <form
          onSubmit={sendEmail}
          className="flex flex-col lg:flex-row lg:w-2/3 w-full mx-auto px-8 space-y-4 sm:space-y-0 sm:space-x-4 sm:px-0 items-end"
        >
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-gray-100 dark:bg-white bg-opacity-50 border border-orange-500 focus:border-red-500 focus:bg-transparent focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out "
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-0 py-2 px-8 focus:outline-none text-lg Bodoni uppercase "
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default CTA;
