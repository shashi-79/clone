import React, { useState } from "react";
import Iteam6 from "../Iteam/iteam6";

export default function List6({ list_data }) {
  if (!list_data) return <></>;
  const [expanded, setExpanded] = useState();

  const { title, heading, lists_data = {} } = list_data;

  const handleExpand = (event) => {
    const id = event.currentTarget.dataset.id;
    console.log(id);
    expanded == id ? setExpanded(-1) : setExpanded(id);
  };

  return (
    <div id="gpsFaq" className="w-full flex justify-center bg-c-gray-8">
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
          <div className="gap-5 grid  grid-cols-1">
            {lists_data.map((value, index) => {
              return (
                <Iteam6
                  key={index}
                  id={index}
                  data={{ ...value }}
                  handleExpand={handleExpand}
                  expanded={expanded}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
