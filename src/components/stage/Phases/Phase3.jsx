// Phase1.js
import React, { forwardRef } from "react";
import Lottie from "lottie-react";

const Phase3 = forwardRef(
  (
    {
      phase3,
      treeBush,
      treeFore,
      treeWindow,
      treeBack,
      treeGifts,
      treeOverlay,
      treeText,
      lotties,
    },
    ref
  ) => {
    const { background, foreground, gifts, window, tree } = lotties;
    return (
      <div
        className="phase-3 w-[240%] left-[-130%] sm:w-full h-full absolute top-0 sm:left-0"
        ref={phase3}
      >
        <div
          ref={treeOverlay}
          className="absolute top-0 left-0 w-full h-full bg-purple z-[3] opacity-0"
        ></div>
        <div className="absolute top-0 left-1/2 sm:left-0 sm:w-[70%] leading-[1.13] h-full z-[5] p-12 sm:p-[6%]">
          <div className="opacity-1">
            <p
              ref={treeText}
              className="dropcap dropcap-3 text-white font-extralight text-[24px] sm:text-[30px] md:text-[40px] lg:text-[50px] xl:text-[65px] sm:text-nowrap"
            ></p>
          </div>
        </div>
        <div
          ref={treeBack}
          className="absolute top-0 left-0 w-full h-full translate-x-full"
        >
          <Lottie animationData={background.data} />
        </div>
        <div
          ref={treeBush}
          id="treeBush"
          className="absolute bottom-[-25%] sm:bottom-[unset] sm:top-0 left-0 w-full h-full translate-x-full z-[4]"
        >
          <Lottie animationData={tree.data} />
        </div>
        <div
          ref={treeWindow}
          className="absolute top-0 left-0 w-full h-full translate-x-full"
        >
          <Lottie animationData={window.data} />
        </div>
        <div
          ref={treeFore}
          className="absolute top-0 left-0 w-full h-full translate-x-full shade"
        >
          <Lottie animationData={foreground.data} />
        </div>
        <div
          ref={treeGifts}
          className="absolute bottom-[-25%] sm:bottom-[unset] sm:top-0 left-0 w-full h-full translate-x-full z-[3]"
        >
          <Lottie animationData={gifts.data} />
        </div>
      </div>
    );
  }
);

export default Phase3;
