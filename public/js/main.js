const nav = document.getElementById("nav");

window.addEventListener("scroll", function () {
  scrollPosition = window.scrollY;

  if (scrollPosition >= 60) {
    nav.classList.add("nav-bg");
  } else if (scrollPosition <= 60) {
    nav.classList.remove("nav-bg");
  }
});
