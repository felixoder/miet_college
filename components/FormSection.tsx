import React from 'react';

type Props = {};

const FormSection = (props: Props) => {
  return (
    <div className="flex flex-col justify-center items-center lg:grid md:grid-cols-2 lg:p-36 md:p-7">
      <div className="ml-10 mr-10 flex justify-center items-center mt-5 md:mt-0">
        <img
          src="./Rectangle.png"
          className="w-full lg:w-[636px] object-cover"
          alt="rectangle"
        />
      </div>

      {/* Form */}
      <form className="flex flex-col gap-6 w-full max-w-4xl px-4">
        <h1 className="text-formal_red font-bold text-3xl mb-5 mt-3">
          Quick Enquiry For Admission
        </h1>

        <div className="flex flex-col gap-4 w-full">
          <div className="relative">
            <label
              htmlFor="name"
              className="absolute p-2 -top-2 left-3 text-black transition-all duration-300 transform -translate-y-1 scale-75 origin-top-left bg-white z-10 text-xl"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder=" "
              className="peer p-6 w-full h-[98px] border-2 border-gray-300 focus:border-blue-500 focus:outline-none rounded-md"
            />
          </div>

          <div className="relative">
            <label
              htmlFor="mobile_number"
              className="absolute p-2 -top-2 left-3 text-black transition-all duration-300 transform -translate-y-1 scale-75 origin-top-left bg-white z-10 text-xl"
            >
              Mobile Number
            </label>
            <input
              id="mobile_number"
              type="text"
              placeholder=" "
              className="peer p-6 w-full h-[98px] border-2 border-gray-300 focus:border-blue-500 focus:outline-none rounded-md"
            />
          </div>

          <div className="relative">
            <label
              htmlFor="course"
              className="absolute p-2 -top-2 left-3 text-black transition-all duration-300 transform -translate-y-1 scale-75 origin-top-left bg-white z-10 text-xl"
            >
              Select Interested Course
            </label>
            <input
              id="course"
              type="text"
              placeholder=" "
              className="peer p-6 w-full h-[98px] border-2 border-gray-300 focus:border-blue-500 focus:outline-none rounded-md"
            />
          </div>

          <div className="relative">
            <label
              htmlFor="location"
              className="absolute p-2 -top-2 left-3 text-black transition-all duration-300 transform -translate-y-1 scale-75 origin-top-left bg-white z-10 text-xl"
            >
              Location
            </label>
            <input
              id="location"
              type="text"
              placeholder=" "
              className="peer p-6 w-full h-[98px] border-2 border-gray-300 focus:border-blue-500 focus:outline-none rounded-md"
            />
          </div>

          <div className="relative">
            <label
              htmlFor="message"
              className="absolute p-2 -top-2 left-3 text-black transition-all duration-300 transform -translate-y-1 scale-75 origin-top-left bg-white z-10 text-xl"
            >
              Message
            </label>
            <input
              id="message"
              type="text"
              placeholder=" "
              className="peer p-6 w-full h-[98px] border-2 border-gray-300 focus:border-blue-500 focus:outline-none rounded-md"
            />
          </div>

          <button className="bg-formal_red text-white h-[98px] w-full rounded-md text-2xl font-bold">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormSection;
