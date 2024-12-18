import { useEffect, useRef, useState } from "react";
import "./styles/index.scss";
import gsap from "gsap";
import Start from "./components/start";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";
import Loader from "./helpers/Loader";
import Logo from "./components/logo";
import Glow from "./components/filters/glow";
gsap.registerPlugin(TextPlugin);

function App() {
  const [loading, setLoading] = useState(0.0);
  const [lottieData, setLottieData] = useState([]);
  const [start, setStart] = useState(false);
  const { contextSafe } = useGSAP();
  const loadingElm = useRef(null);
  const loadingText = useRef(null);
  const hasRunRef = useRef(false);
  const lastUpdateRef = useRef(Date.now());

  const introAnim = contextSafe(() => {
    let ease = "expo";
    let t1 = gsap.timeline();

    t1.to(loadingText, {
      duration: 1,
      opacity: 0,
      ease: "none",
    });
    t1.from(loadingElm.current, {
      duration: 1,
      scale: 1,
      ease: ease,
    });
    t1.to(loadingElm.current, {
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
      ">-=0.5"
    );

    t1.to(".content-inner", {
      duration: 1,
      scale: 1,
      ease: ease,
    });
    t1.to(["#start-button", ".title"], {
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
        console.log(data);
        setLottieData(data);
        setLoading(100);
        gsap.to(".app-bg", {
          duration: 0.2,
          height: `100%`,
          ease: "none",
        });
        // Start
        setStart(true);
      });
  }, [loading]);

  return (
    <>
      <div className="overflow-hidden w-full h-full relative">
        <Glow />
        <div className="app-bg"></div>
        <div className="load-bg"></div>
        <div
          ref={loadingElm}
          className="loading flex justify-center items-center w-full h-full text-center"
        >
          <div>
            <div className="mx-auto max-w-[1200px] w-[80%] h-full mb-16 relative">
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
        {start && <Start lotties={lottieData} />}
      </div>
      <audio id="music" src="/audio/music.mp3" loop></audio>
      <audio id="panel1" src="/audio/panel-1.mp3" loop></audio>
      <audio id="panel2" src="/audio/panel-2.mp3" loop></audio>
      <audio id="panel3" src="/audio/panel-3.mp3" loop></audio>
    </>
  );
}

export default App;
