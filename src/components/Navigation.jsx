import React from "react";

const Navigation = () => {
  return (
    <div className="w-full flex flex-row items-center p-2 justify-between  shadow-xs bg-blue-600">
      <input
        type="search"
        name="serch"
        placeholder="Enter Pincode"
        className=" h-8 mx-auto w-3/5 md:w-2/5 my-2 px-4 text-sm focus:outline-none"
      />
    </div>
  );
};

export default Navigation;
