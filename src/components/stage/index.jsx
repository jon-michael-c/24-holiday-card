import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/all";
function Stage() {
  const line = useRef(null);
  const text1 = useRef(null);
  const phase1 = useRef(null);
  const year1 = useRef(null);
  const year2 = useRef(null);
  const { contextSafe } = useGSAP();
  gsap.registerPlugin(useGSAP);

  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(TextPlugin);

  useGSAP(() => {
    document.querySelector(".loading").classList.add("hidden");
    document.querySelector("#root").classList.add("ready");
    gsap.to(".stage", {
      duration: 1,
      opacity: 1,
      visibility: "visible",
      ease: "expo",
    });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: line.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
        markers: true,
      },
    });
    tl.to(text1.current, {
      duration: 1,
      text: {
        value: "s the year",
      },
      ease: "none",
    });
    tl.to(year1.current, {
      duration: 1,
      text: {
        value: "2024",
      },
      ease: "none",
    });
    tl.to(phase1.current, {
      duration: 1,
      x: "-25%",
      ease: "expo",
    });
  });

  return (
    <>
      <div className="stage fixed top-0 left-0 w-full h-full opacity-0 invisible">
        <div className="screen">
          <div className="phase-1 h-full w-full relative" ref={phase1}>
            <p
              ref={text1}
              className="text-white font-extralight text-[120px]"
            ></p>
            <div className="absolute top-[50%] left-1/2 text-white font-bold text-[120px]">
              <p ref={year1}></p>
              <p ref={year2}></p>
            </div>
          </div>
        </div>
      </div>
      <div ref={line} className="scroll-line bg-red w-[5px] h-[1000px]"></div>
      <div className="end-buffer h-[4000px]"></div>
    </>
  );
}

export default Stage;
