import React, { useState } from "react";
import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineDown } from "react-icons/ai";

const Accordion = ({ title, answer }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="px-4 py-2">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between items-center w-full border-b border-[#1d1b1b]"
      >
        <span className="text-2xl px-4 py-2">{title}</span>
        {accordionOpen ? (
          <span className="transition-all duration-300 ease-in-out">
            <AiOutlineDown />
          </span>
        ) : (
          <span className="transition-all duration-300 ease-in-out">
            <AiOutlineRight />
          </span>
        )}
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-base text-[#aaa5a5] ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0 hidden:p-4"
        }`}
      >
        <div className="overflow-hidden text-xl px-4 py-2">{answer}</div>
      </div>
    </div>
  );
};

export default Accordion;
