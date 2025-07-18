import React from "react";
import Iteam1 from "../Iteam/iteam1";

export default function List1({ data }) {
  if (!data) return <></>;

  const { heading, lists_data } = data;

  return (
    <div className="pb-5 bg-c-blue-1">
      {heading && (
        <div className="pb-4 text-white font-semibold font-montserrat">
          {heading}
        </div>
      )}

      {lists_data && (
        <div className="text-white pl-11 ">
          {lists_data.map((value, index) => {
            return (
              <Iteam1
                key={index}
                data={{ ...value }}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
