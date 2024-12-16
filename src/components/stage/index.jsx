import React, { useState, useEffect, useRef } from "react";
import useStageAnimation from "./useStageAnim";
import Phase1 from "./Phases/Phase1";
import Phase2 from "./Phases/Phase2";
import Phase3 from "./Phases/Phase3";
import Phase4 from "./Phases/Phase4";
import Phase5 from "./Phases/Phase5";
import ProgressBar from "../progressBar";
import Sound from "../sound";

function Stage(props) {
  const [progress, setProgress] = useState(0);
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

  const revealAnim = useRef(null);
  useStageAnimation(refs, [revealAnim]);

  useEffect(() => {
    const start = 0;
    const end = 24;
    revealAnim.current.playSegments([start, end], true);
  }, []);

  return (
    <>
      <div className="stage fixed top-0 left-0 w-full h-full opacity-0 invisible z-[9999]">
        <Sound />
        <div className="screen h-[100vh]">
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
            lotties={props.lotties[0].fireplace}
          />
          <Phase3
            phase3={(el) => (refs.current.phase3 = el)}
            treeBush={(el) => (refs.current.treeBush = el)}
            treeWindow={(el) => (refs.current.treeWindow = el)}
            treeFore={(el) => (refs.current.treeFore = el)}
            treeBack={(el) => (refs.current.treeBack = el)}
            treeGifts={(el) => (refs.current.treeGifts = el)}
            treeOverlay={(el) => (refs.current.treeOverlay = el)}
            treeText={(el) => (refs.current.treeText = el)}
            lotties={props.lotties[0].christmasTree}
          />
          <Phase4
            phase4={(el) => (refs.current.phase4 = el)}
            ph4Text={(el) => (refs.current.ph4Text = el)}
          />
          <Phase5
            phase5={(el) => (refs.current.phase5 = el)}
            endBack={(el) => (refs.current.endBack = el)}
            endFore={(el) => (refs.current.endFore = el)}
            endWall={(el) => (refs.current.endWall = el)}
            endWindow={(el) => (refs.current.endWindow = el)}
            endReveal={(el) => (refs.current.endReveal = el)}
            finalText={(el) => (refs.current.finalText = el)}
            ref={revealAnim}
            lotties={props.lotties[0].end}
          />
        </div>
      </div>
      <div
        ref={(el) => (refs.current.line = el)}
        className="scroll-line bg-none opacity-0 w-[5px] h-[9500px]"
      ></div>
      <div className="end-buffer h-[5000px]"></div>
      <ProgressBar lotties={props.lotties[0].scroll} />
    </>
  );
}

export default Stage;
