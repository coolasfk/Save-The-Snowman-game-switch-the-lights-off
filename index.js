const directionsArrows = document.querySelectorAll(".arrows__arrow");
const snowballThrow = document.querySelector(
  ".throw-mechanics-wrapper__snowball",
);

let arrowIsOn = false;
let rectangleArrowAngle;

let arrowClicked;
const theBody = document.querySelector(".main");

let arrowPosition;
let arrowPositionHeight;
let arrowPositionWidth;
let arrowPositionLeft;
let arrowPositionRight;
let arrowPositionTop;
let arrowPositionBottom;
let rectangleArrowPosition;
let directionsForSnowball;
let snowballTranslateX;
let snowballTranslateY;

let allArrows = document.getElementById(
  "ba079a96-df17-41b0-af0d-4c8ae237a5ac",
).childNodes;

console.log(allArrows[11]);
/// hoovering events

const pointerOverEvent = (e) => {
  e.target.style.opacity = 0.3;
};

const mouseLeaveEvent = (e) => {
  setTimeout(() => {
    e.target.style.opacity = 0.1;
  }, "1000");
};

const addHoverListeners = () => {
  arrowIsOn = false;
  directionsArrows.forEach((arrow) => {
    arrow.addEventListener("pointerover", pointerOverEvent);
  });

  directionsArrows.forEach((arrow) => {
    arrow.addEventListener("mouseleave", mouseLeaveEvent);
  });
};

const removeHoverListeners = () => {
  directionsArrows.forEach((arrow) => {
    arrow.removeEventListener("pointerover", pointerOverEvent);
    arrow.removeEventListener("mouseleave", mouseLeaveEvent);
    arrow.style.opacity = 0.1;
  });
};

addHoverListeners();

/// what happens when Arrow is clicked

directionsArrows.forEach((arrow) => {
  arrow.addEventListener("click", (e) => {
    arrowClicked = e.target;
    let rectangleArrow = document.createElement("div");
    arrowPosition = arrowClicked.getBoundingClientRect();
    arrowPositionLeft = arrowPosition.left + "px";
    arrowPositionRight = arrowPosition.right + "px";
    arrowPositionTop = arrowPosition.top + "px";
    arrowPositionBottom = arrowPosition.bottom + "px";
    arrowPositionHeight = arrowPosition.height;
    arrowPositionWidth = arrowPosition.width;
    console.log(arrowPosition.height, arrowPosition.width);
    rectangleArrow.style.transformOrigin = "left bottom";
    rectangleArrow.style.height = arrowPosition.height + "px";
    rectangleArrow.style.width = arrowPosition.width + "px";

    // rectangleArrow.style.width =
    //   parseFloat(rectangleArrow.style.width) + 200 + "px";

    // rectangleArrow.style.height =
    //   parseFloat(rectangleArrow.style.width) / Math.tan(rectangleArrowAngle) +
    //   "px";

    // console.log(rectangleArrow.style.height);

    // rectangleArrow.style.transform = `translateY(-${arrowPositionHeight})`;
    rectangleArrow.style.top = arrowPositionTop;

    rectangleArrow.style.bottom = arrowPositionBottom;
    rectangleArrow.style.left = arrowPositionLeft;
    rectangleArrow.style.right = arrowPositionRight;
    rectangleArrow.style.backgroundColor = "red";
    rectangleArrow.style.opacity = 0.5;
    // rectangleArrow.style.transform = "scale(7)";

    rectangleArrow.style.position = "absolute";
    document.querySelector(".main").append(rectangleArrow);

    rectangleArrowPosition = rectangleArrow.getBoundingClientRect();

    let rectangleArrowHeight = parseFloat(rectangleArrow.style.height);
    let rectangleArrowWidth = parseFloat(rectangleArrow.style.width);
    let result;
    console.log(rectangleArrow.style.height, rectangleArrowHeight);
    function getTheAngle(rectangleArrowHeight, rectangleArrowWidth) {
      result = Math.atan(rectangleArrowHeight / rectangleArrowWidth);
      return result;
    }

    getTheAngle(rectangleArrowHeight, rectangleArrowWidth);

    console.log(
      "this is the angle",
      getTheAngle(rectangleArrowHeight, rectangleArrowWidth),
    );

    console.log("rectangleArrowHeight", rectangleArrowHeight);
    console.log("rectangleArrowWidth", rectangleArrowWidth);
    // let angle = getTheAngle(rectangleArrowHeight, rectangleArrowWidth);
    // angle = 31;
    angle = result;
    let newHeight = rectangleArrowHeight + 100;

    const newWidthCalc = (newHeight, result) => {
      let newWidthResult = newHeight / Math.tan(result);

      return newWidthResult;
    };

    const newWidth = newWidthCalc(newHeight, result);
    console.log(
      "This is new height",
      newHeight,
      "and this is new width",
      newWidth,
    );

    rectangleArrow.style.height = newHeight + "px";
    rectangleArrow.style.width = newWidth + "px";
    rectangleArrow.style.transform = `translateY(-${
      newHeight - arrowPositionHeight
    }px)`;

    snowballTranslateX = rectangleArrow.style.width;
    snowballTranslateY = rectangleArrow.style.height;

    console.log(snowballTranslateX, snowballTranslateY);

    const directionOfThrow = () => {
      directionsForSnowball = `translateX(${snowballTranslateX}) translateY(-${snowballTranslateY}) `;
      return directionsForSnowball;
    };

    let directionsForSnowballRead = directionOfThrow();

    const throwingSnowBall = [{ transform: directionsForSnowball }];

    console.log(directionsForSnowball);
    const throwingSnowBallTiming = {
      duration: 1000,
      iterations: 1,
    };

    snowballThrow.addEventListener("click", () => {
      snowballThrow.animate(throwingSnowBall, throwingSnowBallTiming);
    });

    for (let i = 0; i < allArrows.length; i++) {
      if (i % 2 == !0) {
        allArrows[i].style.opacity = "0.1";
      } //changing all the arrows to 0.1 opacity
    }

    removeHoverListeners();

    arrow.style.opacity = 1;
  });
});

// unclicking the arrows

function clickOutside(e) {
  if (!e.target.classList.contains("arrows__arrow")) {
    console.log("target doesn't include");
    removeHoverListeners();
    addHoverListeners();
  }
}

theBody.addEventListener("click", clickOutside);

directionsArrows.forEach((arrow) => {
  arrow.addEventListener("dblclick", () => {
    console.log("doubleclick");
    removeHoverListeners();
    addHoverListeners();

    arrow.style.opacity = 0.1;
  });
});

// throwing a snowball // how to make the animation run every time we click
// can i make animation dynamically choosing the direction

// snowballThrow.addEventListener("click", () => {
//   console.log("snowball clicked");
//   if (arrowIsOn == true) {
//     snowballThrow.style.animation = "snowball-animation 2.5s ease-out 1";
//   } else {
//     console.log("choose an arrow");
//   }
// });

// const directionOfThrow = () => {
//   directionsForSnowball = `translateX(${translateX}px) translateY(${translateY}px) scale(1)`;
//   return directionsForSnowball;
// };

// let directionsForSnowballRead = directionOfThrow();

// console.log(directionsForSnowball);

// const throwingSnowBall = [{ transform: directionsForSnowball }];

// const throwingSnowBallTiming = {
//   duration: 2000,
//   iterations: 1,
// };

// snowballThrow.addEventListener("click", () => {
//   snowballThrow.animate(throwingSnowBall, throwingSnowBallTiming);
// });
