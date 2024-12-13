import Lottie from "lottie-react";
import React from "react";

const ProgressBar = (props) => {
  const { lotties } = props;

  return (
    <div className="progress-bar fixed top-1/2 right-6 h-[50%] w-[10px] -translate-y-1/2 bg-purple rounded-md border-[1px] border-sky border-opacity-65 border-solid">
      <div className="scroll-anim absolute top-0  left-[-200px] w-[200px] h-full flex justify-center transition-opacity">
        <Lottie className="my-auto" animationData={lotties.scroll.data} />
      </div>
      <div className="progress-bar__fill absolute top-0 left-0 w-full rounded-md bg-red"></div>
    </div>
  );
};

export default ProgressBar;
