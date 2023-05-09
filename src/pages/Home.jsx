import React from "react";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import HealthyFav from "../components/HealthyFav";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Trending from "../components/Trending";

const Home = () => {
  return (
    <div className="lg:mx-24 dark:bg-dark dark:text-white">
      <Hero />
      <Trending />
      <HealthyFav />
      <CTA />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
