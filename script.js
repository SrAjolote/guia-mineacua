// script.js

window.addEventListener("scroll", function() {
  const logo = document.getElementById("logoAnimado");
  if (window.scrollY > 50) {
    logo.style.transform = "scale(1.2)";
  } else {
    logo.style.transform = "scale(1)";
  }
});
