let icon ="bx bx-chevron-right";
let sharedListStyle = {
        "i": "inline  text-[18px] font-[boxicons] font-normal leading-[18px] text-[#61ebba] w-[14px] h-[14px]",
        "p": "pl-[5px] inline box-border text-white font-['Open_Sans',sans-serif] text-sm font-normal",
        "m": "flex items-center bg-[#010351] pb-[10px] text-[14px]/1  block   font-opensans  before:border-box "
    };
let sharedStyle = {
        "m": "px-[15px] mb-[30px] bg-[#010351]",
        "h": "box-border text-white block font-[Montserrat,sans-serif] text-base font-semibold  leading-[19.2px]  relative text-left mb-[8px] pb-[12px]",
        "p": "text-[14px]/1 font-['boxicons']",
        "l": " text-white pl-[10px] mb-[16px] "
    };

let heading1 = "Useful Links";
let list1 = ["Home",
    "About us",
    "GPS Services",
    "Cloud Services",
    "Privacy policy",];

let heading2 = "Our Services";
let list2 = ["Web Design",
    "Web Development",
    "Product Management",
    "Application Development",
    "Graphic Design"];

    let list_data1 = list1.map((value)=>{
    return {"icon":icon,"para":value}
});

let list_data2 = list2.map((value)=>{
    return {"icon":icon,"para":value}
});

export const UpperFootterData1 = {
    "heading": heading1,
    "list_style": sharedListStyle,
    "lists_data": list_data1,
    "style": sharedStyle
}

export const UpperFootterData2 = {
    "heading": heading2,
    "list_style": sharedListStyle,
    "lists_data": list_data2,
    "style": sharedStyle
}
