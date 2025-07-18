import React from "react";

export default function Starting() {
  return (
    <div id="home" className="bg-[url('/hero-bg.jpg')] bg-cover ">
      <div className="flex justify-center bg-c-blue-5/90 pt-18 ">
        <div className="w-full mt-10 px-8  bg-opacity-88  flex max-lg:flex-col max-lg:items-center max-lg:justify-center lg:flex-row-reverse  container">
          <img
            animation="animate-pop-down"
            src="/hero-img.png"
            alt="Hero image"
            className=" animate-pop-down lg:animate-up-down-loop m-4 h-[59vw] sm:h-85 md:h-115 xl:h-150 "
          />
          <div animation="animate-pop-down" className="m-4 md:mt-5 xl:mt-25 animate-pop-down">
            <div className="font-montserrat font-bold leading-14 text-3xl lg:text-5xl ">
              <div className="inline text-c-gray-5">
                GPS Vehicle Tracking System by
              </div>
              &nbsp;
              <div className="inline text-white border-b-4 border-c-green-3">
                COSMICA TELEMATICS
              </div>
            </div>
            <div className="mt-4 text-c-gray-5/90 font-semibold max-lg:text-xl lg:text-2xl">
              We are specialized in providing Highly Available, Secure GPS
              tracking cloud server. We do provide all kinds of Website
              Design/Development and AWS cloud solution services!
            </div>
            <div className="m-8 flex justify-center-safe gap-2 text-white tracking-wider">
              <div className="bg-c-green-3 rounded-full px-8 py-2">
                Whatsapp
              </div>
              <div className="bg-c-green-3 rounded-full px-8 py-2">
                call {"numm"}
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src="/flow.svg" className="w-full h-12 bg-c-blue-5/90 " />
    </div>
  );
}
