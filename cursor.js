const cursor = document.querySelector(".cursor");
window.addEventListener("mousemove", (e) => {
  cursor.setAttribute(
    "style",
    "top : " + (e.clientY - 15) + "px; left: " + (e.clientX - 15) + "px"
  );
});
