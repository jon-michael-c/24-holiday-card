// Phase2.js
import React, { forwardRef } from "react";
import { useEffect } from "react";
import Lottie from "lottie-react";

const Phase2 = forwardRef(
  (
    {
      phase2,
      fireBack,
      firePlace,
      fireFloor,
      fireFore,
      fireText1,
      fireText2,
      lotties,
      cap2,
    },
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
        <div className="fixed top-0 left-[30%] flex items-center gap-2">
          <img
            ref={cap2}
            className="w-[100px] h-auto aspect-square opacity-0"
            src="/svgs/cap-l.svg"
          />
          <p ref={fireText1} className=" text-[100px] text-midnight"></p>
        </div>
        <p
          ref={fireText2}
          className="fixed bottom-0 left-0 text-midnight text-[100px]"
        ></p>
      </div>
    );
  }
);

export default Phase2;
