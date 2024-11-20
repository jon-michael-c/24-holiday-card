import { useEffect, useState } from "react";
import "./styles/index.scss";
import Lottie from "lottie-react";
import loadingAnim from "./assets/loading.json";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function App() {
  const [loading, setLoading] = useState(0.0);

  const loadAnim = () => {
    let ease = "expo.inOut";
    gsap.to(".loading-text", {
      duration: 1,
      opacity: 0,
      ease: "none",
      delay: 0.5,
    });
    gsap.from(".loading", {
      duration: 1,
      scale: 1,
      ease: ease,
      delay: 0.5,
    });

    gsap.to(".loading", {
      duration: 1,
      scale: 0.8,
      ease: ease,
      delay: 1,
    });
    gsap.to(".loading", {
      duration: 1,
      translateX: "-100%",
      ease: ease,
      delay: 2,
    });
    gsap.to(".square-frame", {
      duration: 1,
      width: "150%",
      ease: ease,
      delay: 3,
    });
    gsap.to(".content-inner", {
      duration: 1,
      scale: 1,
      ease: ease,
      delay: 4,
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setLoading((prev) => {
        if (prev >= 100) {
          clearInterval(interval);

          loadAnim();
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
        <div className="loading flex justify-center items-center w-full h-full text-center">
          <div>
            <div className="w-[600px] h-auto">
              <Lottie animationData={loadingAnim} loop autoplay />
            </div>
            <p className="text-[12vw] leading-[1] font-[200] text-white">
              {Math.round(loading, 2)}%
            </p>
            <h1 className="loading-text text-[4vw] font-[200] text-white">
              Magic Loading...
            </h1>
          </div>
        </div>
        <div className="square-frame">
          <div className="content">
            <div className="content-inner h-full w-full flex justify-center items-center">
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
