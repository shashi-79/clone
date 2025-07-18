import List10 from "@/component/list/list10";
import { GpsServicesListData1, GpsServicesListData2, GpsServicesListData3 } from "@/list-data/GpsServicesListData";
import Image from "next/image";
import React from "react";

export default function GpsServices() {
  return (
    <div id="gpsService" className="p-8 flex justify-center">
      <div className="px-8 container ">
        <div className="grid grid-cols-1 md:gap-8 md:grid-cols-3">
          <Image animation="animate-slide-right" alt="" className="order-1 w-full" src={'/details-1.png'} width={300} height={1} />
          <List10 animation="animate-slide-left" className="order-2 md:col-span-2" list_data={GpsServicesListData1}/>
          <Image animation="animate-slide-left" alt="" className="order-3 md:order-4 w-full" src={'/details-2.png'} width={300} height={1} />
          <List10 animation="animate-slide-right" className="order-4 md:order-3 md:col-span-2" list_data={GpsServicesListData2}/>
          <Image animation="animate-slide-right" alt="" className="order-5 w-full" src={'/details-3.png'} width={300} height={1} />
          <List10 animation="animate-slide-left" className="order-6 md:col-span-2" list_data={GpsServicesListData3}/>
        </div>
      </div>
    </div>
  );
}
