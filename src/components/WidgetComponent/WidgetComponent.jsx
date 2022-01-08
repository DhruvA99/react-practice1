import React from "react";
import { useSelector } from "react-redux";
import { checkServiceablePincodesFunction } from "../../helper/HelperFunctions";
import ImageComponent from "../ImageComponent/ImageComponent";

function WidgetComponent({ widgetData, array }) {
  const pincode = useSelector((store) => store.data.pincode);

  let widgetClass = checkServiceablePincodesFunction(
    pincode,
    widgetData.serviceablePincodes
  )
    ? null
    : "opacity-0";

  return (
    <div
      className={`inline-flex ${widgetClass} `}
      style={{ flexGrow: widgetData.grow.split("%")[0] }}
    >
      {widgetData.assets.map((asset, index) => {
        return (
          <ImageComponent imageData={asset} key={asset.id} lsarray={array} />
        );
      })}
    </div>
  );
}

export default WidgetComponent;
