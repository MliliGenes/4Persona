const cursor = document.querySelector(".cursor");
console.log(cursor);
window.addEventListener("mousemove", (e) => {
  console.log("saad");
  cursor.setAttribute(
    "style",
    "top : " + (e.pageY - 15) + "px; left: " + (e.pageX - 15) + "px"
  );
});
cursor.addEventListener("click", (e) => {
  cursor.classList.add("clicked");
});
