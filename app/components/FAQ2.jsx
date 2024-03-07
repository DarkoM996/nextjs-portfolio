import React from "react";
import Accordion from "./Accordion";

const FAQ2 = () => {
  return (
    <div className="bg-[#0e0d0d] rounded-2xl">
      <Accordion
        title="About the project"
        answer="Furnico Furniture is a mockup project about an ecommerce web app."
      />
      <Accordion title="Type of project" answer="This is a mockup project." />
      <Accordion title="Year" answer="2024." />
      <Accordion
        title="Live version"
        answer="The ecommerce app will be coming soon. For now, these are the designs only."
      />
    </div>
  );
};

export default FAQ2;
