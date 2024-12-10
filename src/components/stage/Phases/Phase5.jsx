// Phase1.js
import Lottie from "lottie-react";
import React, { forwardRef } from "react";

const Phase5 = forwardRef(
  ({ phase5, endBack, endFore, endWindow, endWall, lotties }, ref) => {
    const { background, foreground, window, wall } = lotties;
    return (
      <div className="phase phase-5 h-full w-full relative" ref={phase5}>
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
      </div>
    );
  }
);

export default Phase5;
