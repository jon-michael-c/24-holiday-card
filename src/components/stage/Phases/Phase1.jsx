// Phase1.js
import React, { forwardRef } from "react";

const Phase1 = forwardRef(
  ({ text1, text2, year1, year2, yearLine, dot1, dot2, phase1 }, ref) => {
    return (
      <div className="phase phase-1 h-full w-full relative" ref={phase1}>
        <div className="flex items-center gap-4">
          <div className="w-[120px] h-auto aspect-square">
            <img src="/svgs/cap-1.svg" alt="cap-1" />
          </div>
          <p
            ref={text1}
            className="text-white font-extralight text-[120px]"
          ></p>
        </div>
        <div className="h-[325px] absolute top-[50%] left-1/2 text-white font-bold text-[120px] pl-12">
          <div
            ref={yearLine}
            className="absolute top-[25%] -translate-x-1/2 left-0 h-[0%] w-2 bg-purple"
          ></div>
          <div
            ref={dot1}
            className="absolute top-[25%] left-0 -translate-x-1/2 h-[1px] w-[1px] rounded-full bg-purple opacity-0"
          ></div>
          <div
            ref={dot2}
            className="absolute bottom-[10%] left-0 -translate-x-1/2 h-[1px] w-[1px] rounded-full bg-purple opacity-0"
          ></div>
          <div>
            <p ref={year1}></p>
            <p ref={year2}></p>
          </div>
          <div>
            <p className="font-extralight text-nowrap" ref={text2}></p>
          </div>
        </div>
      </div>
    );
  }
);

export default Phase1;
