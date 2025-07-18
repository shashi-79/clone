import React from 'react';


export default function Iteam10({  data }) {
    if (!data) return <></>;
    
    const { icon,  para} = data;
    return (
      <div
        className="font-normal list-item"
      >
        {icon && (
          <div className="inline font-icofont pr-3 text-center ">
            <i className={icon}></i>
          </div>
        )}
        {para && (
          <p className="font-open-sans inline text-c-gray-1 ">
            {para}
          </p>
        )}
      </div>
    );
}
