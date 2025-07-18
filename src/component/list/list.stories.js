import { LowerFooterData1 } from "@/list-data/LowerFooterData";
import List1 from "../list/list1";
import List2 from "../list/list2";
import { UpperFootterData1 } from "@/list-data/UpperFooterData";
import List3 from "../list/list3";
import ContactListData from "@/list-data/ContactListData";
import AdminListData from "@/list-data/AdminListData";
import List4 from "../list/list4";
import List5 from "../list/list5";
import CloudListData from "@/list-data/CloudListData";
import List6 from "../list/list6";
import GpsFaqListData from "@/list-data/GpsFaqListData";
import List7 from "../list/list7";
import FirstListData from "@/list-data/FirstListData";
import FeatureListData from "@/list-data/FeatureListData";
import List8 from "../list/list8";
import List9 from "../list/list9";
import List10 from "../list/list10";
import { GpsServicesListData1 } from "@/list-data/GpsServicesListData";

export default {
  title: "Components/list1",
  component: List10,
  tags: ["autodocs"],
  parameters: {
    layout: "",
  },
};

/*
export const LowerFooter ={
    args:{
        list_data: LowerFooterData3
    }
};
*/

export const upperFooter = {
  args: {
    list_data: GpsServicesListData1,
  },
};
