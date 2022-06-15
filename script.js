const expandImgs = document.querySelectorAll(".panel");

function toggleOpen() {
  console.log(this);
  this.classList.add("open");
}

function toggleActive(e) {
  console.log(e.propertyName);
  this.classList.add("open-active");
}

expandImgs.forEach((expandImg) => {
  expandImg.addEventListener("click", toggleOpen);
});

expandImgs.forEach((expandImg) => {
  expandImg.addEventListener("transitioned", toggleActive);
});
