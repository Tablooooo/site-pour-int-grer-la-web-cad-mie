const burger = document.getElementById("burger");
const nav = document.getElementById("nav");
const closeBtn = document.getElementById("close");

burger.addEventListener("click", () => {
  nav.classList.add("open");
  burger.style.visibility = "hidden";
});

closeBtn.addEventListener("click", () => {
  nav.classList.remove("open");
  burger.style.visibility = "visible";
});
