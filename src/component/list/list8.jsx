import React from 'react';
import Iteam8 from '../Iteam/iteam8';

export default function List8({list_data }) {
    if (!list_data) return <></>;

    const {title,heading, lists_data = {} } = list_data;
 
    return (
    <div id='feature' className="w-full flex justify-center">
      <div className=" py-12 font-poppins sm:w-c-sm px-8 md:w-c-md lg:w-c-lg  xl:w-c-xl">
        <div animation="animate-slide-up" className="text-c-gray-4 uppercase tracking-wider font-medium text-sm py-4 flex items-center after:border-b-1 after:border-c-green-4 after:ml-3 after:w-30 ">
          {title}
        </div>
         {
             heading && <div animation="animate-slide-up" className=" text-c-blue-5/98 text-4xl font-bold uppercase pb-11">
                 {heading}
             </div>
         }
         {
            lists_data && <div className="gap-5 grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
                {lists_data.map((value,index)=>{
                   return <Iteam8  key={index} data={value}/>
                })}
            </div> 
         }
      </div>
    </div>
    );
}

