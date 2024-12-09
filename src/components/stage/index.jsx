import React, { useRef } from "react";
import useStageAnimation from "./useStageAnim";
import Phase1 from "./Phases/Phase1";
import Phase2 from "./Phases/Phase2";
import Phase3 from "./Phases/Phase3";

function Stage(props) {
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
        <div className="screen h-0">
          <Phase1
            phase1={(el) => (refs.current.phase1 = el)}
            text1={(el) => (refs.current.text1 = el)}
            year1={(el) => (refs.current.year1 = el)}
            year2={(el) => (refs.current.year2 = el)}
            yearLine={(el) => (refs.current.yearLine = el)}
            dot1={(el) => (refs.current.dot1 = el)}
            dot2={(el) => (refs.current.dot2 = el)}
            text2={(el) => (refs.current.text2 = el)}
          />
          <Phase2
            phase2={(el) => (refs.current.phase2 = el)}
            fireBack={(el) => (refs.current.fireBack = el)}
            firePlace={(el) => (refs.current.firePlace = el)}
            fireFloor={(el) => (refs.current.fireFloor = el)}
            fireFore={(el) => (refs.current.fireFore = el)}
            fireText1={(el) => (refs.current.fireText1 = el)}
            fireText2={(el) => (refs.current.fireText2 = el)}
            cap2={(el) => (refs.current.cap2 = el)}
            lotties={props.lotties[0].fireplace}
          />
          <Phase3
            phase3={(el) => (refs.current.phase3 = el)}
            treeBush={(el) => (refs.current.treeBush = el)}
            treeWindow={(el) => (refs.current.treeWindow = el)}
            treeFore={(el) => (refs.current.treeFore = el)}
            treeBack={(el) => (refs.current.treeBack = el)}
            lotties={props.lotties[0].christmasTree}
          />
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
