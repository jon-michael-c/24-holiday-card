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
      finalText,
      lotties,
    },
    ref
  ) => {
    const { background, foreground, window, wall, reveal } = lotties;
    useEffect(() => {}, []);
    return (
      <div className="phase phase-5 h-full w-full relative" ref={phase5}>
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
          <p
            ref={finalText}
            className="text-white font-extralight text-[80px] text-center mb-[25%]"
          ></p>
        </div>
        <div
          ref={endBack}
          className="absolute top-0 left-0 w-full h-full translate-x-full"
        >
          <Lottie animationData={background.data} />
        </div>
        <div
          ref={endWall}
          className="absolute top-0 left-0 w-full h-full translate-x-full"
        >
          <Lottie animationData={wall.data} />
        </div>
        <div
          ref={endFore}
          className="absolute top-0 left-0 w-full h-full translate-x-full"
        >
          <Lottie animationData={foreground.data} />
        </div>
        <div
          ref={endWindow}
          className="absolute top-0 left-0 w-full h-full translate-x-full"
        >
          <Lottie animationData={window.data} />
        </div>
        <div
          ref={endReveal}
          className="absolute top-0 left-0 w-full h-full translate-x-full"
        >
          <Lottie lottieRef={ref} animationData={reveal.data} />
        </div>
      </div>
    );
  }
);

export default Phase5;
