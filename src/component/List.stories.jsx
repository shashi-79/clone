import List from '../component/List';
import FirstListData from '@/list-data/FirstListData';
import FeatureListData from '@/list-data/FeatureListData';
import {LowerFooterData1, LowerFooterData2, LowerFooterData3} from '@/list-data/LowerFooterData'
import { UpperFootterData1, UpperFootterData2 } from '@/list-data/UpperFooterData';
import DataListData from '@/list-data/DataListData';
import CloudListData from '@/list-data/CloudListData';
import AdminListData from '@/list-data/AdminListData';
import ContactListData from '@/list-data/ContactListData';
import { GpsServicesListData1, GpsServicesListData2,  } from '@/list-data/GpsServicesListData';


export default {
    title: 'Components/List',
    component: List,
    tags: ['autodocs'], // Optional but good for docs
    parameters: {
        layout: '',
    },
};


export const Primary ={
    args:{
        list_data:{
            "heading": "Cloud Services",

            "list_style": {
                "i": "inline pr-[5px] text-center text-white w-[14px] h-[14px]",
                "p": "font-['Open_Sans',sans-serif] inline text-[#1ACC8D] leading-relaxed ",
                "m": "flex justify-center  list-item font-opensans  before:border-box "
            },

            "lists_data": [{
                "icon": "bx bx-chevron-right",
                "para": "Cloud Services"
            }],

            "style": {
                "m": "px-[15px] bg-[#010351]",
                "h": "box-border text-white block font-[Montserrat,sans-serif] text-base font-semibold h-[31.179px] leading-[19.2px]  relative text-left w-[510px] [text-size-adjust:100%]  mb-[8px] pb-[12px]",
                "p": "text-[14px]/1 font-['boxicons']",
                "l": "text-white pl-[40px] mb-[16px] relative pl-6 "
            }
        }
    }
};




export const ContactList = {
    args:{
        list_data:{
            "heading": "Contact Us for best quote!",

            "list_style": {
                "i": "inline  text-[18px] font-[boxicons] font-normal leading-[18px] text-[#61ebba] w-[14px] h-[14px]",
                "p": "pl-[5px] inline box-border text-white font-['Open_Sans',sans-serif] text-sm font-normal",
                "m": "flex items-center bg-[#010351] pb-[10px] text-[14px]/1  block   font-opensans  before:border-box "
            },

            "lists_data": [{
                "icon": "bx bx-chevron-right",
                "para": "Web Design"
            }, {
                "icon": "bx bx-chevron-right",
                "para": "Web Design"
            }],

            "style": {
                "m": "px-[15px] mb-[30px] bg-[#010351]",
                "h": "box-border text-white block font-[Montserrat,sans-serif] text-base font-semibold h-[31.179px] leading-[19.2px]  relative text-left w-[510px] [text-size-adjust:100%]  mb-[8px] pb-[12px]",
                "p": "text-[14px]/1 font-['boxicons']",
                "l": " text-white pl-[10px] mb-[16px] "
            }
        }
    }
};

export const firstList ={
    args:{
        list_data: FirstListData
    }
};


export const featureList ={
    args:{
        list_data: FeatureListData
    }
};

export const LowerFooter ={
    args:{
        list_data: LowerFooterData3
    }
};

export const UpperFooter ={
    args:{
        list_data: UpperFootterData1
    }
};

export const DataData ={
    args:{
        list_data: DataListData
    }
};


export const Cloud ={
    args:{
        list_data: CloudListData
    }
};



export const Admin ={
    args:{
        list_data: AdminListData
    }
};


export const Contact ={
    args:{
        list_data: ContactListData
    }
};


export const Tracking ={
    args:{
        list_data: GpsServicesListData2
    }
};

/**/