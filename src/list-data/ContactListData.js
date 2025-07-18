let title = "CONTACT US";
let heading = "Contact Us for best quote!";
let list_data = [{
            "icon":"icofont icofont-google-map",
            "heading": "Head Office:",
            "para": "Office#102, Kohinoor B-Zone, Mumbai - Banglore Highway, Baner, Pune, Maharashtra 411045"
        }, {
            "icon":"icofont icofont-phone",
            "heading": "Pune Sales:",
            "para": "+91 1111111111"
        }, {
            "icon":"icofont icofont-phone",
            "heading": "Pune Sales:",
            "para": "+91 0000000000"
        }, {
            "icon":"icofont icofont-phone",
            "heading": "Hyderabad Sales:",
            "para": "+91 0000000000"
        }, {
            "icon":"icofont icofont-phone",
            "heading": "Mumbai Sales:",
            "para": "+91 0000000000"
        },{
            "icon":"icofont icofont-envelope",
            "heading": "General Sales:",
            "para": "sales@cosmicagps.com"
        },{
            "icon":"icofont icofont-envelope",
            "heading": "Info:",
            "para": "info@cosmicagps.com"
        }];

        
export default {
    "title":title,
    "heading": heading,

    "list_style": {
        "i": "text-[20px] font-[400] leading-[20px] font-[IcoFont] text-[#3f43fd] absolute top-[0px] left-[0px] flex items-center justify-center bg-[#f0f0ff]  rounded-full hover:bg-[#1acc8d]  w-[44px] h-[44px]",
        "h": "font-[600] pl-[60px]  mb-[5px] text-[#0205a1] text-[22px]  leading-[26.4px] font-[Montserrat,sans-serif]  box-border",
        "p": "font-[400] pl-[60px] mb-[5px] text-[#0205a1] text-[14px]  leading-[21px] font-[Montserrat,sans-serif]  box-border",
        "m": "relative  font-opensans  before:border-box "
      },

    "lists_data": [...list_data],

    "style": {
        "m": "px-[15px]",
        "h": " text-[#010483] font-[Poppins,sans-serif] text-[36px] font-[700]  leading-[54px] pb-[40px]",

        "l": "gap-5 grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-4"
    }
};