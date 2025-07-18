let icon ="icofont-check";
let sharedListStyle = {
        "i": "inline pr-[5px] text-center ",
        "p": "font-['Open_Sans',sans-serif] inline text-[#444444]  ",
        "m": "flex font-[IcoFont] justify-center items-center font-[400] text-[16px] leading-[24px] list-item list-disc "
    };
let sharedStyle = {
        "m": "text-[#444444] px-[15px]",
        "h": "  block font-[Montserrat,sans-serif] text-[28px] font-[500]  leading-[33.6px]  relative text-left  mb-[8px] pb-[12px]",
        "p": "mb-[16px] font-['Open Sans',sans-serif] text-[16px] leading-[24px] font-[400]",
        "l": " pl-[40px] mb-[16px] pl-6 ",
        "f": "mb-[16px]"
    };


let heading1 = "Advanced GPS Tracking Software by COSMICA";
let para1 = "COSMICA provides the complete white label GPS Tracking Platform developed with latest technologies and framework as per your requirements.";

let list1 = ["GPS Platform with secure private cloud infrastructure.",
    "Real Time data analysis of vehicle status",
    "All Kinds of fleet management Reports.",
    "Customized Android and iOS applications.",
    "Low cost platform with high quality and secure software.",
    "Low cost white label distributorship."];
let footer1 = "We are one stop solution for all kinds of GPS tracking solutions, contact us for more details!";


let heading2 = "White Label GPS Tracking Software Provider";
let para2 = "COSMICA TELEMATICS is ready for all your tracking needs which works with any GPS tracker. We are supporting more that 100+ GPS protocols of all well known brands of GPS market.";

let list2 = ["One of the best GPS Tracking Platform, secure and scalable.",
    "We host our GPS Tracking platform on AWS Cloud, thus ensure the 99.99% uptime.",
    "White Label Branding in Android and iOS applications.",
    "Ready to use API Integration which are developed for different client requirements.",
    "White label GPS Tracking software Provider in Pune and India",
    "We provide AIS 140 GPS devices in Pune as per RTO specifications.",
    "Cloud Based IoT GPS tracking software.",
    "AWS IoT Core application development.",
    "IoT MQTT application development."];

let heading3 = "Vehicle Tracking System Provider in Pune";
let para3 = "COSMICA TELEMATICS is one of best GPS device manufacturer, GPS trader & GPS supplier of GPS Tracking System in Pune. We exclusively work for development of all kinds of high end GPS software solutions for all sectors. We are specialized in GPS solution provider with high quality, easy to use, simple and efficient applications. All our products are capable for high scalability and performance driven. We deploy our products in Amazon Cloud for high availability of service with 99.99% uptime with auto scaling capability of any number of devices. We have universal GPS tracking server for any kind of GPS device like Autocop, TK103, GT06, GT02, NR024, FM1200-Teltonica etc. We are capable of tracking any GPS device as per customer's choice. We do provide AIS140 GPS devices as per RTO specifications.";

let list3 = ["Real Time Tracking of vehicles on Google Map.",
    "Get Detail Dashboard of Statistics on Web Browser and Android/iOS",
    "Ready GPS Tracker for Car, Bike, Trucks and Kids",
    "Ready GPS Tracking Software with Web, Android and iOS.",
    "GPS Device supplier in Pune and India.",
    "GPS Device manufacturer in Pune and India.",
    "Provides Personal GPS Tracker in Pune and India."];

let list_data1 = list1.map((value) => {
    return { "icon": icon, "para": value }
});


let list_data2 = list2.map((value) => {
    return { "icon": icon, "para": value }
});


let list_data3 = list3.map((value) => {
    return { "icon": icon, "para": value }
});

export const GpsServicesListData1 = {
    "heading": heading1,
    "para" : para1,
    "footer" : footer1,
    "list_style": sharedListStyle,
    "lists_data": list_data1,
    "style": sharedStyle
}

export const GpsServicesListData2 = {
    "heading": heading2,
    "para" : para2,
    "list_style": sharedListStyle,
    "lists_data": list_data2,
    "style": sharedStyle
}

export const GpsServicesListData3 = {
    "heading": heading3,
    "para" : para3,
    "list_style": sharedListStyle,
    "lists_data": list_data3,
    "style": sharedStyle
}