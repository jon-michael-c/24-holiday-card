// Phase1.js
import React, { forwardRef } from "react";

const Phase1 = forwardRef(
  ({ text1, text2, year1, year2, yearLine, dot1, dot2, phase1 }, ref) => {
    return (
      <div
        className="phase phase-1 h-full w-full relative flex flex-col justify-between max-h-[800px]"
        ref={phase1}
      >
        <div className="flex items-center gap-4 mt-[7rem] sm:mt-8 max-h-[800px]">
          <p
            ref={text1}
            className="dropcap dropcap-1 text-white font-extralight text-[50px] sm:text-[85px]"
          >
            A
          </p>
        </div>
        <div className="ml-16 sm:ml-[50%] h-[150px] sm:h-[220px] text-white font-bold text-[50px] sm:text-[85px] pl-12 relative">
          <div
            ref={yearLine}
            className="absolute top-[25%] -translate-x-1/2 left-0 h-[0%] w-1 sm:w-2 bg-purple"
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
        </div>
        <div className="ml-8 sm:ml-[65%] h-[250px]">
          <p
            className="font-extralight sm:text-nowrap text-white text-[50px] sm:text-[85px]"
            ref={text2}
          ></p>
        </div>
      </div>
    );
  }
);

export default Phase1;
