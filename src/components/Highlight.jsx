import React from "react";
import highlightImg from "../assets/highlight.jpg";

const Highlight = () => {
  return (
    <section className="relative">
      <img
        src={highlightImg}
        alt="Highlight"
        className="w-full object-cover h-[500px] rounded-b-xl"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
        <div className="text-white text-center">
          <h2 className="text-3xl font-bold">
            Feel Beautiful Inside and Out with Every Product.
          </h2>
          <button className="mt-4 px-6 py-2 bg-white text-black rounded-full text-sm">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Highlight;
