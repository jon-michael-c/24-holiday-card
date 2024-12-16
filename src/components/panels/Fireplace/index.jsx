import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";

const Fireplace = (props) => {
  const { background, foreground, fire, floor } = props.data;
  useEffect(() => {}, []);
  return (
    <div className="tree h-full relative sm:w-[220%] sm:translate-x-[-27%]">
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
          animationData={fire.data}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className="tree__gifts absolute bottom-0 left-0 w-full h-full">
        <Lottie
          animationData={floor.data}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </div>
  );
};

export default Fireplace;
