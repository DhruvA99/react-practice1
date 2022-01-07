import React, { useState } from "react";

function ImageComponent({ imageData }) {
  const [checkedClass, setCheckedClass] = useState(false);
  return (
    <div className="p-1 w-full h-full">
      <input
        className="hidden"
        onClick={() => setCheckedClass((checkedClass) => !checkedClass)}
        type="checkbox"
        id={imageData.id}
        name="radio"
      />
      <label htmlFor={imageData.id} className="">
        <img
          key={imageData.id}
          className={`customImg h-full  border-2 ${
            checkedClass ? "border-4 border-black" : "border-none"
          }`}
          src={imageData.imageUrl}
          alt="assetImage"
        />
      </label>
    </div>
  );
}

export default ImageComponent;
