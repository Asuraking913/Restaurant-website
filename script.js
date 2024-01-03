const menuBtn = document.getElementById("menu");
const nav = document.getElementById("nav");
const exitMenu = document.getElementById("exit");

// menuBtn.addEventListener("click", () => {
//   nav.style.display = "flex";
//   menuBtn.style.display = "none";
// });

// exitMenu.addEventListener("click", () => {
//   nav.style.display = "none";
//   menuBtn.style.display = "block";
// });

window.addEventListener("click", (e) => {
  if (e.target == menuBtn) {
    nav.style.display = "flex";
    menuBtn.style.display = "none";
  }

  if (e.target == exitMenu) {
    nav.style.display = "none";
    menuBtn.style.display = "block";
  }
});
