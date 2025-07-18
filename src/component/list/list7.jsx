import React from 'react';
import Iteam7 from '../Iteam/iteam7';

export default function List7({list_data ,className }) {
    if (!list_data) return <></>;

    const {heading, para, list_style, lists_data = {} } = list_data;

    return (
        <div className={"px-[15px] py-[45px] "+ className}>
         <div animation={"animate-slide-left"}>
         {
             heading && <div className=" text-[#010483] font-[Montserrat,sans-serif] text-[28px] font-[700]  leading-[34px] font-['Open Sans',sans-serif] mb-[8px] pb-[12px]">
                 {heading}
             </div>
         }
         {
             para && <p className="text-c-gray-1">
                 {para}
             </p>
         }
         </div>
         {
            lists_data && <div className="mb-4">
                {lists_data.map((value,index)=>{
                   return <Iteam7  key={index} data={{style:{...list_style},...value}}/>
                })}
            </div> 
         }
        </div>
    );
}
