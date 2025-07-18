import iteam1 from "./iteam1";
import Iteam5 from "./iteam5";
import Iteam6 from "./iteam6";

export default {
  title: "Components/iteam1",
  component: Iteam6,
  tags: ["autodocs"], // Optional but good for docs
  parameters: {
    layout: "",
  },
};

export const Primary = {
  args: {
    key: 1,
    expanded: true,
    handleExpanded: (() => {
      this.expanded = !this.expanded;
    }).bind(this),
    data: {
      heading:
        "Who provides GPS Vehicle Tracking System for EV Vehicle like EV Bike, EV Car or EV Bus?",
      para: "COSMICA TELEMATICS provides the GPS Tracking devices for EV Vehicles with best quality and accuracy of Location with in 10-30 meters. Check out More details",
      footer: "GPS Trackers EV Vehicles",
    },
  },
};

/*
export const Primary = {
  args:{
    key:1,
    data:{
      "style": {
        "i": "w-[14px] h-[14px]",
        "h": "heading-style",
        "p": "text-[14px]/1 font-['boxicons']",
        "m": "inline"
      },

      "icon": "bx bx-chevron-right",
      "heading": "",
      "para": "This is a sample paragraph."
    },
  },
};


export const Contact = {
  args:{
    data:{
      "style": {
        "i": "text-[20px] font-[400] leading-[20px] font-[IcoFont] text-[#3f43fd]  absolute top-[0px] left-[0px] flex items-center justify-center bg-[#f0f0ff]  rounded-full hover:bg-[#1acc8d]  w-[44px] h-[44px]",
        "h": "font-[600] pl-[60px]  mb-[5px] text-[#0205a1] text-[22px]  leading-[26.4px] font-[Montserrat,sans-serif]  box-border",
        "p": "font-[400] pl-[60px] mb-[5px] text-[#0205a1] text-[14px]  leading-[21px] font-[Montserrat,sans-serif]  box-border",
        "m": "relative  font-opensans  before:border-box "
      },

      "icon": "icofont-envelope ",
      "heading": "Location:",
      "para": "Office#102, Kohinoor B-Zone, Mumbai - Banglore Highway, Baner, Pune, Maharashtra 411045"
    }
  }
};

export const AdminLogin = {
  args:{
    data:{
      "style": {
        "i": "inline font-[boxicons] pr-[10px] text-[32px] font-[400] leading-[32px] ",
        "p": "inline font-right font-[700] p-[auto] text-[#0205a1] text-[16px]  leading-[16px] font-[Montserrat,sans-serif]  box-border",
        "m": "p-[20px] bg-[#f5f5ff] flex items-center relative  before:border-box "
      },
      "icon": "bx bx-link-alt",
      "para": "Cosmica Web Login"
    }
  }
};

export const CloudService = {
  args:{
    data:{
      "style": {
        "i": "flex justify-center  font-[boxicons] pr-[10px] mb-[21.82px] text-[32px] font-[400] text-[#ffbb2c] leading-[32px] ",
        "p": " flex justify-center font-right font-[700] p-[auto] text-[#0205a1] text-[16px]  leading-[16px] font-[Montserrat,sans-serif]  box-border",
        "m": "rounded-sm border-solid border border-[#00000020] p-[20px]  bg-white relative   "
      },

      "icon": "bx bx-link-alt",
      "para": "Cosmica Web Login"
    }
  }
};


export const VehicalTracking = {
  args:{

    data:{
      "style": {
        "p": "pl-[40px] text-[#444444] ",
        "m": " bg-[#0f0] list-item list-disc flex justify-center items-center text-[16px] leading-[21px] font-opensans "
      },
      "para": "GPS Software Platform with secure private cloud infrastructure."
    },
  },
};

export const FeatureAfter = {
  args:{
    data:{
      "style": {
        "i": "flex justify-center  items-center",
        "h": "pt-[30px] flex justify-center font-[600] text-[#010483] text-[36px] leading-[54px] bg-white font-['Open_Sans',sans-serif]",
        "p": "font-[400] pb-[25px] bg-white text-[#444444] text-[14px]  leading-[21px] flex justify-center font-[Montserrat,sans-serif] ",
        "m": " px-[15px]  pb-[10px] "
      },

      "icon": "rounded-full bg-[#1acc8d] h-[24px] w-[24px]  p-[12px] ",
      "heading": "500",
      "para": "Projects "
    }
  }
};

export const First = {
  args:{
    data:{
      "style": {
        "i": "absolute border-solid border-[2px] border-[#1acc8d] text-[#1acc8d]  top-[0px] left-[0px] flex items-center justify-center rounded-full font-[boxicons] text-[32px] font-[400] leading-[32px] w-[64px] h-[64px]",
        "h": "font-[600] pl-[85px] mb-[10px] text-[#343A40] text-[22px]  leading-[26.4px] font-[Montserrat,sans-serif]  box-border",
        "p": "font-[400] pl-[85px] mb-[5px] text-[#444444] text-[14px]  leading-[21px] font-[Montserrat,sans-serif]  box-border",
        "m": " hover:[&>*:first-child]:bg-[#1acc8d] hover:[&>*:first-child]:text-white mt-[40px]  relative  font-opensans  before:border-box "
      },

      "icon": "bx bx-link-alt",
      "heading": "Location: utyhfyufy ggg gfgjgfg ufuyfyuututuytg ffyfyu",
      "para": "Office#102, Kohinoor B-Zone, Mumbai - Banglore Highway, Baner, Pune, Maharashtra 411045"
    }
  }
};
*/
