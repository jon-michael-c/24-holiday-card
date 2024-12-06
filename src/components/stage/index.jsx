import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/all";
function Stage() {
  const line = useRef(null);
  const text1 = useRef(null);
  const { contextSafe } = useGSAP();
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(TextPlugin);

  useEffect(() => {
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
        value: "Hello World",
      },
      ease: "none",
    });
  }, []);
  return (
    <>
      <div className="stage fixed top-0 left-0 w-full h-full opacity-0 invisible">
        <div className="screen">
          <h1 ref={text1} className="text-white text-[70px]"></h1>
        </div>
      </div>
      <div ref={line} className="scroll-line bg-red w-[5px] h-[1000px]"></div>
      <div className="end-buffer h-[1000px]"></div>
    </>
  );
}

export default Stage;
