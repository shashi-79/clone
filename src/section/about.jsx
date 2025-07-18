import List7 from "@/component/list/list7";
import FirstListData from "@/list-data/FirstListData";
import Image from "next/image";
import React from "react";

export default function About() {
  return (
      <div id="about" className=" container mx-auto px-6">
        <div className=" grid gap-6 grid-cols-1 lg:grid-cols-2">
            <div className="flex justify-center items-center">
            <Image alt="" animation={"animate-slide-right"} className="w-full  md:max-lg:w-[80%]" src={"/about.png"} width={400} height={400}/>
            </div>
            <List7  className="" list_data={FirstListData}/>
        </div>
      </div>
  );
}
