const intro = document.querySelector(".intro");
const h1 = document.querySelector(".into-title");

window.addEventListener("load", (e) => {
  setTimeout((e) => {
    intro.classList.add("action");
  }, 4000);
});

window.addEventListener("click", (e) => {
  intro.classList.add("action");
});
