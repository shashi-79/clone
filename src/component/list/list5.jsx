import React from "react";
import Iteam5 from "../Iteam/iteam5";

export default function List5({ list_data }) {
  if (!list_data) return <></>;

  const { title, heading, titleIcon, lists_data = {} } = list_data;

  return (
    <div id="cloudService" className="w-full flex justify-center bg-white">
      <div className=" py-16 font-poppins  sm:w-c-sm px-8 md:w-c-md lg:w-c-lg  xl:w-c-xl">
        <div animation="animate-slide-up">
          <div className="flex gap-1">
            <div className={titleIcon}></div>
            <div
              className={
                "text-c-gray-3 tracking-[0.15em] uppercase font-medium text-sm pb-1 flex items-center after:border-b-1 after:border-c-green-4 after:ml-3 after:w-30 after:block "
              }
            >
              {title}
            </div>
          </div>
          {heading && (
            <div className=" text-c-blue-5/98 text-3xl font-bold uppercase pb-11">
              {heading}
            </div>
          )}
        </div>
        {lists_data && (
          <div className="gap-7 grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
            {lists_data.map((value, index) => {
              return <Iteam5 key={index} data={{ ...value }} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
}
