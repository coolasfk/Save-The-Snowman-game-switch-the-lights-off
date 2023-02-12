const directionsArrows = document.querySelectorAll(".arrows__arrow");
console.log("start");

const pointerOverEvent = (arrow) => {
  console.log("jestem hoover 1");
  arrow.style.fill = "#86BAB3";
  arrow.style.opacity = 0.6;
};

const mouseLeaveEvent = (arrow) => {
  console.log("jestem hoover 2");

  setTimeout(() => {
    arrow.style.fill = "#86BAB3";
    arrow.style.opacity = 0.1;
  }, "1000");
};

const addHoverListeners = () => {
  directionsArrows.forEach((arrow) => {
    arrow.addEventListener("pointerover", () => pointerOverEvent(arrow));
  });

  directionsArrows.forEach((arrow) => {
    arrow.addEventListener("mouseleave", () => mouseLeaveEvent(arrow));
  });
};

const removeHoverListeners = () => {
  directionsArrows.forEach((arrow) => {
    arrow.removeEventListener("pointover", () => pointerOverEvent(arrow));
    arrow.removeEventListener("mouseleave", () => mouseLeaveEvent(arrow));
  });
};

addHoverListeners();

directionsArrows.forEach((arrow) => {
  arrow.addEventListener("click", () => {
    console.log("zostalem klikniety");
    removeHoverListeners();
    arrow.style.opacity = 1;
    // document.querySelector(.)
  });
});

directionsArrows.forEach((arrow) => {
  arrow.addEventListener("doubleClick", () => {
    removeHoverListeners();
    addHoverListeners();
    // arrow.style.opacity = 1;
  });
});

//const = () => clickHandler()....#86BAB3

//element.removeEventListener("click", clickHandler);
