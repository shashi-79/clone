import React from 'react';
import Iteam9 from '../Iteam/iteam9';

export default function List9({list_data }) {
    if (!list_data) return <></>;

    const { lists_data = {} } = list_data;
 
    return (
    <div className="w-full flex bg-[#f5f5ff] justify-center">
      <div className=" py-12 font-poppins sm:w-c-sm px-8 md:w-c-md lg:w-c-lg  xl:w-c-xl">
         {
            lists_data && <div className="gap-8 grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {lists_data.map((value,index)=>{
                   return <Iteam9  key={index} data={value}/>
                })}
            </div> 
         }
      </div>
    </div>
    );
}

