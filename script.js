// Simple fade-in animation when scrolling
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const reveal = () => {
    const trigger = window.innerHeight * 0.85;
    sections.forEach((sec) => {
      const rect = sec.getBoundingClientRect();
      if (rect.top < trigger) {
        sec.classList.add("visible");
      }
    });
  };
  window.addEventListener("scroll", reveal);
  reveal();
});
