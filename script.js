const imgBtn1 = document.getElementById("img-btn1");
const imgBtn2 = document.getElementById("img-btn2");
const listImg = document.querySelectorAll(".fd-list");
console.log(listImg);

imgBtn1.addEventListener("click", function () {
  for (var i = 0; i < listImg.length; i++) {
    listImg[i].style.transform = "translateX(-90%)";
  }
});
