import React from "react";
import bgImg from "../assets/bg.jpg";

const Features = () => {
  return (
    <section
      className="bg-cover bg-center h-[80vh] flex items-center px-6 md:px-16 "
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <p className="text-lg md:text-xl max-w-3xl mx-auto text-white">
        Experience the ultimate in skincare with our expertly formulated
        products, crafted to nourish, protect, and rejuvenate your skin.
      </p>
    </section>
  );
};

export default Features;
