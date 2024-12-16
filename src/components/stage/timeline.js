import gsap from "./gsapSetup";

const mainAmin = (refs, lottieRefs) => {
  document.querySelector(".loading").classList.add("hidden");
  document.querySelector("#root").classList.add("ready");

  const panel1 = document.querySelector("#panel1");
  const panel2 = document.querySelector("#panel2");
  const panel3 = document.querySelector("#panel3");

  const { line, text1, text2, phase1, year1, year2, yearLine, dot1, dot2 } =
    refs.current;

  const {
    phase2,
    fireBack,
    firePlace,
    fireFloor,
    fireFore,
    fireText1,
    fireText2,
  } = refs.current;

  const {
    phase3,
    treeBush,
    treeWindow,
    treeFore,
    treeBack,
    treeGifts,
    treeOverlay,
    treeText,
  } = refs.current;

  const { phase4, ph4Text } = refs.current;

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

  starting.to(".stage", {
    duration: 1,
    opacity: 1,
    visibility: "visible",
    ease: "expo",
  });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: line,
      start: "top top",
      end: "bottom top",
      scrub: true,
      pin: true,
      snap: {
        snapTo: 1 / 44,
        directional: false,
      },
      onUpdate: (self) => {
        const progressBar = document.querySelector(".progress-bar__fill");
        progressBar.style.width = `${self.progress * 100}%`;
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
    .to(text1, {
      duration: 1,
      text: { value: "As the year" },
      onComplete: () => {
        document.querySelector(".scroll-anim").style.opacity = "0";
      },
    })
    .to(year1, { duration: 1, text: { value: "2024" } })
    .to(phase1, { x: "-25%" }, "<")
    .to(dot1, { opacity: 1, scale: 50 }, "<")
    .to(yearLine, { height: "59%" })
    .to(dot2, { opacity: 1, scale: 50 })
    .to(year2, { text: { value: "2025" } })
    .to(phase1, { x: "-25%" })
    .to(text2, { text: { value: "comes to a close..." } })
    .to(phase1, { x: "-150%" })
    /* Phase 2 */
    .to(
      phase2,
      {
        opacity: 1,
        onComplete: () => {
          panel1.play();
        },
        onReverseComplete: () => {
          panel1.pause();
        },
      },
      "<"
    )
    .to(fireBack, { x: "0%" }, "<")
    .to(firePlace, { x: "0%" })
    .to(fireFloor, { x: "0%" })
    .to(fireFore, { x: "0%" })
    .to([fireBack, firePlace, fireFloor, fireFore], { scale: 4.5 })
    .to(fireText1, {
      text: { value: "Look back at what" },
    })
    .to(fireText2, {
      text: { value: "you've accomplished." },
    })
    .to([fireBack, firePlace, fireFloor, fireFore], { scale: 1 })
    .to([fireText1, fireText2], { opacity: 0 }, "<")
    .to(phase2, { x: "-120%" })
    /* Phase 3 */
    .to(
      phase3,
      {
        opacity: 1,
        onComplete: () => {
          panel1.pause();
          panel2.play();
        },
        onReverseComplete: () => {
          panel1.play();
          panel2.pause();
        },
      },
      "<"
    )
    .to(treeBack, { x: "0%" }, "<")
    .to(treeFore, { x: "0%" })
    .to(treeWindow, { x: "0%" })
    .to(treeBush, { x: "0%" })
    .to(treeGifts, { x: "0%" }, "<")
    .to(treeOverlay, { opacity: "1" })
    .to(treeText, {
      text: {
        value: "What you've brought <br> the world is worth <br> celebrating.",
      },
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
    .to(
      phase4,
      {
        opacity: 1,
        onComplete: () => {
          panel2.pause();
        },
        onReverseComplete: () => {
          panel2.play();
        },
      },
      "<"
    )
    .to(ph4Text, {
      text: {
        value:
          "nd there's a lot to celebrate if you look for it. After all, the magic’s in the details...",
      },
    })
    .to(phase4, { x: "-120%" })
    .to(
      phase5,
      {
        opacity: 1,
        onComplete: () => {
          panel3.play();
        },
        onReverseComplete: () => {
          panel3.pause();
        },
      },
      "<"
    )
    .to(endBack, { x: "0%" }, "<")
    .to(endFore, { x: "0%" })
    .to(endWall, { x: "0%" })
    .to([endReveal, endWindow], { x: "0%" })
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
