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




// ===============================
// BEST SELLER TITLE / SUBTITLE
// ===============================

// H2 fade in/out
gsap.fromTo(".best-seller-title h2",
  { opacity: 0, y: 40 },
  {
    opacity: 1,
    y: 0,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".best-seller-title",
      start: "top 80%", // offset so it triggers earlier
      end: "top center",
      scrub: true
    }
  }
);

// Subtitle fade in/out
gsap.fromTo(".best-seller-sub",
  { opacity: 0, y: 20 },
  {
    opacity: 1,
    y: 0,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".best-seller-title",
      start: "top 70%", // slightly after H2
      end: "top center",
      scrub: true
    }
  }
);


// ===============================
// BEST SELLER: PRODUCT ITEMS STAGGERED ENTRANCE
// ===============================

const products = gsap.utils.toArray(".best-seller-grid .product-item");

products.forEach((product, index) => {
  const isEven = index % 2 !== 0;

  gsap.fromTo(product,
    {
      x: isEven ? 180 : -180,
      rotation: isEven ? -20 : 20,
      opacity: 0,
      scale: 0.9
    },
    {
      x: 0,
      rotation: 0,
      opacity: 1,
      scale: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: product,
        start: "top 90%", // when each product enters viewport
        end: "top 40%",
        scrub: true
      }
    }
  );
});