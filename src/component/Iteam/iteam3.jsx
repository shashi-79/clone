import React from "react";

export default function Iteam3({ data }) {
  if (!data) return <></>;

  const { icon, heading, para } = data;
  return (
    <div animation="animate-slide-right" className="relative mb-3 font-open-sans hover:[&>*:first-child]:bg-c-green-5 hover:[&>*:first-child]:text-white">
      {icon && (
        <div className="text-xl font-normal icofont text-c-blue-7 absolute top-[0px] left-[0px] flex items-center justify-center bg-c-gray-8 rounded-full w-11 h-11">
          <i className={icon}></i>
        </div>
      )}

      {heading && (
        <div className="font-semibold pl-15 text-c-blue-3 text-2xl font-montserrat">
          {heading}
        </div>
      )}
      {para && (
        <p
          className={
            (/\+?[1-9][0-9]+[ ][0-9]{4,14}/g.test(para)
              ? "text-c-green-1 "
              : "text-c-blue-4 ") + "font-normal pl-15 text-sm font-montserrat"
          }
        >
          {para}
        </p>
      )}
    </div>
  );
}
