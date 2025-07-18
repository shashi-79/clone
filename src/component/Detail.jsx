import React from "react";

let list = [
  ["Sales:", "+91 9067227722"],
  ["Sales:", "+91 9067667766"],
  ["Support:", "+91 9130069964"],
  ["Info:", "info@cosmicagps.com"],
  ["Sales:", "sales@cosmicagps.com"],
];

let iconlist = [
  "bx bxl-twitter",
  "bx bxl-facebook",
  "bx bxl-instagram",
  "bx bxl-linkedin",
];

export default function Detail({ className }) {
  return (
    <div
      className={
        "bg-c-blue-0 font-montserrat text-sm font-light py-6 px-4 text-white border-t-4 border-t-c-green-3  " +
        className
      }
    >
      <div className="text-2xl pb-3 font-semibold text-center">
        COSMICA TELEMATICS PVT LTD
      </div>

      <div className="text-center">
        Office#102, Kohinoor B-Zone, Mumbai - Banglore Highway, Baner, Pune,
        Maharashtra 411045
        <br />
        <br />
        {list.map(([k, v],index) => {
          return (
            <div
             key={index} className="flex justify-center">
              <div className="inline font-bold">{k}&nbsp;</div>
              <div className="inline">{v}</div>
              <br />
            </div>
          );
        })}
      </div>
      <div className="flex my-4 text-lg justify-center gap-5">
        {iconlist.map((style,index) => (
          <div key={index} className={style}></div>
        ))}
      </div>
    </div>
  );
}
