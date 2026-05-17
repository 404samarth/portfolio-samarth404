document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     TYPING EFFECT (HERO TEXT)
  ========================= */
  const text = "CSE Student | Developer | Problem Solver";
  let i = 0;

  function typeEffect() {
    if (i < text.length) {
      document.getElementById("typing").innerHTML += text.charAt(i);
      i++;
      setTimeout(typeEffect, 70);
    }
  }

  typeEffect();


  /* =========================
     SCROLL REVEAL ANIMATION
  ========================= */
  const revealElements = document.querySelectorAll(".reveal");

  function revealOnScroll() {
    const windowHeight = window.innerHeight;

    revealElements.forEach((el) => {
      const elementTop = el.getBoundingClientRect().top;

      if (elementTop < windowHeight - 100) {
        el.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);

  // run once on load
  revealOnScroll();


  /* =========================
     SMOOTH SCROLL (NAV LINKS)
  ========================= */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute("href"));

      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

});
