// Phase1.js
import React, { forwardRef } from "react";

const Phase4 = forwardRef(({ phase4, ph4Text, ph4Cap }, ref) => {
  return (
    <div className="phase phase-3 h-full w-full relative" ref={phase4}>
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
        <div className="flex items-start gap-3 max-w-[750px]">
          <img
            ref={ph4Cap}
            className="w-[30%] h-auto aspect-square opacity-0"
            src="/svgs/cap-3.svg"
          />
          <p
            ref={ph4Text}
            className="text-white leading-[1.13] font-extralight text-[75px]"
          ></p>
        </div>
      </div>
    </div>
  );
});

export default Phase4;
