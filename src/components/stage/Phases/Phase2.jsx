// Phase2.js
import React, { forwardRef } from "react";
import { useEffect } from "react";
import Lottie from "lottie-react";

const Phase2 = forwardRef(
  (
    { phase2, fireBack, firePlace, fireFloor, fireFore, fireText1, lotties },
    ref
  ) => {
    const { background, fire, floor, foreground } = lotties;
    useEffect(() => {
      console.log(lotties);
    }, []);
    return (
      <div className="phase-2 h-full w-full relative opacity-0" ref={phase2}>
        <div
          ref={fireBack}
          className="absolute top-0 left-0 w-full h-full translate-x-full"
        >
          <Lottie animationData={background.data} />
        </div>
        <div
          ref={firePlace}
          className="absolute top-0 left-0 w-full h-full translate-x-full"
        >
          <Lottie animationData={fire.data} />
        </div>
        <div
          ref={fireFloor}
          className="absolute top-0 left-0 w-full h-full translate-x-full shaded"
        >
          <Lottie animationData={floor.data} />
        </div>
        <div
          ref={fireFore}
          className="absolute top-0 left-0 w-full h-full translate-x-full shaded"
        >
          <Lottie animationData={foreground.data} />
        </div>
        <div className="fixed top-0 left-0 text-center justify-center w-full flex items-center gap-2">
          <p
            ref={fireText1}
            className="text-nowrap dropcap dropcap-2 text-[100px] text-midnight"
          ></p>
        </div>
      </div>
    );
  }
);

export default Phase2;
