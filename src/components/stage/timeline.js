import gsap from "./gsapSetup";

const mainAmin = (refs, lottieRefsArr) => {
  document.querySelector(".loading").classList.add("hidden");
  document.querySelector("#root").classList.add("ready");

  const isMobile = window.innerWidth < 768;
  const panel1 = document.querySelector("#panel1");
  const panel2 = document.querySelector("#panel2");
  const panel3 = document.querySelector("#panel3");
  console.log(panel1);

  const [firelottieRefs, treelottieRefs, lottieRefs] = lottieRefsArr;

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
    windowMobileRef,
    endRevealMobile,
    finalText,
    endWindowMobileRef,
  } = refs.current;

  const starting = gsap.timeline();

  window.test = firelottieRefs.fire.current;
  const toggleFire = (state) => {
    if (state) {
      Object.values(firelottieRefs).forEach((ref) => {
        ref.current?.play();
      });
    } else {
      Object.values(firelottieRefs).forEach((ref) => {
        ref.current?.pause();
      });
    }
  };

  const toggleTree = (state) => {
    if (state) {
      Object.values(treelottieRefs).forEach((ref) => {
        ref.current?.play();
      });
    } else {
      Object.values(treelottieRefs).forEach((ref) => {
        ref.current?.pause();
      });
    }
  };

  const toggleEnd = (state) => {
    if (state) {
      Object.values(lottieRefs).forEach((ref) => {
        ref.current?.play();
      });
      lottieRefs.revealAnim.current?.playSegments([0, 24], true);
      lottieRefs.revealMobile.current?.playSegments([0, 24], true);
    } else {
      Object.values(lottieRefs).forEach((ref) => {
        ref.current?.pause();
      });
    }
  };

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

  tl
    /* Phase 1 */
    .to(text1, {
      duration: 1,
      text: { value: "As the year" },
      onComplete: () => {
        document.querySelector(".scroll-anim").style.opacity = "0";
      },
    })
    .to(year1, { duration: 1, text: { value: "2024" } });
  if (window.innerWidth >= 768) {
    tl.to(phase1, { x: "-25%" }, "<");
  }
  tl.to(dot1, { opacity: 1, scale: !isMobile ? 50 : 20 }, "<")
    .to(yearLine, { height: "59%" })
    .to(dot2, { opacity: 1, scale: !isMobile ? 50 : 20 })
    .to(year2, { text: { value: "2025" } });
  if (!isMobile) {
    tl.to(phase1, { x: "-25%" });
  }
  tl.to(text2, {
    text: { value: "comes to a close..." },
  })
    .to(text2, { duration: 2, opacity: 1 })
    .to(phase1, { x: "-170%", onComplete: () => toggleFire(true) })
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
    .to(firePlace, { x: "-50%", y: "-0%" })
    .to(fireFloor, { x: "0%" })
    .to(fireFore, { x: "0%" })
    .to(fireFore, { duration: 2, x: "0%", onComplete: () => toggleFire(false) })
    .to(firePlace, {
      scale: "4.5",
      onComplete: () => toggleFire(true),
    });

  if (!isMobile) {
    tl.to(fireText1, {
      text: { value: "Look back at what" },
    })
      .to(fireText2, {
        text: { value: "you've accomplished." },
      })
      .to(fireText1, {
        duration: 2,
        text: { value: "Look back at what" },
        onComplete: () => toggleFire(false),
      });
  } else {
    tl.to(fireText1, {
      duration: 2,
      text: { value: "Look back at what you've accomplished." },
    });
    tl.to(fireText1, {
      duration: 2,
      text: { value: "Look back at what you've accomplished." },
      onComplete: () => toggleFire(false),
    });
  }
  tl.to(firePlace, {
    duration: 0.5,
    scale: "1",
    onComplete: () => toggleFire(true),
  })
    .to([fireText1, fireText2], { opacity: 0 }, "<")
    .to(phase2, {
      x: "-120%",
      onComplete: () => {
        toggleFire(false);
        toggleTree(true);
      },
    })
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
    .to(treeBack, { x: "0%" }, "<");
  if (!isMobile) {
    tl.to(treeFore, { x: "0%" }).to(treeWindow, { x: "0%" });
  } else {
    tl.to(treeFore, { opacity: "0%" }, "<").to(
      treeWindow,
      { opacity: "0%" },
      "<"
    );
  }
  tl.to(treeBush, { x: "0%" })
    .to(treeGifts, { x: "0%" }, "<")
    .to(treeGifts, { duration: 1, x: "0%" })
    .to(treeOverlay, { opacity: "1" })
    .to(treeText, {
      text: {
        value:
          "What you've brought <br class='hidden sm:block'> the world is worth <br class='hidden sm:block'> celebrating.",
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
    .to(treeOverlay, { duration: 2, opacity: "1" })
    .to(phase3, {
      x: "-120%",
      onComplete: () => {
        toggleTree(false);
        toggleEnd(true);
      },
    })
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
          "And there's a lot to celebrate if you look for it. After all, the magic’s in the details...",
      },
    })
    .to(phase4, { duration: 2, opacity: "1" })
    .to(phase4, { x: "-120%" })
    /* Phase 5 */
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
    .to([endReveal, endWindow, endRevealMobile, windowMobileRef], { x: "0%" })
    .to(endWall, { duration: 1, x: "0%" })
    .to([endWall, endWindow, endBack, endFore, windowMobileRef], {
      opacity: 0,
      onComplete: () => {
        if (!isMobile) {
          const revealAnim = lottieRefs.revealAnim.current;
          const start = revealAnim.animationItem.currentFrame;
          const end = 100;
          revealAnim.animationItem.loop = false;
          revealAnim.playSegments([start, end], true);
          tl.kill();

          setTimeout(() => {
            // End reveal pointer events enabled
            endReveal.style.pointerEvents = "all";
            endReveal.style.zIndex = "9999";
          }, 2500);
        } else {
          const revealAnimMobile = lottieRefs.revealMobile.current;
          // Log all frames
          console.log(revealAnimMobile.animationItem.totalFrames);
          console.log(revealAnimMobile);
          const start = revealAnimMobile.animationItem.currentFrame;
          const end = 96;
          revealAnimMobile.animationItem.loop = false;
          revealAnimMobile.playSegments([start, end], true);
          tl.kill();
          setTimeout(() => {
            endRevealMobile.style.pointerEvents = "all";
            endRevealMobile.style.zIndex = "9999";
          }, 2500);
        }
      },
    });
};

export default mainAmin;
