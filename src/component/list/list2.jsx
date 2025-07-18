import React from "react";
import Iteam2 from "../Iteam/iteam2";

export default function List2({ data ,className }) {
  if (!data) return <></>;

  const { heading, lists_data } = data;

  return (
    <div className={" bg-c-blue-1 "+className}>
      {heading && (
        <div className="pb-4 text-white font-semibold font-montserrat">
          {heading}
        </div>
      )}

      {lists_data && (
        <div className="text-white pl-1 flex flex-col gap-4 ">
          {lists_data.map((value, index) => {
            return (
              <Iteam2
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
