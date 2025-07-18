
import React from 'react';
import Iteam10 from '../Iteam/iteam10';

export default function List10({className,animation, list_data }) {
    if (!list_data) return <></>;

    const {heading, para, lists_data = {}, footer} = list_data;

    return (
        <div animation={animation} className={className +" text-c-gray-1 "}>
         {
             heading && <div className="font-montserrat text-3xl font-medium  leading-tight  relative pb-5">
                 {heading}
             </div>
         }
         {
             para && <p className=" font-open-sans text-lg">
                 {para}
             </p>
         }
         {
            lists_data && <div className=" my-4 pl-10 ">
                {lists_data.map((value,index)=>{
                   return <Iteam10  key={index} data={value}/>
                })}
            </div> 
         }
         {
             footer && <p className="">
                 {footer}
             </p>
         }
        </div>
    );
}
