import Lottie from "lottie-react";
import React, { forwardRef, useEffect, useRef } from "react";

const Phase5 = forwardRef(
  (
    {
      phase5,
      endBack,
      endFore,
      endWindow,
      endWall,
      endReveal,
      endRevealMobile,
      finalText,
      lotties,
      lottieRefs,
    },
    ref
  ) => {
    const { background, foreground, window, wall, reveal, revealMobile } =
      lotties;
    useEffect(() => {}, []);
    return (
      <div
        className="phase phase-5 w-[250%] sm:w-full h-full  relative"
        ref={phase5}
      >
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center"></div>
        <div
          ref={endBack}
          className="absolute top-0 left-0 w-full h-full translate-x-full z-[-1]"
        >
          <Lottie animationData={background.data} />
        </div>
        <div
          ref={endWall}
          className="absolute top-0 left-0 w-full h-full translate-x-full z-[10] shade"
        >
          <Lottie animationData={wall.data} />
        </div>
        <div
          ref={endFore}
          className="absolute top-0 left-0 w-full h-full translate-x-full z-[4] shade"
        >
          <Lottie animationData={foreground.data} />
        </div>
        <div
          ref={endWindow}
          className="absolute top-0 left-0 w-full h-full translate-x-full z-[2] transition-all shade"
        >
          <Lottie animationData={window.data} />
        </div>

        <div
          ref={endReveal}
          className="absolute top-0 left-0 w-full h-full translate-x-full z-[2] opacity-0 sm:opacity-100"
        >
          <p
            ref={finalText}
            className="relative top-1/2 -translate-y-1/2 text-white font-extralight text-[80px] text-center  h-0"
          ></p>
          <Lottie
            lottieRef={lottieRefs?.revealAnim}
            animationData={reveal.data}
          />
        </div>
        <div
          ref={endRevealMobile}
          className="absolute top-0 left-[-30%] w-full h-full translate-x-full z-[3] sm:opacity-0"
        >
          <Lottie
            lottieRef={lottieRefs?.revealMobile}
            animationData={revealMobile.data}
          />
        </div>
      </div>
    );
  }
);

export default Phase5;
