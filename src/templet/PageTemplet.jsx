import List10 from "@/component/list/list10";
import List3 from "@/component/list/list3";
import List4 from "@/component/list/list4";
import List5 from "@/component/list/list5";
import List6 from "@/component/list/list6";
import List8 from "@/component/list/list8";
import List9 from "@/component/list/list9";
import AdminListData from "@/list-data/AdminListData";
import CloudListData from "@/list-data/CloudListData";
import ContactListData from "@/list-data/ContactListData";
import DataListData from "@/list-data/DataListData";
import FeatureListData from "@/list-data/FeatureListData";
import GpsFaqListData from "@/list-data/GpsFaqListData";
import About from "@/section/about";
import Footer from "@/section/footer";
import GpsServices from "@/section/gpsServices";
import ImgScroll from "@/section/ImgScroll";
import Navigation from "@/section/Navigation";
import Starting from "@/section/Starting";
import React, { useEffect } from "react";

export default function PageTemplet() {
  useEffect(() => {
    function checkAndAnimate() {
      const scrollY = window.scrollY || window.pageYOffset;

      document.querySelectorAll("[animation]").forEach(function (el) {
        el.classList.add("opacity-0");

        const rectTop = el.getBoundingClientRect().top + scrollY;

        if (scrollY + window.innerHeight >= rectTop) {
          const animationClass = el.getAttribute("animation");
          if (animationClass) {
            el.classList.add(animationClass);
            el.classList.add("transition-opacity");
            el.classList.add("opacity-100");
          }
        }
      });
    }

    window.addEventListener("scroll", checkAndAnimate);
    window.addEventListener("load", checkAndAnimate);
  });

  return (
    <div className="**:not-[:has(*)]:cursor-pointer">
      <Navigation/>
      <Starting />
      <About />
      <List8 list_data={FeatureListData} />
      <List9 list_data={DataListData} />
      <ImgScroll />
      <GpsServices />
      <List5 list_data={CloudListData} />
      <List4 list_data={AdminListData} />
      <List6 list_data={GpsFaqListData} />
      <List3 list_data={ContactListData} />
      <Footer />
    </div>
  );
}
