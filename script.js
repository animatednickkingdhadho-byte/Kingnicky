const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector("#nav");
if (menu) menu.addEventListener("click", () => nav.classList.toggle("open"));

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

const form = document.querySelector("#contactForm");
const note = document.querySelector("#formNote");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  note.textContent = "Thanks — your inquiry is ready. Connect this form to Formspree or your backend before launch.";
  form.reset();
});
