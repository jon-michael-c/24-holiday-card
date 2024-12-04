import { useEffect, useRef, useState } from "react";
import "./styles/index.scss";
import Lottie from "lottie-react";
import LEI from "./assets/LEI.json";
import BOW from "./assets/BOW.json";
import ITZ from "./assets/ITZ.json";
import gsap from "gsap";
import Start from "./components/start";
import Text1 from "./components/text1";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(TextPlugin);

function App() {
  const [loading, setLoading] = useState(0.0);
  const { contextSafe } = useGSAP();
  const loadingElm = useRef(null);
  const loadingText = useRef(null);

  const introAnim = contextSafe(() => {
    let ease = "power4.out";
    let t1 = gsap.timeline();

    t1.to(loadingText, {
      duration: 1,
      opacity: 0,
      ease: "none",
    });
    t1.from(loadingElm, {
      duration: 1,
      scale: 1,
      ease: ease,
    });
    t1.to(loadingElm, {
      duration: 1,
      scale: 0.8,
      ease: ease,
    });
    t1.to(loadingElm.current, {
      duration: 1,
      translateX: "-100%",
      ease: ease,
    });

    t1.to(".square-frame", {
      duration: 0.65,
      width: "25%",
      ease: ease,
    });

    t1.to(".square-frame", {
      duration: 3,
      width: "150%",
      ease: ease,
      delay: 0.5,
    });
    t1.to(
      ".items",
      {
        duration: 1,
        top: "0px",
        scale: 1,
        ease: ease,
      },
      ">-=2.5"
    );

    t1.to(".content-inner", {
      duration: 1,
      scale: 1,
      ease: ease,
    });
    t1.to("#start-button", {
      duration: 0.65,
      opacity: 1,
      ease: ease,
    });
  });

  useGSAP(() => {
    if (loading >= 100) {
      introAnim();
    }
  }, [loading]);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoading((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        gsap.to(".app-bg", {
          duration: 0.2,
          height: `${prev + 0.2}%`,
          ease: "none",
        });
        return prev + 0.2;
      });
    }, 100);
  });

  return (
    <>
      <div className="overflow-hidden w-full h-full relative">
        <div className="app-bg"></div>
        <div className="load-bg"></div>
        <div
          ref={loadingElm}
          className="loading flex justify-center items-center w-full h-full text-center"
        >
          <div>
            <div className="mx-auto w-[80%] max-w-[1300px] h-full mb-16">
              <div className="grid grid-cols-3 w-full h-full">
                <Lottie
                  style={{ width: "100%", height: "100%" }}
                  animationData={LEI}
                />
                <Lottie animationData={BOW} />
                <Lottie animationData={ITZ} />
              </div>
            </div>
            <p className="text-[12vw] leading-[1] font-[200] text-white">
              {Math.round(loading, 2)}%
            </p>
            <h1 className="loading-text text-[4vw] font-[200] text-white">
              Magic Loading...
            </h1>
          </div>
        </div>
        <Start />
        <Text1 />
      </div>
    </>
  );
}

export default App;
