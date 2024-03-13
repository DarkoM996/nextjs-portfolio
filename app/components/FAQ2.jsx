import React from "react";
import Accordion from "./Accordion";

const FAQ2 = () => {
  return (
    <div className="bg-[#0e0d0d] rounded-2xl">
      <Accordion
        title="About the project"
        answer="SneakerHead is an ecommerce web app for a sneaker shop. The brand's goals are to bring a collection of the world's best sneakers from the world's top sneaker companies available to their customers."
      />
      <Accordion
        title="Technologies used"
        answer="Figma, Photoshop, React, Tailwind and Framer Motion"
      />
      <Accordion title="Year" answer="2024." />
      <Accordion
        title="Live version"
        answer="The ecommerce app will be coming soon. For now, these are the designs only."
      />
    </div>
  );
};

export default FAQ2;
