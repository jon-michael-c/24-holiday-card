// Phase1.js
import React, { forwardRef } from "react";
import Lottie from "lottie-react";

const Phase3 = forwardRef(
  ({ phase3, treeBush, treeFore, treeWindow, treeBack, lotties }, ref) => {
    const { background, foreground, window, tree } = lotties;
    return (
      <div className="phase-3 h-full w-full relative" ref={phase3}>
        <div
          ref={treeBack}
          className="absolute top-0 left-0 w-full h-full translate-x-full"
        >
          <Lottie animationData={background.data} />
        </div>
        <div
          ref={treeBush}
          className="absolute top-0 left-0 w-full h-full translate-x-full"
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
      </div>
    );
  }
);

export default Phase3;
