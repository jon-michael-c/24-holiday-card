import React, { useEffect, useRef } from "react";
import Lottie from "lottie-react";
import LEI from "./lotties/LEI.json";
import BOW from "./lotties/BOW.json";
import ITZ from "./lotties/ITZ.json";

function Logo() {
  const leiRef = useRef(null);
  const bowRef = useRef(null);
  const itzRef = useRef(null);

  useEffect(() => {
    return () => {
      leiRef.current.destroy();
      bowRef.current.destroy();
      itzRef.current.destroy();
    };
  }, []);
  return (
    <div className="flex flex-col md:flex-row justify-center items-center relative w-full max-w-[400px] sm:max-w-[1250px]">
      <Lottie
        lottieRef={leiRef}
        style={{ width: "auto", height: "auto" }}
        animationData={LEI}
      />
      <Lottie
        lottieRef={bowRef}
        style={{ width: "auto", height: "auto" }}
        animationData={BOW}
      />
      <Lottie
        lottieRef={itzRef}
        style={{ width: "auto", height: "auto" }}
        animationData={ITZ}
      />
    </div>
  );
}

export default Logo;
