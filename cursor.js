const cursor = document.querySelector(".cursor");
window.addEventListener("mousemove", (e) => {
  cursor.setAttribute(
    "style",
    "top : " + (e.clientY - 30) + "px; left: " + (e.clientX - 30) + "px"
  );
});

window.addEventListener("click", (e) => {
  cursor.classList.add("huh");
  setTimeout(() => {
    cursor.classList.remove("huh");
  }, 200);
});
