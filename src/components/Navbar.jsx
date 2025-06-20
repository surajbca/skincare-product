import React from "react";
import { FiShoppingBag, FiHeart, FiUser } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-[#f3f7e7] ">
      <h1 className="font-bold text-xl">SKINCARE</h1>
      <ul className="flex gap-6 text-sm">
        <li>All Products</li>
        <li>Serum</li>
        <li>Sunscreen</li>
        <li>Bundle</li>
      </ul>
      <div className="flex gap-4 items-center">
        <div className="flex items-center gap-1">
          <FiShoppingBag />
          <span>Cart (1)</span>
        </div>
        <FiHeart />
        <FiUser />
      </div>
    </nav>
  );
};

export default Navbar;
