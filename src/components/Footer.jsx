import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0f1f1a] text-white px-6 py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight mb-4">
            Join The Skincare <br /> Community Now.
          </h2>
        </div>
        <div className="md:text-right">
          <p className="text-sm text-gray-300 mb-2">Get in Touch</p>
          <a
            href="mailto:contact@skincare.com"
            className="text-2xl font-light hover:underline"
          >
            contact.skincare.com
          </a>
        </div>
      </div>
      <div className=" border-gray-700 my-10" />
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-6">
        <div className="flex gap-6">
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
          <a href="#">YouTube</a>
        </div>
        <div className="flex gap-6">
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Cookies Policy</a>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full flex justify-center pointer-events-none select-none opacity-5">
        <h1 className="text-[200px] font-black tracking-wider leading-none hidden md:block">
          SKINCARE
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
