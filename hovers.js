///------------ FUNCTIONS HOOVERING EVENTS ------------///

export const changeAllArrowsOpacity = (item) => {
  for (let i = 0; i < item.length; i++) {
    // if (i % 2 == !0) {
    item[i].style.opacity = "0.1";
    // }
  }
};

export const removeHoverListeners = (element) => {
  element.forEach((arrow) => {
    arrow.removeEventListener("pointerover", pointerOverEvent);
    arrow.removeEventListener("mouseleave", mouseLeaveEvent);
  });
};

//to powinno sie dziac tylko gdy jest mobile device albo maly
//add event listener zmiana szerokosci i tam dac ify (onchange)
// resize
// export const removeHoverListeners = (element) => {
//   console.log("");
//   element.forEach((arrow) => {
//     arrow.removeEventListener("touchmove", pointerOverEvent);
//     arrow.removeEventListener("touchend", mouseLeaveEvent);
//   });
// };

const pointerOverEvent = (e) => {
  e.target.style.opacity = 0.3;
};

const mouseLeaveEvent = (e) => {
  setTimeout(() => {
    e.target.style.opacity = 0.1;
  }, "1000");
};

export const addHoverListeners = (element) => {
  element.forEach((arrow) => {
    arrow.addEventListener("pointerover", pointerOverEvent);
    arrow.addEventListener("mouseleave", mouseLeaveEvent);
  });

  return false;
};
