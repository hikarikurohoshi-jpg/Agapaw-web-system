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
 