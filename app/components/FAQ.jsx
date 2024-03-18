import React from "react";
import Accordion from "./Accordion";

const FAQ = () => {
  return (
    <div className=" bg-[#0e0d0d] rounded-2xl cursor-pointer">
      <Accordion
        title="About the project"
        answer="Furnico is an ecommerce website design. The website relies on clean and minimalistic design with pastel color choice to create a warm and cozy feeling when the user is on the website."
      />
      <Accordion
        title="Technologies used"
        answer="Figma, Photoshop, React, Tailwind and Framer Motion."
      />
      <Accordion title="Year" answer="2024" />
      <Accordion
        title="Live version"
        answer="Coming soon. For now, check out the designs."
      />
    </div>
  );
};

export default FAQ;
