import React from "react";
import product1 from "../assets/product1.jpg";
import product2 from "../assets/product2.jpg";
import product3 from "../assets/product3.jpg";

const Products = () => {
  const items = [
    {
      name: "Bio Ingredients",
      desc: "Get naturally beautiful and transform with bio creams.",
    },
    {
      name: "Everything Natural",
      desc: "Pure ingredients. The perfect solution for skincare.",
    },
    {
      name: "All Handmade",
      desc: "Made with love and care. Give your skin the best.",
    },
  ];

  return (
    <section className="px-8 py-16 grid md:grid-cols-2 gap-10">
      <div>
        <h2 className="text-3xl font-semibold mb-4">
          YOUR SKIN DESERVES THE BEST CARE.
        </h2>
        <p className="text-sm text-gray-600 mb-6">
          Explore our curated collection designed to rejuvenate and protect your
          skin.
        </p>
        {items.map((item, idx) => (
          <div key={idx} className="mb-6">
            <h3 className="text-xl font-medium">
              0{idx + 1} {item.name}
            </h3>
            <p className="text-sm text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
      <img src={product1} alt="product" className="w-80 rounded-xl ml-auto" />
    </section>
  );
};

export default Products;
