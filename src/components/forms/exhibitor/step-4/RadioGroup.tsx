/**
 * This code was generated by Builder.io.
 */
import React from "react";

interface RadioGroupProps {
  title: string;
  description?: string;
  options: string[];
  selectedIndex: number;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
  title,
  description,
  options,
  selectedIndex,
}) => {
  return (
    <div className="flex flex-col mt-4 w-full font-medium leading-7 text-stone-800 text-opacity-70 max-md:max-w-full">
      <h3 className="text-lg max-md:max-w-full">
        <span className="font-bold">{title}</span>
      </h3>
      {description && <p className="mt-1 text-base">{description}</p>}
      <div className="flex flex-col justify-center items-start px-8 mt-1.5 w-full text-base max-md:px-5 max-md:max-w-full">
        {options.map((option, index) => (
          <div key={index} className="flex flex-wrap gap-1.5 items-center">
            <div
              className={`flex shrink-0 self-stretch my-auto rounded-full ${
                index === selectedIndex
                  ? "bg-stone-600"
                  : "border border-black border-solid"
              } h-[18px] w-[18px]`}
            />
            <div className="self-stretch my-auto">{option}</div>
          </div>
        ))}
      </div>
    </div>
  );
};