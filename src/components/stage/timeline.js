import gsap from "./gsapSetup";

const mainAmin = (refs) => {
  document.querySelector(".loading").classList.add("hidden");
  document.querySelector("#root").classList.add("ready");

  const { line, text1, text2, phase1, year1, year2, yearLine, dot1, dot2 } =
    refs.current;

  console.log("refs", refs);

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

  tl.to(text1, { duration: 1, text: { value: "s the year" } })
    .to(year1, { duration: 1, text: { value: "2024" } })
    .to(phase1, { x: "-25%" })
    .to(dot1, { opacity: 1, scale: 50 })
    .to(yearLine, { height: "59%" })
    .to(dot2, { opacity: 1, scale: 50 })
    .to(year2, { text: { value: "2025" } })
    .to(phase1, { x: "-25%" })
    .to(text2, { text: { value: "comes to a close..." } })
    .to(phase1, { x: "-150%" });
};

export default mainAmin;
