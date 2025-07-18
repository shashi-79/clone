let title = "Admin Login and Aplications URLs";
let heading = "Check Android/iOS Apps";

let list_data = [{
    "icon":"bx bx-link-alt text-[#5578ff]",
    "para": "Cosmica Web Login",
}, {
    "icon":"bx bx-link-alt text-[#ffbb2c]",
    "para": "AIS 140 Web Login"
}, {
    "icon":"bx bxl-android text-[#32de84]",
    "para": "AIS 140 Android Application"
}, {
    "icon":"bx bxl-apple text-[#555555]",
    "para": "AIS 140 iPhone Application"
}, {
    "icon":"bx bxl-android text-[#32de84]",
    "para": "COSMICA GPS Android Application"
}, {
    "icon":"bx bxl-apple text-[#555555]",
    "para": "Cosmica GPS iPhone Application"
}, {
    "icon":"bx bxl-android text-[#32de84]",
    "para": "SchoolBus Android Application"
}, {
    "icon":"bx bxl-apple text-[#555555]",
    "para": "SchoolBus iPhone Application"
}];



export default {
    title,
    "heading": heading,

    "list_style": {
        "i": "inline font-[boxicons] pr-[10px] text-[32px] font-[400] leading-[32px] ",
        "p": "inline font-right font-[700] p-[auto] text-[#0205a1] text-[16px]  leading-[16px] font-[Montserrat,sans-serif]  box-border",
        "m": "p-[20px] bg-[#f5f5ff] flex items-center relative  before:border-box "
      },

    "lists_data": [...list_data],

    "style": {
        "m": "px-[15px]",
        "h": " text-[#010483] font-[Poppins,sans-serif] text-[36px] font-[700]  leading-[54px] pb-[40px]",

        "l": "gap-5 grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-4"
    }
};