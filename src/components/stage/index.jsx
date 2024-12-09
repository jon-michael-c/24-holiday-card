import React, { useRef } from "react";
import useStageAnimation from "./useStageAnim";

function Stage() {
  const refs = useRef({
    line: null,
    text1: null,
    text2: null,
    phase1: null,
    year1: null,
    year2: null,
    yearLine: null,
    dot1: null,
    dot2: null,
  });

  useStageAnimation(refs);

  return (
    <>
      <div className="stage fixed top-0 left-0 w-full h-full opacity-0 invisible">
        <div className="screen">
          <div
            className="phase-1 h-full w-full relative"
            ref={(el) => (refs.current.phase1 = el)}
          >
            <p
              ref={(el) => (refs.current.text1 = el)}
              className="text-white font-extralight text-[120px]"
            ></p>
            <div className="h-[325px] absolute top-[50%] left-1/2 text-white font-bold text-[120px] pl-12">
              <div
                ref={(el) => (refs.current.yearLine = el)}
                className="absolute top-[25%] -translate-x-1/2 left-0 h-[0%] w-2 bg-purple"
              ></div>
              <div
                ref={(el) => (refs.current.dot1 = el)}
                className="absolute top-[25%] left-0 -translate-x-1/2 h-[1px] w-[1px] rounded-full bg-purple opacity-0"
              ></div>
              <div
                ref={(el) => (refs.current.dot2 = el)}
                className="absolute bottom-[10%] left-0 -translate-x-1/2 h-[1px] w-[1px] rounded-full bg-purple opacity-0"
              ></div>
              <div>
                <p ref={(el) => (refs.current.year1 = el)}></p>
                <p ref={(el) => (refs.current.year2 = el)}></p>
              </div>
              <div>
                <p
                  className="font-extralight text-nowrap"
                  ref={(el) => (refs.current.text2 = el)}
                ></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        ref={(el) => (refs.current.line = el)}
        className="scroll-line bg-red w-[5px] h-[5000px]"
      ></div>
      <div className="end-buffer h-[4000px]"></div>
    </>
  );
}

export default Stage;
