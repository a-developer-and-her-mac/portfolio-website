const hamburger = document.getElementById("hamburger");
const navigationList = document.getElementById("navigation-list");

hamburger.addEventListener("click", () => {
  navigationList.classList.toggle("show");
})

