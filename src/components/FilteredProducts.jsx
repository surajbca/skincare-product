import React from "react";
import product2 from "../assets/product2.jpg";
import product3 from "../assets/product3.jpg";
import product1 from "../assets/product1.jpg";

const FilteredProducts = () => {
  const products = [
    { name: "ALYA SKIN CLEANSER", price: "$29.99", img: product1 },
    { name: "RITUAL OF SAKURA", price: "$27.99", img: product2 },
    { name: "THE BODY LOTION", price: "$19.99", img: product3 },
  ];

  return (
    <section className="px-8 py-16 text-center">
      <h2 className="text-2xl font-semibold mb-6">
        Feel Beautiful Inside and Out with Every Product.
      </h2>
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {["NEW ARRIVAL", "CLEANSING", "ACNE FIGHTER", "ANTI AGING"].map(
          (tag) => (
            <button
              key={tag}
              className="px-4 py-1 border rounded-full text-sm hover:bg-black hover:text-white transition"
            >
              {tag}
            </button>
          )
        )}
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {products.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-4 text-left">
              <h3 className="font-medium text-lg">{item.name}</h3>
              <p className="text-sm text-gray-500">From {item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FilteredProducts;
