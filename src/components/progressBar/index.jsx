import Lottie from "lottie-react";
import React from "react";

const ProgressBar = (props) => {
  const { lotties } = props;

  return (
    <>
      <div className="scroll-anim fixed top-0 right-1/2 translate-x-1/2 sm:translate-x-0 sm:right-0 w-[200px] h-full flex justify-center transition-opacity z-[9999]">
        <Lottie
          className="mb-auto sm:mt-auto"
          animationData={lotties.scroll.data}
        />
      </div>
      <div className="progress-bar fixed bottom-0 left-1/2 -translate-x-1/2 h-[10px] w-[95%] rounded-md -translate-y-1/2 bg-purple ">
        <div className="progress-bar__fill absolute top-0 left-0 h-full rounded-md bg-red"></div>
      </div>
    </>
  );
};

export default ProgressBar;
