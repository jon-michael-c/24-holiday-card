import { useEffect, useState, useRef } from "react";
import Fireplace from "../panels/Fireplace";
import Tree from "../panels/Tree";
import End from "../panels/End";
import Stage from "../stage";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function Start(props) {
  const { lotties } = props;
  const square = useRef(null);
  const { contextSafe } = useGSAP();
  const [start, setStart] = useState(false);
  const startAnim = contextSafe(() => {
    const tl = gsap.timeline();
    tl.to(square.current, {
      duration: 1,
      x: "-150%",
      ease: "expo",
      onComplete: () => {
        setStart(true);
        document.querySelector("#music").play();
        let squareFrame = document.querySelector(".square-frame > .content");
        squareFrame.style.display = "none";
      },
    });
  });

  useEffect(() => {}, [start]);

  return (
    <>
      <div className="square-frame" ref={square}>
        <div className="content">
          <div className="content-inner h-full w-full flex flex-col gap-6 justify-center items-center">
            <div className="title text-center opacity-0">
              <img
                src="/svgs/logo.svg"
                alt="logo"
                className="w-[90%] h-auto mx-auto max-w-[550px] mb-4"
              />
              <h1 className="text-4xl text-white">Holiday Card 2024</h1>
            </div>
            <div className="items relative scale-[4.2] [@media(min-height:800px)]:top-[25%] origin-[51%_100px] top-[50%]  flex flex-col sm:flex-row justify-center gap-8 w-[80%] h-[60%] mx-auto max-w-[840px] max-h-[420px]">
              <div className="square-items sm:aspect-[0.65]">
                {lotties[0].fireplace && (
                  <Fireplace data={lotties[0].fireplace} />
                )}
              </div>
              <div className="square-items  sm:aspect-[0.65]">
                {lotties[0].christmasTree && (
                  <Tree data={lotties[0].christmasTree} />
                )}
              </div>
              <div className="square-items  sm:aspect-[0.65]">
                {lotties[0].end && <End data={lotties[0].end} />}
              </div>
            </div>
            <div className="flex justify-center items-center w-full">
              <button
                onClick={startAnim}
                id="start-button"
                className="border-2 border-purple text-white px-8 py-2 leading-[1]  cursor-pointer opacity-0 align-middle text-2xl rounded-full hover:bg-purple transition-all"
              >
                Click to Start
              </button>
            </div>
          </div>
        </div>
      </div>
      {start && <Stage lotties={lotties} />}
    </>
  );
}
