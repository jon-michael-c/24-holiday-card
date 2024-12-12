import gsap from "./gsapSetup";

const mainAmin = (refs, lottieRefs) => {
  document.querySelector(".loading").classList.add("hidden");
  document.querySelector("#root").classList.add("ready");

  const {
    line,
    text1,
    text2,
    phase1,
    year1,
    year2,
    yearLine,
    dot1,
    dot2,
    cap1,
  } = refs.current;

  const {
    phase2,
    fireBack,
    firePlace,
    fireFloor,
    fireFore,
    fireText1,
    fireText2,
    cap2,
  } = refs.current;

  const {
    phase3,
    treeBush,
    treeWindow,
    treeFore,
    treeBack,
    treeGifts,
    treeOverlay,
    treeCap,
    treeText,
  } = refs.current;

  const { phase4, ph4Text, ph4Cap } = refs.current;

  const {
    phase5,
    endBack,
    endFore,
    endWall,
    endWindow,
    endReveal,
    anim,
    finalText,
    lotties,
  } = refs.current;

  const starting = gsap.timeline();

  starting
    .to(".stage", {
      duration: 1,
      opacity: 1,
      visibility: "visible",
      ease: "expo",
    })
    .to(cap1, { opacity: 1, x: "0%" });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: line,
      start: "top top",
      end: "bottom top",
      scrub: true,
      pin: true,
      markers: true,
      snap: {
        snapTo: 1 / 44,
        directional: false,
      },
      onUpdate: (self) => {
        const progressBar = document.querySelector(".progress-bar__fill");
        progressBar.style.height = `${self.progress * 100}%`;
      },
    },
    defaults: { ease: "none" },
  });

  let tl2 = gsap.timeline({ paused: true }).to(finalText, {
    text: { value: "Happy Holidays <br> from" },
    duration: 1,
    ease: "expo",
  });

  tl
    /* Phase 1 */
    .to(text1, { duration: 1, text: { value: "s the year" } })
    .to(year1, { duration: 1, text: { value: "2024" } })
    .to(phase1, { x: "-25%" })
    .to(dot1, { opacity: 1, scale: 50 })
    .to(yearLine, { height: "59%" })
    .to(dot2, { opacity: 1, scale: 50 })
    .to(year2, { text: { value: "2025" } })
    .to(phase1, { x: "-25%" })
    .to(text2, { text: { value: "comes to a close..." } })
    .to(phase1, { x: "-150%" })
    /* Phase 2 */
    .to(phase2, { opacity: 1 })
    .to(fireBack, { x: "0%" })
    .to(firePlace, { x: "0%" })
    .to(fireFloor, { x: "0%" })
    .to(fireFore, { x: "0%" })
    .to(phase2, { width: "450%", x: "-39%", y: "-750px" })
    .to(cap2, { opacity: 1 })
    .to(fireText1, { text: { value: "ook back at what" } })
    .to(fireText2, { text: { value: "you've accomplished" } })
    .to(phase2, { width: "100%", x: "0%", y: "0px" })
    .to(phase2, { x: "-120%" })
    /* Phase 3 */
    .to(phase3, { opacity: 1 })
    .to(treeBack, { x: "0%" })
    .to(treeBush, { x: "0%" })
    .to(treeWindow, { x: "0%" })
    .to(treeFore, { x: "0%" })
    .to(treeGifts, { x: "0%" })
    .to(treeOverlay, { opacity: "1" })
    .to(treeCap, { opacity: 1 })
    .to(treeText, {
      text: { value: "hat you've brought the world is worth celebrating." },
      onComplete: () => {
        let bushGroup = treeBush.querySelector("g");

        if (bushGroup) {
          bushGroup.style.filter = "url(#glow)";
        }
      },
      onReverseComplete: () => {
        let bushGroup = treeBush.querySelector("g");

        if (bushGroup) {
          bushGroup.style.filter = "none";
        }
      },
    })
    .to(phase3, { x: "-120%" })
    /* Phase 4 */
    .to(phase4, { opacity: 1 })
    .to(ph4Cap, { opacity: 1 })
    .to(ph4Text, {
      text: { value: "nd there's a lot to celebrate if you look for it." },
    })
    .to(phase4, { x: "-120%" })
    .to(phase5, { opacity: 1 })
    .to(endBack, { x: "0%" })
    .to(endFore, { x: "0%" })
    .to(endWall, { x: "0%" })
    .to(endWindow, { x: "0%" })
    .to(endReveal, { x: "0%" })
    .to([endWall, endWindow, endBack, endFore], {
      opacity: 0,
      onComplete: () => {
        const start = 25;
        const end = 100;
        const revealAnim = lottieRefs[0].current;
        revealAnim.animationItem.loop = false;
        revealAnim.playSegments([start, end], true);
        tl2.play();
      },
    });
};

export default mainAmin;
