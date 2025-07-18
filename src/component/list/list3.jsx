import React from "react";
import Iteam3 from "../Iteam/iteam3";
import Form from "@/component/Form";

export default function List3({ list_data }) {
  if (!list_data) return <Form />;

  const { title, heading, lists_data = {} } = list_data;

  return (
    <div id="contact" className=" flex justify-center">
      <div animation="animate-slide-up" className=" py-10 font-poppins  sm:w-c-sm px-8 md:w-c-md lg:w-c-lg  xl:w-c-xl">
        <div className="text-c-gray-4 uppercase  tracking-wider  font-medium text-sm pb-1 flex items-center after:border-b-1 after:border-c-green-4 after:ml-3 after:w-30 after:block">
          {title}
        </div>

        {heading && (
          <div className=" text-c-blue-5/98 text-3xl font-bold uppercase pb-11">
            {heading}
          </div>
        )}
        <div className="grid grid-cols-1 lg:grid-cols-3 ">
          {lists_data && (
            <div className="gap-5 grid  grid-cols-1">
              {lists_data.map((value, index) => {
                return (
                  <Iteam3
                    key={index}
                    data={{ ...value }}
                  />
                );
              })}
            </div>
          )}
          <Form className={"lg:col-span-2"} />
        </div>
      </div>
    </div>
  );
}
