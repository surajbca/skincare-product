import React, { useState } from "react";

const FAQ = () => {
  const [open, setOpen] = useState(1);
  const faqs = [
    {
      q: "Are your products safe for sensitive skin?",
      a: "Yes, absolutely. Dermatologist tested.",
    },
    {
      q: "Are your products cruelty-free?",
      a: "All our products are cruelty-free and most are vegan.",
    },
    {
      q: "What’s your return policy?",
      a: "You can return within 30 days of purchase.",
    },
    {
      q: "Do you ship internationally?",
      a: "Yes, worldwide shipping available.",
    },
  ];

  return (
    <section className="px-8 py-16">
      <h2 className="text-2xl font-semibold mb-4">
        Answers to Your Skincare Questions, All in One Place.
      </h2>
      <div className="space-y-4">
        {faqs.map((item, idx) => (
          <div
            key={idx}
            className="border p-4 rounded-lg cursor-pointer bg-white"
            onClick={() => setOpen(open === idx ? null : idx)}
          >
            <div className="flex justify-between items-center">
              <p className="font-medium">{item.q}</p>
              <span>{open === idx ? "−" : "+"}</span>
            </div>
            {open === idx && (
              <p className="text-sm text-gray-600 mt-2">{item.a}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
