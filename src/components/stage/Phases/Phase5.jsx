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
      windowMobileRef,
      finalText,
      lotties,
      lottieRefs,
    },
    ref
  ) => {
    const {
      background,
      foreground,
      window,
      wall,
      reveal,
      revealMobile,
      windowMobile,
    } = lotties;

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
          <Lottie
            autoplay={false}
            lottieRef={lottieRefs?.back}
            animationData={background.data}
          />
        </div>
        <div
          ref={endWall}
          className="absolute top-0 left-0 w-[580px] sm:w-full h-full translate-x-full z-[10] shade"
        >
          <Lottie
            autoplay={false}
            lottieRef={lottieRefs?.end}
            animationData={wall.data}
          />
        </div>
        <div
          ref={endFore}
          className="absolute top-[100px] sm:top-0 left-0 sm:w-full h-full translate-x-full z-[4] shade"
        >
          <Lottie
            autoplay={false}
            lottieRef={lottieRefs?.fore}
            animationData={foreground.data}
          />
        </div>
        <div
          ref={endWindow}
          className="absolute top-0 left-0 w-full h-full translate-x-full z-[2] transition-all shade hidden sm:block"
        >
          <Lottie
            autoplay={false}
            lottieRef={lottieRefs?.window}
            animationData={window.data}
          />
        </div>

        <a
          href="https://leibowitzdesign.com"
          ref={endReveal}
          className="absolute top-0 left-0 w-full h-full translate-x-full z-[2] pointer-events-none hidden sm:block"
        >
          <p
            ref={finalText}
            className="relative top-1/2 -translate-y-1/2 text-white font-extralight text-[80px] text-center  h-0"
          ></p>
          <Lottie
            autoplay={false}
            lottieRef={lottieRefs?.revealAnim}
            animationData={reveal.data}
          />
        </a>
        <div
          ref={windowMobileRef}
          className="absolute top-0 left-[-30%] w-full h-full translate-x-full z-[2] sm:hidden"
        >
          <Lottie
            autoplay={false}
            lottieRef={lottieRefs?.windowMobile}
            animationData={windowMobile.data}
          />
        </div>
        <a
          href="https://leibowitzdesign.com"
          ref={endRevealMobile}
          className="absolute top-0 left-[-30%] w-full h-full translate-x-full z-[2] pointer-events-none sm:opacity-0"
        >
          <Lottie
            autoplay={false}
            lottieRef={lottieRefs?.revealMobile}
            animationData={revealMobile.data}
          />
        </a>
      </div>
    );
  }
);

export default Phase5;
