const cursor = document.querySelector(".cursor");
window.addEventListener("mousemove", (e) => {
  cursor.setAttribute(
    "style",
    "top : " + (e.pageY - 15) + "px; left: " + (e.pageX - 15) + "px"
  );
});
