import { useEffect } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

/*
 t1.to(".square-frame", {
      duration: 1,
      translateX: "-100%",
      ease: ease,
    });
    t1.to(".text1_line-1", {
      duration: 2,
      text: {
        value: "s the year",
      },
      ease: "none",
    });

*/
export default function Start() {
  useEffect(() => {}, []);
  return (
    <div className="square-frame">
      <div className="content">
        <div className="content-inner h-full w-full flex flex-col gap-8 justify-center items-center">
          <div className="flex gap-8">
            <div className="square-items">
              <img src="/tiles/tile_1.png" />
            </div>
            <div className="square-items">
              <img src="/tiles/tile_2.png" />
            </div>
            <div className="square-items">
              <img src="/tiles/tile_3.png" />
            </div>
          </div>
          <div className="flex justify-center items-center w-full">
            <button
              id="start-button"
              className="border-2 border-purple text-white px-4 py-2 cursor-pointer"
            >
              Click to Start
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
