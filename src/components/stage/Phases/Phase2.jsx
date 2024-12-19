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
      firelottieRefs,
      lotties,
    },
    ref
  ) => {
    const { background, fire, floor, foreground } = lotties;
    return (
      <div
        className="phase-2 w-[250%] left-[-75%] sm:left-[unset] h-full sm:w-full relative opacity-0"
        ref={phase2}
      >
        <div
          ref={fireBack}
          className="absolute top-0 left-0 w-full h-full translate-x-full"
        >
          <Lottie
            autoplay={false}
            lottieRef={firelottieRefs?.back}
            animationData={background.data}
          />
        </div>
        <div
          ref={firePlace}
          className="absolute top-1/2 left-1/2 w-full h-full translate-x-full -translate-y-1/2  z-[10] shade origin-[50%_130px] sm:origin-[50%_250px]"
        >
          <Lottie
            autoplay={false}
            lottieRef={firelottieRefs?.fire}
            animationData={fire.data}
          />
        </div>
        <div
          ref={fireFloor}
          className="absolute top-0 left-0 w-full h-full translate-x-full shaded"
        >
          <Lottie
            autoplay={false}
            lottieRef={firelottieRefs?.floor}
            animationData={floor.data}
          />
        </div>
        <div
          ref={fireFore}
          className="absolute top-0 left-0 w-full h-full translate-x-full shaded"
        >
          <Lottie
            autoplay={false}
            lottieRef={firelottieRefs?.fore}
            animationData={foreground.data}
          />
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
