let title = "Cloud Services";
let titleIcon = "bx bxs-cloud text-[#ffbb2c]";
let heading = "Cloud Computing and Hosting Services";

let list_data = [
  {
    icon: "bx bx-code-curly ",
    para: "Static and Dynamic Website Designing",
  },
  {
    icon: "bx bx-data ",
    para: "Migrate Your Application to Cloud and Save Costs!",
  },
  {
    icon: "bx bxs-cloud ",
    para: "Architect New Cloud Applications",
  },
  {
    icon: "bx bx-mail-send ",
    para: "SMS/Email Alerts Application",
  },
  {
    icon: "bx bxs-cog ",
    para: "Applications/ Website Hosting",
  },
  {
    icon: "bx bxl-android ",
    para: "Android/iOS Application Design and Development",
  },
  {
    icon: "bx bx-rupee ",
    para: "Pay as you go model No upfront cost!",
  },
  {
    icon: "bx bxl-whatsapp ",
    para: "WhatsApp API Application",
  },
];

export default {
  title,
  titleIcon,
  heading,

  list_style: {
    i: "flex justify-center  font-[boxicons] pr-[10px] mb-[21.82px] text-[32px] font-[400] text-[#ffbb2c] leading-[32px] ",
    p: " flex justify-center font-right font-[700] p-[auto] text-[#0205a1] text-[16px]  leading-[16px] font-[Montserrat,sans-serif]  box-border",
    m: "rounded-sm border-solid border border-[#00000020] p-[20px]  bg-white relative   ",
  },

  lists_data: [...list_data],

  style: {
    m: "px-[15px]",
    h: " text-[#010483] font-[Poppins,sans-serif] text-[36px] font-[700]  leading-[54px] pb-[40px]",

    l: "gap-5 grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-4",
  },
};
