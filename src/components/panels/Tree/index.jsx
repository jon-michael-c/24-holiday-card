import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";

const Tree = (props) => {
  const { background, foreground, gifts, tree, window } = props.data;
  useEffect(() => {
    let leaves =
      document.querySelector("g[clip-path='url(#__lottie_element_1210)']") ??
      document.querySelector("g[clip-path='url(#__lottie_element_314)']");
    if (false) leaves.style.filter = "url(#glow)";
  }, []);
  return (
    <div className="tree h-full relative sm:w-[220%] sm:translate-x-[-51%]">
      <div className="tree__window absolute top-0 left-0 w-full h-full z-[5]">
        <Lottie
          animationData={window.data}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className="tree__chirstmas-tree absolute top-0 left-0 w-full h-full z-[10]">
        <Lottie
          animationData={tree.data}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className="tree__background absolute top-0 left-0 w-full h-full">
        <Lottie
          animationData={background.data}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className="tree__gifts absolute bottom-0 left-0 w-full h-full">
        <Lottie
          animationData={gifts.data}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className="tree__foreground absolute top-0 left-0 w-full h-full">
        <Lottie
          animationData={foreground.data}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </div>
  );
};

export default Tree;
