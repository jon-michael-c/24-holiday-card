import React from "react";

const ProgressBar = () => {
  return (
    <div className="progress-bar fixed top-1/2 right-6 h-[50%] w-[10px] -translate-y-1/2 bg-purple rounded-md border-[1px] border-green border-solid overflow-hidden">
      <div className="progress-bar__fill absolute top-0 left-0 w-[10px] rounded-md bg-red"></div>
    </div>
  );
};

export default ProgressBar;
