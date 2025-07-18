import clientsLogo from "@/assets/client";
import Image from "next/image";
import React from "react";


export default function ImgScroll() {
  return (
    <div className="w-full bg-white ">
      
      <div className=" py-12 font-poppins ">
        <div className="container px-2 mb-[24px] text-gray-600 font-medium text-3xl font-montserrat leading-9 ">
          Our Trusted Clients <div className="inline text-c-green-3">Show Client List</div>
        </div>
        <div className=" overflow-x-hidden ">
          <div className="flex         
          animate-scroll-infinit w-max pl-8  gap-8">
            {[...clientsLogo,...clientsLogo].map((logo,key)=>{
              return <Image alt={"client logo"} key={key} src={logo} className="h-20 w-auto" />
            })}

          </div>
        </div>
      </div>
    </div>
  );
}
