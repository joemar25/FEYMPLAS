/**
 * This code was generated by Builder.io.
 */
import React from "react";

const ContactForm: React.FC = () => {
  return (
    <form className="flex flex-col w-full max-md:max-w-full">
      <div className="flex flex-col max-w-full font-medium w-[555px]">
        <div className="flex flex-col w-full text-lg font-bold leading-loose bg-stone-200 text-stone-800 text-opacity-70 max-md:max-w-full">
          <div className="flex flex-col w-full max-md:max-w-full">
            <div className="overflow-hidden px-6 py-3.5 border border-solid border-stone-600 max-md:px-5 max-md:max-w-full">
              <label htmlFor="companyName" className="sr-only">
                Registered Company Name
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                placeholder="Registered Company Name"
                className="w-full bg-transparent"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-4 w-full text-lg font-bold leading-loose bg-stone-200 text-stone-800 text-opacity-70 max-md:max-w-full">
          <div className="flex flex-col w-full max-md:max-w-full">
            <div className="overflow-hidden px-6 py-3.5 border border-solid border-stone-600 max-md:px-5 max-md:max-w-full">
              <label htmlFor="companyEmail" className="sr-only">
                Company Email Address
              </label>
              <input
                type="email"
                id="companyEmail"
                name="companyEmail"
                placeholder="Company Email Address"
                className="w-full bg-transparent"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-4 w-full">
          <div className="flex flex-col w-full max-md:max-w-full">
            <div className="flex flex-col w-full text-lg leading-loose text-stone-800 text-opacity-70 max-md:max-w-full">
              <div className="overflow-hidden px-6 py-3.5 border border-solid border-stone-800 max-md:px-5 max-md:max-w-full">
                <label htmlFor="brandName" className="sr-only">
                  Brand Name
                </label>
                <input
                  type="text"
                  id="brandName"
                  name="brandName"
                  placeholder="Brand Name*"
                  className="w-full bg-transparent"
                />
              </div>
            </div>
            <div className="flex flex-col items-start w-full text-sm leading-7 text-center text-black max-md:max-w-full">
              <div className="max-md:max-w-full">
                Enter your brand name here.
              </div>
              <div className="max-md:max-w-full">
                If you don't have a brand name, enter your registered company
                name.
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-4 w-full">
          <div className="flex flex-col w-full max-md:max-w-full">
            <div className="flex flex-col w-full text-lg leading-loose text-stone-800 text-opacity-70 max-md:max-w-full">
              <div className="overflow-hidden px-6 py-3.5 border border-solid border-stone-800 max-md:px-5 max-md:max-w-full">
                <label htmlFor="telephone" className="sr-only">
                  Telephone Number
                </label>
                <input
                  type="tel"
                  id="telephone"
                  name="telephone"
                  placeholder="Telephone Number*"
                  className="w-full bg-transparent"
                />
              </div>
            </div>
            <div className="w-full text-sm leading-7 text-center text-black max-md:max-w-full">
              Write N/A if not Applicable.
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-4 w-full text-lg leading-loose text-stone-800 text-opacity-70">
          <div className="overflow-hidden px-6 py-3.5 border border-solid border-stone-800 max-md:px-5 max-md:max-w-full">
            <label htmlFor="mobile" className="sr-only">
              Mobile Number
            </label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              placeholder="Mobile Number*"
              className="w-full bg-transparent"
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
