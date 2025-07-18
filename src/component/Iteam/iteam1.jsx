import React from "react";

export default function Iteam1({data }) {
  if (!data) return <></>;
  const { para } = data;
  return (
    <div
      className="list-item items-center text-sm leading-5 list-disc font-open-sans "
    >
      <div className="inline pr-1 text-center text-white">
        <i className="bx bx-chevron-right"></i>
      </div>

      {para && <p className=" inline text-c-green-3 hover:text-c-green-6">{para}</p>}
    </div>
  );
}
