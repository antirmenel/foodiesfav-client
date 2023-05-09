import React from "react";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import { about } from "../Data";

const About = () => {
  return (
    <>
      <section className=" py-6 lg:py-12 dark:bg-dark dark:text-white text-gray-700">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-orange-500 text-xs font-medium tracking-widest uppercase mb-4">
                Making cooking a breeze.
              </h2>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-10 text-center tracking-wider Bodoni">
                A journey of
                <span className="uppercase text-orange-500"> PASSION </span> for
                <br />
                <span className="uppercase text-orange-500">COOKING</span> and
                <span className="uppercase text-orange-500"> SHARING </span>
                experiences
              </h1>
              <div className="max-w-5xl  mx-auto mb-12">
                <p className="text-base text-justify leading-relaxed  tracking-wider">
                  At FOODIES FAV, we are passionate about food and believe that
                  it is not just about nourishment, but also about creating
                  memories and sharing experiences with loved ones. Our journey
                  started with a simple idea of curating and sharing our
                  favorite recipes with the world. Over time, we have built a
                  community of food enthusiasts who share our love for cooking
                  and exploring new flavors. Our recipes are tried and tested,
                  and we only feature the ones that we truly love and think you
                  will too. Join us on this journey of culinary discovery and
                  let's explore the world of food together.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {about.map((item, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg px-6 py-8"
              >
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2 Bodoni">
                  {item.title}
                </h2>
                <p className="text-base leading-relaxed mb-4 ">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </>
  );
};

export default About;
