import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Specifications from "../components/Specifications";
import Footer from "../components/Footer";

const Landingpage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Specifications />
      <Footer />
    </div>
  );
};

export default Landingpage;