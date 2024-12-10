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
      treeCap,
      lotties,
    },
    ref
  ) => {
    const { background, foreground, gifts, window, tree } = lotties;
    return (
      <div className="phase phase-3 h-full w-full relative" ref={phase3}>
        <div
          ref={treeOverlay}
          className="absolute top-0 left-0 w-full h-full bg-purple z-[3] opacity-0"
        ></div>
        <div className="absolute top-0 left-0 w-[70%] leading-[1.13] h-full z-[5] p-[6%]">
          <div ref={treeCap} className="flex items-start gap-4 opacity-0">
            <img
              src="/svgs/cap-w.svg"
              className="w-[200px] h-auto aspect-square"
            />
            <p
              ref={treeText}
              className="text-white font-extralight text-[75px]"
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
          className="absolute top-0 left-0 w-full h-full translate-x-full z-[4]"
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
          className="absolute top-0 left-0 w-full h-full translate-x-full"
        >
          <Lottie animationData={foreground.data} />
        </div>
        <div
          ref={treeGifts}
          className="absolute top-0 left-0 w-full h-full translate-x-full z-[4]"
        >
          <Lottie animationData={gifts.data} />
        </div>
      </div>
    );
  }
);

export default Phase3;
