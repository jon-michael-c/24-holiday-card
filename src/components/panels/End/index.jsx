import React, { useState, useEffect, useRef } from "react";
import Lottie from "lottie-react";

const End = (props) => {
  const { background, foreground, wall, window, reveal } = props.data;
  const revealAnim = useRef(null);

  useEffect(() => {
    const markers = reveal.data.markers;
    console.log(markers);
    const startMarker = 0;
    const endMarker = 24;

    console.log(startMarker, endMarker);
    revealAnim.current.playSegments([startMarker, endMarker], true);
  }, []);
  return (
    <div className="tree h-full relative w-[220%] translate-x-[-27%]">
      <div className="tree__window absolute top-0 left-0 w-full h-full z-[-2]">
        <Lottie
          animationData={background.data}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className="tree__chirstmas-tree absolute top-0 left-0 w-full h-full z-[10]">
        <Lottie
          animationData={foreground.data}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className="tree__background absolute top-0 left-0 w-full h-full z-[2]">
        <Lottie
          animationData={wall.data}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className="tree__gifts absolute bottom-0 left-0 w-full h-full">
        <Lottie
          animationData={window.data}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className="tree__gifts absolute bottom-0 left-0 w-full h-full">
        <Lottie
          lottieRef={revealAnim}
          animationData={reveal.data}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </div>
  );
};

export default End;
