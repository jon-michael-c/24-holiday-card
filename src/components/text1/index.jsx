import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./index.scss";

// Register GSAP plugins
gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);

export default function Text1() {
  // Refs for DOM elements
  const containerRef = useRef(null);
  const textLineRef = useRef(null);
  const year1Ref = useRef(null);
  const year2Ref = useRef(null);
  const startButtonRef = useRef(null);
  const squareFrameRef = useRef(null);
  const container = useRef(null);

  // Timeline for text animations

  useEffect(() => {
    const container = containerRef.current;
    const textLine = textLineRef.current;
    const year1 = year1Ref.current;
    const year2 = year2Ref.current;
    const startButton = document.getElementById("start-button");
    const squareFrame = squareFrameRef.current;
    // Initialize the timeline
    const textTimeline = gsap.timeline({
      defaults: { ease: "none" },
      scrollTrigger: {
        trigger: ".scroll-container",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        snap: 1 / 2, // Number of animation steps
        pin: true,
        anticipatePin: 1,
        markers: false, // Set to true for debugging
      },
    });

    textTimeline
      .to(textLine, {
        duration: 0.35,
        text: {
          value: "s the year",
        },
        ease: "none",
      })
      .to(year1, {
        duration: 1,
        text: {
          value: "2024",
        },
        ease: "none",
      })
      .to(year2, {
        duration: 1,
        text: {
          value: "2025",
        },
        ease: "none",
      });

    // Initialize the start button animation timeline
    const startAnim = gsap.timeline({ paused: true });

    startAnim.to(squareFrame, {
      duration: 1,
      x: "-100%", // Use GSAP's `x` for translateX
      visibility: "visible",
    });

    // Click event handler
    const handleStartClick = () => {
      gsap.to(".square-frame", {
        duration: 1,
        x: "-100%",
      });
      startAnim.play();
      gsap.to(container, {
        duration: 1,
        opacity: 1,
        visibility: "visible",
        delay: 1,
      });
    };

    // Add event listener to the start button
    if (startButton) {
      startButton.addEventListener("click", handleStartClick);
    }

    // Cleanup function
  }, []);

  return (
    <div className="relative h-[150vh] scroll-container" ref={container}>
      {/* Square Frame */}
      <div
        ref={squareFrameRef}
        className="square-frame"
        style={{ visibility: "hidden" }}
      ></div>

      <div
        ref={containerRef}
        className="text1 fixed h-[100vh] w-[100vw] top-0 left-0 text-[10vw] text-white opacity-0 invisible flex flex-col justify-between items-start p-[5%]"
      >
        <div className="section text-line flex items-center mb-8">
          <span className="bg-green block h-[10vw] w-[10vw]"></span>
          <span
            ref={textLineRef}
            className="text1_line-1 ml-4 font-extralight"
          ></span>
        </div>
        <div className="years text-white flex flex-col items-center gap-4">
          <span ref={year1Ref} className="block text-[80px] font-bold"></span>
          <span ref={year2Ref} className="block text-[80px] font-bold"></span>
        </div>
        {/* Additional content if needed */}
      </div>
    </div>
  );
}
