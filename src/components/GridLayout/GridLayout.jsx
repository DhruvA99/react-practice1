import React from "react";
import ContainerComponent from "../ContainerComponent/ContainerComponent";
import WidgetComponent from "../WidgetComponent/WidgetComponent";

function GridLayout({ data }) {
  return (
    <div className="p-1 flex flex-col">
      {data.map((item, index) => {
        if (item.slotType === "WIDGET") {
          return <WidgetComponent widgetData={item} key={index.slotId} />;
        } else {
          return <ContainerComponent containerData={item} key={index} />;
        }
      })}
    </div>
  );
}

export default GridLayout;
