import React from 'react';


export default function Iteam7({ data }) {
    if (!data) return <></>;

    const { icon, heading, para } = data;
    return (
        <div animation="animate-pop-up" className=" hover:[&>*:first-child]:bg-c-green-3 hover:[&>*:first-child]:text-white mt-[40px]  relative  font-opensans  before:border-box ">
 
                {
                    icon && <div className="absolute border-solid border-[2px] border-c-green-3 text-c-green-3  top-[0px] left-[0px] flex items-center justify-center rounded-full text-[32px] font-normal leading-[32px] w-[64px] h-[64px]">

                        <i className={icon}></i>
                    </div>
                }


            {
                heading && <div className="font-semibold pl-[85px] mb-[10px] text-[#343A40] text-[22px]  leading-[26.4px] font-montserrat  box-border">
                   
                        {heading}
                  
                </div>
            }
            {
                para && <p className="font-normal pl-[85px] mb-[16px] text-[#444444] text-[14px]  leading-[21px] font-montserrat box-border">
                    {para}
                </p>
            }

        </div>
    );
}
