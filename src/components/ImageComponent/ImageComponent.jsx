import React, { useState } from "react";

function ImageComponent({ imageData, lsarray }) {
  const [checkedClass, setCheckedClass] = useState(
    lsarray ? (lsarray.includes(imageData.id) ? true : false) : false
  );
  let setLocalStorageFunction = (id, checkedClassValue) => {
    let array = JSON.parse(localStorage.getItem("checkedStatusArray"));
    if (checkedClassValue) {
      array = [...array, id];
    } else {
      array = array.filter((item) => item !== id);
    }
    localStorage.setItem("checkedStatusArray", JSON.stringify(array));
  };
  return (
    <div className="p-1 w-full h-full">
      <input
        className="hidden"
        onClick={() => {
          setCheckedClass((checkedClass) => {
            setLocalStorageFunction(imageData.id, !checkedClass);
            return !checkedClass;
          });
        }}
        value={checkedClass}
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
