import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import "./index.scss";

// Register GSAP plugins
gsap.registerPlugin(TextPlugin);

export default function Text1() {
  // Refs for DOM elements
  const containerRef = useRef(null);
  const textLineRef = useRef(null);
  const year1Ref = useRef(null);
  const year2Ref = useRef(null);
  const startButtonRef = useRef(null);
  const squareFrameRef = useRef(null);

  // Timeline for text animations
  const textTimeline = useRef();

  useEffect(() => {
    const container = containerRef.current;
    const textLine = textLineRef.current;
    const year1 = year1Ref.current;
    const year2 = year2Ref.current;
    const startButton = startButtonRef.current;
    const squareFrame = squareFrameRef.current;

    // Initialize the text animation timeline
    textTimeline.current = gsap.timeline({ paused: true, delay: 2 });

    textTimeline.current
      .to(textLine, {
        duration: 1,
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
      startAnim.play();
      gsap.to(container, {
        duration: 1,
        opacity: 1,
        visibility: "visible",
        delay: 1,
      });
      textTimeline.current.play();
    };

    // Add event listener to the start button
    if (startButton) {
      startButton.addEventListener("click", handleStartClick);
    }

    // Cleanup function
    return () => {
      if (startButton) {
        startButton.removeEventListener("click", handleStartClick);
      }
      // Kill all GSAP timelines associated with this component
      textTimeline.current.kill();
      startAnim.kill();
    };
  }, []);

  return (
    <div>
      {/* Start Button */}
      <button id="start-button" ref={startButtonRef} className="start-button">
        Start Animation
      </button>

      {/* Square Frame */}
      <div
        ref={squareFrameRef}
        className="square-frame"
        style={{ visibility: "hidden" }}
      >
        {/* Content inside square frame */}
      </div>

      {/* Animated Text Container */}
      <div
        ref={containerRef}
        className="text1 fixed h-[100vh] w-[100vw] top-0 left-0 text-[80px] text-white opacity-0 invisible flex flex-col justify-center items-center"
      >
        <div className="text-line flex items-center mb-8">
          <span className="bg-green block h-[100px] w-[100px]"></span>
          <span ref={textLineRef} className="text1_line-1 ml-4"></span>
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
