document.addEventListener("DOMContentLoaded", () => {
  const revealSections = document.querySelectorAll(".reveal");

  const observerOptions = {
    threshold: 0.2
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const section = entry.target;
      const infoItems = section.querySelectorAll(".info-item");

      if (entry.isIntersecting) {
        section.classList.add("visible");

        // Animate info items with stagger effect
        infoItems.forEach((item, index) => {
          setTimeout(() => {
            item.style.opacity = "1";
            item.style.transform = "translateY(0)";
          }, index * 120);
        });
      } else {
        section.classList.remove("visible");

        infoItems.forEach((item) => {
          item.style.opacity = "0";
          item.style.transform = "translateY(20px)";
        });
      }
    });
  }, observerOptions);

  revealSections.forEach((section) => {
    sectionObserver.observe(section);
  });
});
