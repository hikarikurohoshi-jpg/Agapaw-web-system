gsap.registerPlugin(ScrollTrigger);


// ===== PARALLELOGRAM BLOCK REVEAL =====

const words = document.querySelectorAll(".block-reveal");

gsap.set(".block-content", { opacity: 0 });
gsap.set(".block-revealer", {
  scaleX: 0,
  transformOrigin: "left center"
});

words.forEach((word, i) => {

  const content = word.querySelector(".block-content");
  const block = word.querySelector(".block-revealer");

  const tl = gsap.timeline({
    delay: 0.4 + (i * 0.3), // stagger words
    defaults: { ease: "power4.inOut" }
  });

  tl
    // Cover
    .to(block, {
      scaleX: 1,
      duration: 0.6
    })

    // Reveal text
    .to(content, {
      opacity: 1,
      duration: 0.01
    })

    // Switch origin
    .set(block, {
      transformOrigin: "right center"
    })

    // Uncover
    .to(block, {
      scaleX: 0,
      duration: 0.7
    });

});


