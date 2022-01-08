import React from "react";
import WidgetComponent from "../WidgetComponent/WidgetComponent";

function ContainerComponent({ containerData, array }) {
  return (
    <div
      className="flex "
      style={{ flexGrow: containerData.grow.split("%")[0] }}
    >
      {containerData.children.map((item, index) => {
        if (item.slotType === "WIDGET")
          return (
            <WidgetComponent key={index} widgetData={item} array={array} />
          );
        else {
          return (
            <ContainerComponent
              key={index}
              containerData={item}
              array={array}
            />
          );
        }
      })}
    </div>
  );
}

export default ContainerComponent;
