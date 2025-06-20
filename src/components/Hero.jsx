import React from "react";
import plumImg from "../assets/plum.jpg";

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-8 py-16 gap-8">
      <div className="text-center md:text-left max-w-md">
        <p className="text-sm">Transform your skincare routine</p>
        <h1 className="text-5xl font-bold leading-tight mt-2">
          GLOW NATURALLY
        </h1>
      </div>
      <img src={plumImg} alt="Glow" className="w-48 rounded-lg" />
    </section>
  );
};

export default Hero;
