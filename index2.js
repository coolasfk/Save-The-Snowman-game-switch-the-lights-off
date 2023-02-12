const directionsArrows = document.querySelectorAll(".arrows__arrow");

let arrowIsOn; //undefined
console.log(arrowIsOn);

// if (arrowIsOn == false || arrowIsOn == undefined) {
// console.log(arrowIsOn);
console.log("powiinienem sie wyswietlic tylko raz");
directionsArrows.forEach((arrow) => {
  // arrowIsOn = true;
  arrow.addEventListener("pointerover", () => {
    // arrow.addEventListener("touchstart", () => {
    // arrow.className.toggle('active') &.active
    arrow.style.fill = "#86BAB3";
    arrow.style.opacity = 0.6;
  });

  arrow.addEventListener("mouseleave", () => {
    // arrow.addEventListener("touchend", () => {
    setTimeout(() => {
      arrow.style.fill = "#86BAB3";

      arrow.style.opacity = 0.1;
    }, "1000");
  });
});
// } else if (arrowIsOn === true) {
//   return;
// }
// how to make mouseleave, pointeron work on TOUCHPOINTS devices

directionsArrows.forEach((arrow) => {
  arrow.addEventListener("click", () => {
    arrow.style.opacity = 1;
    directionsArrows.forEach((arrow) => {
      arrow.removeEventListener("pointover");
      arrow.removeEventListener("mouseleave");
    });

    // console.log("wtf");

    console.log(arrowIsOn);
    document.querySelector(".main__snowball").style.animation =
      "snowball-animation 1.2s ease-out 1";
  });

  //   setTimeout(() => {
  //     arrowIsOn = false;
  //   }, 3000);
});

///
