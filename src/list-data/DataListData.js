let list_data = [{
    "icon" : "icofont icofont-simple-smile rounded-full bg-[#1acc8d] ",
    "heading": 5000,
    "para": "Happy Clients"

}, {
    "icon" : "icofont icofont-document-folder rounded-full bg-[#1acc8d] ",
    "heading": 100,
    "para": "Projects"

}, {
    "icon" : "icofont icofont-live-support rounded-full bg-[#1acc8d] ",
    "heading": 25000,
    "para": "Live Vehicles"
}, {
    "icon" : "icofont icofont-users-alt-5 rounded-full bg-[#1acc8d]  ",
    "heading": 80,
    "para": "Partners"

}]




export default {
    "list_style": {
        "i": "flex relative justify-center text-center text-white font-[IcoFont] align-middle mb-[] text-[24px] font-[400] leading-[48px] ",
        "h": "pt-[30px] flex justify-center font-[600] text-[#010483] text-[36px] leading-[54px] bg-white font-['Open_Sans',sans-serif]",
        "p": "font-[400] pb-[25px] bg-white text-[#444444] text-[14px]  leading-[21px] flex justify-center font-[Montserrat,sans-serif] ",
        "m": " px-[15px] relative pb-[10px] "
      },

    "lists_data": [...list_data],

    "style": {
        "m": "px-[15px] pt-[70px] bg-[#f5f5ff]",
        "l": "gap-10 grid  grid-cols-1 "
    }
};