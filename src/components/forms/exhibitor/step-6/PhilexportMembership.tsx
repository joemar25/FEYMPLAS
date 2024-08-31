/**
 * This code was generated by Builder.io.
 */
import React from "react";

const PhilexportMembership: React.FC = () => {
  return (
    <section className="flex flex-col justify-center mt-20 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col w-full max-md:max-w-full">
        <h2 className="flex flex-col items-start w-full text-xl font-bold min-h-[30px] text-stone-800 max-md:max-w-full">
          <div className="flex overflow-hidden gap-4 items-center">
            <span className="self-stretch my-auto">PHILEXPORT Member</span>
            <div className="flex shrink-0 self-stretch my-auto h-0.5 bg-stone-800 w-[73px]" />
          </div>
        </h2>
        <p className="mt-3 w-full font-medium leading-7 text-lg text-stone-600 max-md:max-w-full">
          PHILEXPORT members' FAME+ subscription will be fully subsidized.
          Non-PHILEXPORT members are only entitled to 66.67% (Php 20,000.00)
          subsidy and will have to pay the remaining 33.33% (Php 10,000.00) of
          the subscription fee.
        </p>
        <div className="flex flex-wrap gap-10 items-center px-8 w-full mt-2.5 text-base text-stone-800 text-opacity-70 max-md:px-5 max-md:max-w-full">
          <label className="flex flex-wrap gap-1.5 items-center self-stretch my-auto">
            <input type="radio" name="membership" className="sr-only" />
            <span className="flex shrink-0 self-stretch my-auto rounded-full border border-black border-solid h-[18px] w-[18px]"></span>
            <span className="self-stretch my-auto">PHILEXPORT Member</span>
          </label>
          <label className="flex flex-wrap gap-1.5 items-center self-stretch my-auto">
            <input type="radio" name="membership" className="sr-only" />
            <span className="flex shrink-0 self-stretch my-auto rounded-full bg-stone-600 h-[18px] w-[18px]"></span>
            <span className="self-stretch my-auto">Not a member</span>
          </label>
        </div>
      </div>
      <div className="flex flex-col mt-6 w-full max-md:max-w-full">
        <div className="flex overflow-hidden flex-wrap gap-6 py-px w-full text-lg leading-loose border border-solid border-stone-800 max-md:max-w-full">
          <label
            htmlFor="file-upload"
            className="overflow-hidden gap-2.5 self-stretch px-4 py-3 font-bold text-white bg-stone-600 cursor-pointer"
          >
            Choose File
          </label>
          <input
            id="file-upload"
            type="file"
            className="sr-only"
            aria-label="Upload PHILEXPORT membership document"
          />
          <span className="flex-auto my-auto font-medium text-stone-800 text-opacity-70 w-[941px] max-md:max-w-full">
            No file chosen
          </span>
        </div>
        <div className="flex flex-col items-start mt-1.5 w-full text-sm font-medium leading-7 text-center text-black max-md:max-w-full">
          <p className="max-md:max-w-full">
            Please provide related PHILEXPORT document to prove your membership.
          </p>
          <p className="max-md:max-w-full">
            File types accepted are .doc, .docx, .pdf, .png, .jpg, and .jpeg.
            Maximum file size accepted is 2MB.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PhilexportMembership;