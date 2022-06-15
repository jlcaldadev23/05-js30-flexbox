const expandImgs = document.querySelectorAll(".panel");

function toggleOpen() {
  if (this.classList.contains("open")) {
    this.classList.remove("open");
  } else {
    console.log(this);
    this.classList.add("open");
  }

  // const
  // expandImgs.forEach((expandImg) => {
  //   if (expandImg.classList.contains("open")) {
  //     expandImg.classList.remove("open");
  //   }
  // });
  // // expandImgs.forEach((expandImg) => {
  //   if (expandImg.classList.contains("open-active")) {
  //     expandImg.classList.remove("open-active");
  //   }
  // });
}

function toggleActive(e) {
  console.log(e);
  if (e.propertyName.includes("flex")) {
    this.classList.add("open-active");
  }
}

expandImgs.forEach((expandImg) => {
  expandImg.addEventListener("click", toggleOpen);
});

expandImgs.forEach((expandImg) => {
  expandImg.addEventListener("transitionend", toggleActive);
});

console.log(expandImgs);

expandImgArr = Array.from(expandImgs);

// const allClass = expandImgArr.map((expandImg) => expandImg.classList
// });

// console.log(allClass);
