import List1 from "@/component/list/list1";
import List2 from "@/component/list/list2";
import {
  LowerFooterData1,
  LowerFooterData2,
  LowerFooterData3,
  LowerFooterData4,
  LowerFooterData5,
  LowerFooterData6,
} from "@/list-data/LowerFooterData";
import {
  UpperFootterData1,
  UpperFootterData2,
} from "@/list-data/UpperFooterData";
import React from "react";
import CopyRight from "../component/CopyRight";
import NewsLetter from "../component/NewsLetter";
import Detail from "../component/Detail";

export default function Footer() {
  return (
    <div className="p-8 bg-c-blue-1 flex justify-center">
      <div className=" sm:w-c-sm px-8 md:w-c-md lg:w-c-lg xl:w-c-xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-6">
          <Detail className={"lg:col-span-2"} />
          <List2 data={UpperFootterData1} />
          <List2 data={UpperFootterData2} />
          <NewsLetter className={"lg:col-span-2"} />
        </div>
        <CopyRight />
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <List1 data={LowerFooterData1} />
            <List1 data={LowerFooterData2} />
            <List1 data={LowerFooterData3} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <List1 data={LowerFooterData4} />
            <List1 data={LowerFooterData5} />
            <List1 data={LowerFooterData6} />
          </div>
        </div>
      </div>
    </div>
  );
}
