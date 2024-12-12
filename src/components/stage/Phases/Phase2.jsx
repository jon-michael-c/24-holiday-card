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
      <div
        className="phase phase-2 h-full w-full relative opacity-0"
        ref={phase2}
      >
        <div
          ref={fireBack}
          className="absolute top-0 left-0 w-full h-full translate-x-full"
        >
          <Lottie animationData={background.data} />
        </div>
        <div
          ref={firePlace}
          className="absolute top-0 left-0 w-full h-full translate-x-full origin-[50%_250px]"
        >
          <Lottie animationData={fire.data} />
        </div>
        <div
          ref={fireFloor}
          className="absolute top-0 left-0 w-full h-full translate-x-full"
        >
          <Lottie animationData={floor.data} />
        </div>
        <div
          ref={fireFore}
          className="absolute top-0 left-0 w-full h-full translate-x-full"
        >
          <Lottie animationData={foreground.data} />
        </div>
        <div className="absolute top-0 left-0 ml-[20%] h-[200px] flex items-center gap-2 z-[10]">
          <img
            ref={cap2}
            className="w-[150px] h-auto aspect-square opacity-0"
            src="/svgs/cap-l.svg"
          />
          <p ref={fireText1} className=" text-[100px] text-midnight"></p>
        </div>
        <div className="absolute bottom-0 left-0 pl-[20%] h-[200px] z-[12]">
          <p ref={fireText2} className=" text-midnight text-[100px]"></p>
        </div>
      </div>
    );
  }
);

export default Phase2;
