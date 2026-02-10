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
 gsap.registerPlugin(ScrollTrigger);


//  entence animation in home paged
const introTL = gsap.timeline({ delay: 0.2 });

introTL
  // Navbar
  .from("#main-nav", {
    y: -40,
    opacity: 0,
    duration: 1.4,
    ease: "power3.out"
  })

  // Hero headline (starts at SAME TIME as navbar)
  .from(".hero-line", {
    y: 80,
    opacity: 0,
    duration: 1.4,
    ease: "power4.out",
    stagger: 0.25
  }, "<")

  // Hero subtext
  .from(".hero-desc", {
    y: 40,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out"
  }, "-=0.6")

  // Drinks
  .from(".drink-left", {
    y: 140,
    rotation: -15,
    scale: 0.7,
    opacity: 0,
    duration: 1.6,
    ease: "back.out(1.4)"
  }, "-=0.8")

  .from(".drink-right", {
    y: 140,
    rotation: 15,
    scale: 0.7,
    opacity: 0,
    duration: 1.6,
    ease: "back.out(1.4)"
  }, "-=1.1")

    // Arrows (LAST to appear)
  .from(".top-div", {
    y: 20,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    stagger: 0.15
  }, "+=0.3")

  // Arrow labels (text)
  .from(".text-div", {
    y: 10,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
    stagger: 0.15
  }, "-=0.6");


  







// Lock base transform first
gsap.set(".drink", { y: 0, rotation: 0 });

// Gentle floating — centered on original position
gsap.to(".drink-left", {
  y: -10,
  rotation: -1,
  duration: 2,
  ease: "sine.inOut",
  repeat: -1,
  yoyo: true
});

gsap.to(".drink-right", {
  y: -12,
  rotation: 1,
  duration: 2,
  ease: "sine.inOut",
  repeat: -1,
  yoyo: true
});
