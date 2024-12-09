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
      x: "-100%",
      ease: "expo",
      onComplete: () => {
        setStart(true);
        document.querySelector("#music").play();
      },
    });
  });

  useEffect(() => {}, [start]);

  return (
    <>
      <div className="square-frame" ref={square}>
        <div className="content">
          <div className="content-inner h-full w-full flex flex-col gap-8 justify-center items-center">
            <div className="items relative scale-[4.2] top-[1181px] flex justify-center gap-8 w-[80%] h-auto mx-auto">
              <div className="square-items aspect-[0.7]">
                <Fireplace data={lotties[0].fireplace} />
              </div>
              <div className="square-items  aspect-[0.7]">
                <Tree data={lotties[0].christmasTree} />
              </div>
              <div className="square-items  aspect-[0.7]">
                <End data={lotties[0].end} />
              </div>
            </div>
            <div className="flex justify-center items-center w-full">
              <button
                onClick={startAnim}
                id="start-button"
                className="border-2 border-purple text-white px-4 py-2 cursor-pointer opacity-0 uppercase text-2xl"
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
