import React from "react";

export default function Iteam2({data }) {
  if (!data) return <></>;
  const { para } = data;
  return (
    <div
      className="text-sm font-open-sans flex"
    >
      <div className="text-xl flex items-center text-c-green-7">
        <i className="bx bx-chevron-right"></i>
      </div>

      {para && <p className="pl-2 text-white font-open-sans font-normal hover:text-c-green-7">{para}</p>}
    </div>
  );
}
