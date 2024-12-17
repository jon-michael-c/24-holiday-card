// Phase1.js
import React, { forwardRef } from "react";

const Phase4 = forwardRef(({ phase4, ph4Text }, ref) => {
  return (
    <div className="phase phase-4 h-full w-full relative" ref={phase4}>
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
        <div className="flex items-start h-[300px] max-w-[750px]">
          <p
            ref={ph4Text}
            className="dropcap dropcap-4 text-white h-[300px] w-full leading-[1.13] font-extralight text-[32px] sm:text-[75px]"
          ></p>
        </div>
      </div>
    </div>
  );
});

export default Phase4;
