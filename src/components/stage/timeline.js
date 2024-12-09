import gsap from "./gsapSetup";

const mainAmin = (refs) => {
  document.querySelector(".loading").classList.add("hidden");
  document.querySelector("#root").classList.add("ready");

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
    cap2,
  } = refs.current;

  const { phase3, treeBush, treeWindow, treeFore, treeBack } = refs.current;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: line,
      start: "top top",
      end: "bottom top",
      scrub: true,
      markers: true,
    },
    defaults: { ease: "none" },
  });

  tl.to(".stage", {
    duration: 1,
    opacity: 1,
    visibility: "visible",
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
    .to(treeWindow, { x: "0%" });
};

export default mainAmin;
