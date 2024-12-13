import React from "react";
import Lottie from "lottie-react";
import LEI from "./lotties/LEI.json";
import BOW from "./lotties/BOW.json";
import ITZ from "./lotties/ITZ.json";

function Logo() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center relative">
      <Lottie style={{ width: "auto", height: "200px" }} animationData={LEI} />
      <Lottie style={{ width: "auto", height: "200px" }} animationData={BOW} />
      <Lottie style={{ width: "auto", height: "200px" }} animationData={ITZ} />
    </div>
  );
}

export default Logo;
