import React from "react";

function Stage() {
  return (
    <div className="stage fixed w-full h-full opacity-0 invisible">
      <div className="screen fixed top-0 left-0 w-[100vw] h-[100vh] overflow-hidden">
        <h1 className="text-[70px]">Screen</h1>
      </div>
      <div className="scroll-line w-[5px] h-[1000px] opacity-0"></div>
    </div>
  );
}

export default Stage;
