import React from "react";
import Lottie from "lottie-react";
import LEI from "./lotties/LEI.json";
import BOW from "./lotties/BOW.json";
import ITZ from "./lotties/ITZ.json";

function Logo() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center relative">
      <Lottie style={{ width: "auto", height: "auto" }} animationData={LEI} />
      <Lottie style={{ width: "auto", height: "auto" }} animationData={BOW} />
      <Lottie style={{ width: "auto", height: "auto" }} animationData={ITZ} />
    </div>
  );
}

export default Logo;
