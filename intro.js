const intro = document.querySelector(".intro");
const h1 = document.querySelector(".into-title");

window.addEventListener("load", (e) => {
  // setTimeout((e) => {
  //   intro.classList.add("action");
  // }, 4000);
  setTimeout((e) => {
    window.addEventListener("click", (e) => {
      intro.classList.add("action");
    });
    window.addEventListener("keydown", (e) => {
      intro.classList.add("action");
    });
  }, 1500);
  setTimeout((e) => {
    h1.classList.add("waiting");
  }, 800);
});
