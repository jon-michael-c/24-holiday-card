import React from "react";
import Lottie from "lottie-react";
import LEI from "./lotties/LEI.json";
import BOW from "./lotties/BOW.json";
import ITZ from "./lotties/ITZ.json";

function Logo() {
  return (
    <div className="grid grid-cols-3 w-full h-full">
      <Lottie style={{ width: "100%", height: "100%" }} animationData={LEI} />
      <Lottie animationData={BOW} />
      <Lottie animationData={ITZ} />
    </div>
  );
}

export default Logo;
