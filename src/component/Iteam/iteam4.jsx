import React from "react";

export default function Iteam4({  data }) {
  if (!data) return <></>;

  const { icon, para} = data;
  return (
    <div
    animation="animate-pop-up"
      className="p-5 bg-c-blue-9/20 flex items-center"
    >
      {icon && (
        <div className=" text-3xl font-normal">
          <i className={icon}></i>
        </div>
      )}

      {para && (
        <div className="pl-3 font-bold text-c-blue-5 font-montserrat">
          {para}
        </div>
      )}
    </div>
  );
}
