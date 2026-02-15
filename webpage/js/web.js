// Prevent browser scroll restoration
if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

// Force scroll to top on refresh / reload
window.addEventListener("load", function () {
  setTimeout(() => {
    // Hard reset scroll
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    // If ScrollTrigger exists, reset its memory
    if (window.ScrollTrigger) {
      ScrollTrigger.clearScrollMemory();
      ScrollTrigger.refresh(true);
    }

    console.log("⬆️ Scroll forced to top after load");
  }, 50); // ⬅️ this delay is the key
});



 lucide.createIcons();
 


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

