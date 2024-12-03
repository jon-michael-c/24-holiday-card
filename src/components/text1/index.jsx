import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./index.scss";
import { useGSAP } from "@gsap/react";

export default function Text1() {
  const container = useRef();
  const { contextSafe } = useGSAP({ scope: container });

  const text1Anim = contextSafe(() => {
    let anim = gsap.timeline({ paused: true, delay: 2 });

    anim.to(".text1_line-1", {
      duration: 1,
      text: {
        value: "s the year",
      },
      ease: "none",
    });

    anim.to("#year1", {
      duration: 1,
      text: {
        value: "2024",
      },
      ease: "none",
    });

    anim.to("#year2", {
      duration: 1,
      text: {
        value: "2025",
      },
      ease: "none",
    });

    anim.play();
  });
  useEffect(() => {
    let startButton = document.getElementById("start-button");
    let startAnim = gsap.timeline({ paused: true });
    startAnim.to(".square-frame", {
      duration: 1,
      translateX: "-100%",
      visibility: "visible",
    });
    startButton.addEventListener("click", () => {
      startAnim.play();
      gsap.to(".text1", {
        duration: 1,
        opacity: 1,
        visibility: "visible",
        delay: 1,
      });

      text1Anim();
    });
  }, []);

  return (
    <div
      ref={container}
      className="text1 fixed h-[100vh] w-[100vw] top-0 left-0 text-[80px] text-white opacity-0 invisible"
    >
      <div className="text-[80px] font-extralight text-white flex">
        <span className="bg-green block h-[100px] w-[100px]"></span>
        <span className="text1_line-1"></span>
      </div>
      <div className="text-white relative flex flex-col gap-12">
        <div id="yearLine"></div>
        <span id="year1" className="block text-[80px] font-bold"></span>
        <span id="year2" className="block text-[80px] font-bold"></span>
      </div>
      <div className="font-extralight">
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
