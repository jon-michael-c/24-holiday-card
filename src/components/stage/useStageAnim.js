import gsap from "./gsapSetup";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import mainAnim from "./timeline";

const useStageAnimation = (refs, lottieRefs) => {
  useGSAP(() => {
    mainAnim(refs, lottieRefs);

    // Cleanup function to kill ScrollTrigger instances when component unmounts
    return () => {
      gsap.killTweensOf("*");
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [refs]);
};

export default useStageAnimation;
