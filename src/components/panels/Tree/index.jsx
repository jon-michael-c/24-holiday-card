import React, { useState, useEffect, useRef } from "react";
import Lottie from "lottie-react";

const Tree = (props) => {
  const { background, foreground, gifts, tree, window } = props.data;
  const [play, setPlay] = useState(props.play);
  const backRef = useRef(null);
  const foreRef = useRef(null);
  const giftsRef = useRef(null);
  const treeRef = useRef(null);
  const windowRef = useRef(null);
  useEffect(() => {
    if (play) {
      backRef.current.play();
      foreRef.current.play();
      giftsRef.current.play();
      treeRef.current.play();
      windowRef.current.play();
    } else {
      backRef.current.pause();
      foreRef.current.pause();
      giftsRef.current.pause();
      treeRef.current.pause();
      windowRef.current.pause();
    }
    return () => {
      backRef.current.destroy();
      foreRef.current.destroy();
      giftsRef.current.destroy();
      treeRef.current.destroy();
      windowRef.current.destroy();
    };
  }, []);
  return (
    <div className="tree h-full relative sm:w-[220%] sm:translate-x-[-51%]">
      <div className="tree__window absolute top-0 left-0 w-full h-full z-[5]">
        <Lottie
          lottieRef={windowRef}
          animationData={window.data}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className="tree__chirstmas-tree absolute top-0 left-0 w-full h-full z-[10]">
        <Lottie
          lottieRef={treeRef}
          animationData={tree.data}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className="tree__background absolute top-0 left-0 w-full h-full">
        <Lottie
          lottieRef={backRef}
          animationData={background.data}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className="tree__gifts absolute bottom-0 left-0 w-full h-full">
        <Lottie
          lottieRef={giftsRef}
          animationData={gifts.data}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className="tree__foreground absolute top-0 left-0 w-full h-full">
        <Lottie
          lottieRef={foreRef}
          animationData={foreground.data}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </div>
  );
};

export default Tree;
