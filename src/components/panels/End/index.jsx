import React, { useState, useEffect, useRef } from "react";
import Lottie from "lottie-react";

const End = (props) => {
  const { background, foreground, wall, window, reveal } = props.data;
  const [play, setPlay] = useState(props.play);
  const revealAnim = useRef(null);
  const backRef = useRef(null);
  const foreRef = useRef(null);
  const wallRef = useRef(null);
  const windowRef = useRef(null);

  useEffect(() => {
    const markers = reveal.data.markers;
    const startMarker = 0;
    const endMarker = 24;

    if (play) {
      backRef.current.play();
      foreRef.current.play();
      wallRef.current.play();
      windowRef.current.play();
      revealAnim.current.playSegments([startMarker, endMarker], true);
    } else {
      backRef.current.pause();
      foreRef.current.pause();
      wallRef.current.pause();
      windowRef.current.pause();
      revealAnim.current.pause();
    }
  }, [play]);
  return (
    <div className="tree h-full relative w-[220%] translate-x-[-27%]">
      <div className="tree__window absolute top-0 left-0 w-full h-full z-[-2]">
        <Lottie
          lottieRef={backRef}
          animationData={background.data}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className="tree__chirstmas-tree absolute top-0 left-0 w-full h-full z-[10]">
        <Lottie
          lottieRef={foreRef}
          animationData={foreground.data}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className="tree__background absolute top-0 left-0 w-full h-full z-[2]">
        <Lottie
          lottieRef={wallRef}
          animationData={wall.data}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className="tree__gifts absolute bottom-0 left-0 w-full h-full">
        <Lottie
          lottieRef={windowRef}
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
