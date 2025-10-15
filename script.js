// Navbar Scroll + Floating Effect
const navbar = document.getElementById("navbar");
let lastScrollY = 0;
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) navbar.classList.add("scrolled");
  else navbar.classList.remove("scrolled");

  if (window.scrollY < lastScrollY) navbar.style.top = "0";
  else navbar.style.top = "-80px";
  lastScrollY = window.scrollY;
});

// Dark/Light Mode Toggle
const toggleBtn = document.getElementById("modeToggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  document.body.classList.toggle("dark-mode");
  toggleBtn.textContent = document.body.classList.contains("light-mode") ? "☀️" : "🌙";
});
const userTheme = localStorage.getItem("theme");

// Apply saved theme on load
if (userTheme === "light") {
  document.body.classList.add("light-mode");
  document.body.classList.remove("dark-mode");
  toggleBtn.textContent = "☀️";
} else {
  document.body.classList.add("dark-mode");
  document.body.classList.remove("light-mode");
  toggleBtn.textContent = "🌙";
}

// Toggle and save preference
toggleBtn.addEventListener("click", () => {
  const isLight = document.body.classList.toggle("light-mode");
  document.body.classList.toggle("dark-mode", !isLight);

  toggleBtn.textContent = isLight ? "☀️" : "🌙";
  localStorage.setItem("theme", isLight ? "light" : "dark");
});

// Typing Animation
const roles = [
  "Full Stack Developer 💻",
  "Frontend Engineer ⚛️",
  "Backend Specialist 🔧",
  "Cloud Architect ☁️",
  "Tech Enthusiast 🚀"
];
let roleIndex = 0, charIndex = 0, isDeleting = false;
const typedRole = document.getElementById("typedRole");
function typeEffect() {
  const current = roles[roleIndex];
  typedRole.textContent = isDeleting ? current.substring(0, charIndex--) : current.substring(0, charIndex++);
  if (!isDeleting && charIndex === current.length) { isDeleting = true; setTimeout(typeEffect, 1500); }
  else if (isDeleting && charIndex === 0) { isDeleting = false; roleIndex = (roleIndex + 1) % roles.length; setTimeout(typeEffect, 500); }
  else setTimeout(typeEffect, isDeleting ? 60 : 120);
}
window.addEventListener("load", () => setTimeout(typeEffect, 1000));

// Scroll Reveal + Fade Sections
const fadeSections = document.querySelectorAll(".fade-section");
function handleScrollFade() {
  const windowHeight = window.innerHeight;
  fadeSections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < windowHeight - 100) sec.classList.add("visible");
    else sec.classList.remove("visible");
  });
}
window.addEventListener("scroll", handleScrollFade);
window.addEventListener("load", handleScrollFade);

// Parallax Hero
window.addEventListener("scroll", () => {
  const hero = document.querySelector(".hero");
  hero.style.backgroundPositionY = `${window.scrollY * 0.5}px`;
});

// Back to Top
const backToTopBtn = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 400) backToTopBtn.classList.add("show");
  else backToTopBtn.classList.remove("show");
});
backToTopBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

// Preloader
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  const heroSection = document.querySelector(".hero");
  heroSection.classList.add("visible");
  setTimeout(() => preloader.classList.add("hidden"), 1200);
});

// Form Submission
document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();
  const msg = document.getElementById("formMessage");
  msg.textContent = "Message sent successfully! ✅";
  msg.style.color = "lightgreen";
  e.target.reset();
});


