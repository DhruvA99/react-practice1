import React from "react";
import ContainerComponent from "../ContainerComponent/ContainerComponent";
import WidgetComponent from "../WidgetComponent/WidgetComponent";

function GridLayout({ data, array }) {
  return (
    <div className="p-1 flex flex-col">
      {data.map((item, index) => {
        if (item.slotType === "WIDGET") {
          return (
            <WidgetComponent
              widgetData={item}
              key={item.slotId}
              array={array}
            />
          );
        } else {
          return (
            <ContainerComponent
              containerData={item}
              key={index + new Date().getTime()}
              array={array}
            />
          );
        }
      })}
    </div>
  );
}

export default GridLayout;
