import React from 'react';


export default function Iteam8({  data }) {
    if (!data) return <></>;

    const { icon, para } = data;
   
    return (
        <div  animation="animate-pop-up" className="p-5 bg-c-gray-8 flex items-center">
 
                {
                    icon && <div className="pr-4 text-3xl font-normal ">

                        <i className={icon}></i>
                    </div>
                }
            {
                para && <p className="font-bold text-c-blue-5  font-montserrat ">
                    {para}
                </p>
            }

        </div>
    );
}

