export const changeAllArrowsOpacity = (item) => {
  for (let i = 0; i < item.length; i++) {
    if (i % 2 == !0) {
      item[i].style.opacity = "0.1";
    }
  }
};

export const removeHoverListeners = (element) => {
  element.forEach((arrow) => {
    arrow.removeEventListener("pointerover", pointerOverEvent);
    arrow.removeEventListener("mouseleave", mouseLeaveEvent);
  });
};

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
