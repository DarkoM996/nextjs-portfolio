import React from "react";
import Accordion from "./Accordion";

const FAQ = () => {
  return (
    <div className=" bg-[#0e0d0d] rounded-2xl">
      <Accordion
        title="About the project"
        answer="CoffeeBar is a mockup project about an landing page for a Coffee Bar."
      />
      <Accordion
        title="Type of project"
        answer="Furnico is a mockup project about an landing page for a Coffee Bar."
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
