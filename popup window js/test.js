
const toggle = document.querySelectorAll(".toggle");

function toggleNewsLetter() {
  newsLetter.classList.toggle("active");
}

toggle.forEach((t) => t.addEventListener("click", toggleNewsLetter));
