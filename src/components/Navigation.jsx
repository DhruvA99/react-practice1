import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { updatePincode } from "../redux/reducers/dataSlice";

const Navigation = () => {
  const pincode = useSelector((store) => store.data.pincode);
  const dispatch = useDispatch();
  return (
    <div className="w-full flex flex-row items-center p-2 justify-between  shadow-xs bg-blue-600">
      <input
        type="search"
        name="serch"
        value={pincode}
        onChange={(e) => dispatch(updatePincode(e.target.value))}
        placeholder="Enter Pincode"
        className=" h-8 mx-auto w-3/5 md:w-2/5 my-2 px-4 text-sm focus:outline-none"
      />
    </div>
  );
};

export default Navigation;
