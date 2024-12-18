// Phase2.js
import React, { forwardRef, useRef } from "react";
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
    },
    ref
  ) => {
    const { background, fire, floor, foreground } = lotties;
    const backLot = useRef(null);
    const fireLot = useRef(null);
    const floorLot = useRef(null);
    const foreLot = useRef(null);
    useEffect(() => {
      return () => {
        backLot.current.destroy();
        fireLot.current.destroy();
        floorLot.current.destroy();
        foreLot.current.destroy();
      };
    }, []);
    return (
      <div
        className="phase-2 w-[250%] left-[-75%] sm:left-[unset] h-full sm:w-full relative opacity-0"
        ref={phase2}
      >
        <div
          ref={fireBack}
          className="absolute top-0 left-0 w-full h-full translate-x-full"
        >
          <Lottie lottieRef={backLot} animationData={background.data} />
        </div>
        <div
          ref={firePlace}
          className="absolute top-1/2 left-1/2 w-full h-full translate-x-full -translate-y-1/2  z-[10] shade origin-[50%_130px] sm:origin-[50%_250px]"
        >
          <Lottie lottieRef={fireLot} animationData={fire.data} />
        </div>
        <div
          ref={fireFloor}
          className="absolute top-0 left-0 w-full h-full translate-x-full shaded"
        >
          <Lottie lottieRef={floorLot} animationData={floor.data} />
        </div>
        <div
          ref={fireFore}
          className="absolute top-0 left-0 w-full h-full translate-x-full shaded"
        >
          <Lottie lottieRef={foreLot} animationData={foreground.data} />
        </div>
        <div className="fixed top-0 left-0 text-center justify-center w-full flex flex-col items-center gap-2 z-[11] mt-16 sm:mt-8 ml-[-10px] sm:ml-0  ">
          <p
            ref={fireText1}
            className=" sm:text-nowrap dropcap dropcap-2 text-[30px] sm:text-[80px] text-midnight w-[250px] sm:w-fit"
          ></p>
          <p
            ref={fireText2}
            className="-mt-8 sm:text-nowrap text-[30px] sm:text-[80px] text-midnight"
          ></p>
        </div>
      </div>
    );
  }
);

export default Phase2;
