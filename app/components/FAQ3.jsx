import React from "react";
import Accordion from "./Accordion";

const FAQ3 = () => {
  return (
    <div className="bg-[#0e0d0d] rounded-2xl cursor-pointer">
      <Accordion
        title="About the project"
        answer="CoffeeBar is a concept project about a coffee bar where people can enjoy a cup of their favorite coffee. The concept explores the idea of ordering and booking coffee through the website (with options to choose your table) but still maintains the traditional model of regular coffee bar."
      />
      <Accordion
        title="Technologies used"
        answer="Figma, Photoshop, React, Tailwind and Framer Motion"
      />
      <Accordion title="Year" answer="2023." />
      <Accordion
        title="Live version"
        answer="The website will be coming soon. For now, check out the designs only."
      />
    </div>
  );
};

export default FAQ3;
