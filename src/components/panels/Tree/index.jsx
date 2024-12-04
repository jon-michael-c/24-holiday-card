import React from "react";
import Lottie from "lottie-react";
import TreeData from "./lottie/Tree.json";
import Background from "./lottie/background.json";
import Foreground from "./lottie/foreground.json";
import Window from "./lottie/window.json";
import Gifts from "./lottie/gifts.json";

const Tree = () => {
  return (
    <div className="tree h-full relative w-[220%] translate-x-[-51%]">
      <div className="tree__window absolute top-0 left-0 w-full h-full z-[5]">
        <Lottie
          animationData={Window}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className="tree__chirstmas-tree absolute top-0 left-0 w-full h-full z-[10]">
        <Lottie
          animationData={TreeData}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className="tree__background absolute top-0 left-0 w-full h-full">
        <Lottie
          animationData={Background}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className="tree__gifts absolute bottom-0 left-0 w-full h-full">
        <Lottie
          animationData={Gifts}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className="tree__foreground absolute top-0 left-0 w-full h-full">
        <Lottie
          animationData={Foreground}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </div>
  );
};

export default Tree;
