import React, { useEffect, useRef } from 'react';


function animateCount(el, target, duration = 4000) {
    let current = 0;
    const stepTime = 20;
    const step = Math.ceil(target / (duration / stepTime));
    const interval = setInterval(() => {
      if ((current += step) >= target) {
        current = target;
        clearInterval(interval);
      }
      el.textContent = current;
    });
  }

export default function Iteam9({  data }) {
    if (!data) return <></>;
    
    const containerRef = useRef(null);
    const numberRef = useRef(null);
  
    useEffect(() => {
      const el = containerRef.current;
  
      const onTransitionEnd = () => {
          const target = parseInt(heading, 10);
          animateCount(numberRef.current, target);
      };
  
      el.addEventListener('animationstart', onTransitionEnd);
      return () => {
        el.removeEventListener('animationstart', onTransitionEnd);
      };
    },[containerRef]);


    const { icon, heading, para} = data;
    return (
        <div   ref={containerRef} animation="animate-slide-up" className=" relative flex flex-col justify-center">
 
                {
                    icon && <div className="flex relative justify-center font-normal h-6">

                        <i className={icon + " w-12 h-12 leading-12 text-center text-white text-2xl"}></i>
                    </div>
                }


            {
                heading && <div  ref={numberRef} className="pt-[30px] text-center  font-semibold text-[#010483] text-[36px] leading-[54px] bg-white font-open-sans">
                   
                        {heading}
                  
                </div>
            }
            {
                para && <p className="font-normal pb-[25px] bg-white text-[#444444] text-[14px]  leading-[21px] text-center font-montserrat ">
                    {para}
                </p>
            }

        </div>
    );
}
