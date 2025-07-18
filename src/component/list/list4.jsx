import React from "react";
import Iteam4 from "../Iteam/iteam4";

export default function List4({ list_data }) {
  if (!list_data) return <></>;

  const { title, heading, lists_data = {} } = list_data;

  return (
    <div id="application" className="w-full flex justify-center bg-white">
      <div animation="animate-slide-up" className=" py-16 font-poppins  sm:w-c-sm px-8 md:w-c-md lg:w-c-lg  xl:w-c-xl">
        <div className="text-c-gray-4 uppercase  tracking-wider  font-medium text-sm pb-1 flex items-center after:border-b-1 after:border-c-green-4 after:ml-3 after:w-30 after:block">
          {title}
        </div>

        {heading && (
          <div className=" text-c-blue-5/98 text-3xl font-bold uppercase pb-11">
            {heading}
          </div>
        )}

      {lists_data && (
        <div className="gap-8 grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          {lists_data.map((value, index) => {
            return (
              <Iteam4
                key={index}
                data={{ ...value }}
              />
            );
          })}
            </div>
          )}
      </div>
    </div>
  );
}
