let icon = "bx bx-chevron-right";
let sharedListStyle = {
        "i": "inline pr-[5px] text-center text-white",
        "p": "font-['Open_Sans',sans-serif] inline text-[#1ACC8D]  ",
        "m": "flex justify-center items-center text-[14px] leading-[21px] list-item list-disc font-opensans  "
    };
let sharedStyle = {
        "m": "px-[15px] bg-[#010351]",
        "h": "box-border text-white block font-[Montserrat,sans-serif] text-base font-semibold h-[31.179px] leading-[19.2px]  relative text-left w-[510px]   mb-[8px] pb-[12px]",
        "p": "text-[14px]/1 font-['boxicons']",
        "l": "text-white pl-[40px] mb-[16px] pl-6 "
    };
    
let heading1 = "COSMICA GPS Tracking Services";
let list1 = ["Advanced GPS Vehicle Tracking System",
"GPS Vehicle Tracking System in Pune",
"GPS Vehicle Tracking System in Hinjewadi",
"GPS Vehicle Tracking System in Mumbai",
"GPS Vehicle Tracking System in Hyderabad",
"GPS Vehicle Tracking System in Nagpur",
"GPS Vehicle Tracking System in Maharashtra",
"GPS Vehicle Tracking System in India",
"RFID Vehicle Tracking System",
"SchoolBus GPS Tracking System",
"Personal GPS Tracker in Pune",
"GPS Device TK103, GT06, GT06N, GT06F, WeeTrack Lite, WeeTrack2",
"GPS Device Concox, Coban",
"GPS device Teltonika",
"GPS device Autocop",
"GPS OBD Tracker",
"AIS 140 GPS Tracker",
"AIS 140 GPS Tracker Hinjewadi",
"AIS 140 GPS Tracker in Pune",
"GPS Fleet Management System",
"GPS Services in Pune"];

let heading2 = "Web Design and Development";
let list2 = ["Web design in Pune",
"Website development in Pune",
"Website development in India",
"Website Hosting in India",
"Graphic Design in India",
"Graphic Design in Pune",
"Logo Design in Pune",
"Logo Design in India",
"SEO optimization",
"PHP Laravel Development",
"PHP Laravel Development in Pune",
"ReactJS Programming",
"NodeJS Programming",
"Python Django Programming",
"Python Programming"];

let heading3 = "Cloud Services";
let list3 = ["Cloud Services",
"Cloud Softare Design in Pune",
"Website development in Cloud",
"Cloud database migration",
"Application Development in Cloud",
"AWS Cloud Consultancy",
"Android/iOS app development",
"Mobile Application development",
"Mobile Application development in Pune"];

let heading4 = "Advanced GPS Tracking Services";
let list4 = ["Vehicle Tracking System in Pune Baner",
    "Vehicle Tracking System in Pune Maharashtra",
    "GPS Device in Pune Maharashtra",
    "Asset Tracker in Pune Maharashtra India"];

let heading5 = "IoT Tracking Platform";
let list5 = ["IoT Tracking Platform in Pune Maharashtra"];

let heading6 = "MQTT - IoT Tracking Platform";
let list6 = ["MQTT - IoT Tracking Platform",
    "AWS IoT Core Tracking Platform"]


let list_data1 = list1.map((value)=>{
    return {"icon":icon,"para":value}
});

let list_data2 = list2.map((value)=>{
    return {"icon":icon,"para":value}
});

let list_data3 = list3.map((value)=>{
    return {"icon":icon,"para":value}
});


let list_data4 = list4.map((value)=>{
    return {"icon":icon,"para":value}
});


let list_data5 = list5.map((value)=>{
    return {"icon":icon,"para":value}
});


let list_data6 = list6.map((value)=>{
    return {"icon":icon,"para":value}
});


export const LowerFooterData1 = {
    "heading": heading1,
    "list_style": sharedListStyle,
    "lists_data": list_data1,
    "style": sharedStyle,
};

export const LowerFooterData2 = {
    "heading": heading2,
    "list_style": sharedListStyle,
    "lists_data": list_data2,
    "style": sharedStyle
};

export const LowerFooterData3 = {
    "heading": heading3,
    "list_style": sharedListStyle,
    "lists_data": list_data3,
    "style": sharedStyle
};

export const LowerFooterData4 = {
    "heading": heading4,
    "list_style": sharedListStyle,
    "lists_data": list_data4,
    "style": sharedStyle
};

export const LowerFooterData5 = {
    "heading": heading5,
    "list_style": sharedListStyle,
    "lists_data": list_data5,
    "style": sharedStyle
};

export const LowerFooterData6 = {
    "heading": heading6,
    "list_style": sharedListStyle,
    "lists_data": list_data6,
    "style": sharedStyle
};

