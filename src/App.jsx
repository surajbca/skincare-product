import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Products from "./components/Products";
import Highlight from "./components/Highlight";
import FilteredProducts from "./components/FilteredProducts";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-[#f3f7e7] text-[#1d2c27] font-sans">
      <Navbar />
      <Hero />
      <Features />
      <Products />
      <Highlight />
      <FilteredProducts />
      <FAQ />
      <Footer />
    </div>
  );
};

export default App;
