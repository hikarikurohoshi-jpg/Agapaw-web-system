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
  }, "-=1.1");