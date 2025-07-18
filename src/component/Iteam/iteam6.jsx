import React from "react";

export default function Iteam6({id, data, handleExpand, expanded }) {
  if (!data) return <></>;

  const { heading, para, footer } = data;
  return (
    <div
    animation="animate-slide-up"
      className={
        "relative font-poppins bg-white p-5 " + ((expanded == id )? " text-c-green-1":"")
      }
    >
      <div
       data-id={id}
        onClick={handleExpand}
        className="flex hover:text-c-green-3"
      >
        <div className="bx bx-help-circle text-2xl text-c-green-2"></div>
        <div className="grow font-medium px-2 text- ">{heading}</div>
        <div
          className={
            "bx bx-chevron-" + ((expanded == id ) ? "up" : "down") + " text-2xl"
          }
        ></div>
      </div>
      <div className={(expanded == id ) ? "block" : "hidden"}>
        <div className="font-open-sans text-c-gray-2">{para}</div>
        <div className="pl-6 font-medium hover:text-c-green-3 ">{footer}</div>
      </div>
    </div>
  );
}
