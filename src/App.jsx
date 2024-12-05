import { useEffect, useRef, useState } from "react";
import "./styles/index.scss";
import gsap from "gsap";
import Start from "./components/start";
import Text1 from "./components/text1";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";
import Loader from "./helpers/Loader";
import Logo from "./components/logo";
gsap.registerPlugin(TextPlugin);

function App() {
  const [loading, setLoading] = useState(0.0);
  const [lottieData, setLottieData] = useState([]);
  const { contextSafe } = useGSAP();
  const loadingElm = useRef(null);
  const loadingText = useRef(null);
  const hasRunRef = useRef(false);
  const lastUpdateRef = useRef(Date.now());

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
    const loader = new Loader();
    if (hasRunRef.current) return;
    hasRunRef.current = true;
    loader
      .loadAll((progress) => {
        const now = Date.now();
        if (now - lastUpdateRef.current >= 100 || progress === 100) {
          setLoading(progress);
          lastUpdateRef.current = now;
        }
        gsap.to(".app-bg", {
          duration: 0.1,
          height: `${progress}%`,
          ease: "none",
        });

        setLoading(progress);
      })
      .then((data) => {
        setLoading(80);
        setLottieData(data);

        loader.loadAudioFully("/audio/music.mp3").then((audio) => {
          audio.muted = true;
          audio.loop = true;
          document.body.appendChild(audio);

          setLoading(100);
          gsap.to(".app-bg", {
            duration: 0.2,
            height: `100%`,
            ease: "none",
          });
        });
      });
    /*
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
    */
  }, [loading]);

  return (
    <>
      <div className="overflow-hidden w-full h-full relative">
        <div className="hidden">
          <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter id="glow" x="-100%" y="-100%" width="300%" height="300%">
                <feFlood floodColor="yellow" floodOpacity="1" result="flood" />
                <feComposite
                  in="flood"
                  in2="SourceAlpha"
                  operator="in"
                  result="coloredGlow"
                />

                <feGaussianBlur
                  in="coloredGlow"
                  stdDeviation="20"
                  result="blurredGlow"
                />

                <feMerge>
                  <feMergeNode in="blurredGlow" />
                  <feMergeNode in="blurredGlow" />
                  <feMergeNode in="blurredGlow" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
          </svg>
        </div>
        <div className="app-bg"></div>
        <div className="load-bg"></div>
        <div
          ref={loadingElm}
          className="loading flex justify-center items-center w-full h-full text-center"
        >
          <div>
            <div className="mx-auto w-[80%] max-w-[1300px] h-full mb-16">
              <Logo />
            </div>
            <p className="text-[12vw] leading-[1] font-[200] text-white">
              {Math.round(loading, 2)}%
            </p>
            <h1 className="loading-text text-[4vw] font-[200] text-white">
              Magic Loading...
            </h1>
          </div>
        </div>
        {loading >= 100 && <Start lotties={lottieData} />}
        <Text1 />
      </div>
    </>
  );
}

export default App;
