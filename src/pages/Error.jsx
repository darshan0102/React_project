import React from "react";

const Error = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen p-4 sm:p-6 md:p-8 bg-gray-100">
      <h1 className="text-black text-center text-[60px] sm:text-[80px] md:text-[100px] lg:text-[120px] font-extrabold">
        404
      </h1>
      <div className="font-semibold text-black text-lg sm:text-xl md:text-2xl lg:text-3xl mt-4 text-center">
        The page you're looking for doesn't exist or <br />
        probably moved somewhere
      </div>
      <p className="mt-4 text-gray-600 text-sm sm:text-base md:text-lg text-center">
        Please go back to the homepage or check out our offers
      </p>
      <a href="https://www.google.com">
        <button className="bg-[#0068C8] text-gray-50 mt-4 uppercase py-2 w-40 sm:w-48 md:w-52 rounded hover:bg-white hover:border font-semibold hover:border-[#0068C8] hover:text-[#0068C8] transition duration-300 mb-5">
          Back to homepage
        </button>
      </a>
    </div>
  );
};

export default Error;
