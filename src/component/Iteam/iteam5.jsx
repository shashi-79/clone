import React from "react";

export default function Iteam5({ data }) {
  if (!data) return <></>;

  const { icon, para } = data;
  return (
    <div
    animation="animate-pop-up"
      className="rounded-sm border-solid border border-c-gray-6 p-5  bg-white relative"
    >
      {icon && (
        <div className="flex justify-center mb-5 text-4xl font-normal text-c-yellow">
          <i className={icon}></i>
        </div>
      )}

      {para && <div className=" text-center font-bold leading-4 wrap-break-word text-c-blue-5 text-4 font-montserrat">{para}</div>}
    </div>
  );
}
