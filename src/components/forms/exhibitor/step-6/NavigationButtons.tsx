/**
 * This code was generated by Builder.io.
 */
import React from "react";

const NavigationButtons: React.FC = () => {
  return (
    <nav className="flex flex-wrap gap-10 justify-between items-center self-end w-full text-lg font-bold leading-loose text-white whitespace-nowrap max-w-[1085px] max-md:max-w-full">
      <button
        className="flex flex-col self-stretch my-auto w-[53px] h-[53px] bg-stone-600"
        aria-label="Previous page"
      >
        <span className="self-center my-auto">&lt;</span>
      </button>
      <button className="flex flex-col self-stretch my-auto w-[171px] px-12 py-3.5 bg-stone-600 max-md:px-5">
        NEXT
      </button>
    </nav>
  );
};

export default NavigationButtons;