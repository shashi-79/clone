import React, { useEffect, useRef, useState } from "react";

const nvas = [
  ["Home", "home"],
  ["GPS Services", "gpsService"],
  ["Cloud Services", "cloudService"],
  ["Features", "feature"],
  ["Application", "application"],
  ["GPS FAQ", "gpsFaq"],
  ["About US", "about"],
  ["Contact", "contact"],
];

export default function Navigation() {
  const navRef = useRef();
  const [opened, setOpened] = useState(false);
  const [navBg, setNavBg] = useState(false);
  const [currentSection, setCurrentSection] = useState("home");

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 776px)");

    const handleNavChange = () => {
      if (!navRef.current) return;
      const divHeight = navRef.current.offsetHeight;
      const scrollY = window.scrollY;
      setNavBg(scrollY > divHeight);
    };

    const handleMediaChange = (event) => {
      !event.matches && setOpened(event.matches);
    };

    function checkCurrentSection() {
      const scrollY = window.scrollY || window.pageYOffset;

      ["home","about","feature","gpsService","cloudService","application","gpsFaq","contact"].map((id) => {
        const el = document.getElementById(id);
        
        const rectTop = el.getBoundingClientRect().top + scrollY;
        
        if (scrollY + window.innerHeight >= rectTop) {
          console.log(id)
          setCurrentSection(id);
        }
      });
    }

    window.addEventListener("scroll", () => {
      handleNavChange();
      checkCurrentSection();
    });
    mediaQuery.addEventListener("change", handleMediaChange);
    return () => {
      window.removeEventListener("scroll", () => {
        handleNavChange();
        checkCurrentSection();
      });
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, []);

  const handleMenu = () => {
    setOpened(!opened);
  };

  return (
    <div
      className={`fixed z-50 top-0 w-full flex flex-col ${
        opened && "max-lg:h-full"
      }`}
    >
      <div
        ref={navRef}
        className={
          (navBg && "bg-c-blue-2/85 ") +
          "w-full flex p-2 px-4"
        }
      >
        <div className="container  mx-auto flex items-center justify-between">
        {/* Logo */}
        <img className="h-10 mt-2" src="/logo.png" alt="Logo" />

        {/* Desktop Menu */}
        <div className="hidden font-poppins lg:block max-w-full font-medium text-c-gray-5/90 px-4">
          {nvas.map(([name, url], index) => (
            <div
              onClick={() => {
                window.location.hash = "#" + url;
              }}
              key={index}
              className={
                "py-1 mx-4 inline-block relative hover:text-white before:absolute before:left-0 before:bottom-0 before:h-[2.5px] before:bg-c-green-3 before:rounded-r-full before:transition-[width] before:duration-300 before:ease-in-out before:w-0 hover:before:w-6 " +
                (currentSection == url && "text-white before:w-6")
              }
            >
              {name}
            </div>
          ))}
        </div>
</div>
        {/* Mobile Icon */}
        <div
          onClick={handleMenu}
          className={`${
            opened ? "hidden" : "block"
          } lg:hidden icofont-navigation-menu font-icofont text-2xl text-white`}
        ></div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          opened ? "block" : "hidden"
        } absolute flex flex-col top-0 bg-c-blue-6/60 h-full w-full lg:hidden`}
      >
        <div
          onClick={handleMenu}
          className="icofont-close font-icofont items-center text-2xl text-white w-11 pt-3 self-end"
        ></div>

        <div className="bg-white font-extralight font-open-sans text-c-blue-1 overflow-y-auto overflow-x-hidden m-4 mt-3 p-1 rounded-xl flex-1">
          {nvas.map(([name, url], index) => (
            <div
              onClick={() => {
                window.location.hash = "#" + url;
                setOpened(false);
              }}
              key={index}
              className={
                "m-4 hover:text-c-green-2" +
                (currentSection == url && "text-c-green-2")
              }
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
