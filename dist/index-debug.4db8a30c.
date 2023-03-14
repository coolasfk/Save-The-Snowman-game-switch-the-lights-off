const directionsArrows = document.querySelectorAll(".arrows__arrow");
const snowballThrow = document.querySelector(
  ".throw-mechanics-wrapper__snowball",
);
const firstSwitch = document.getElementById("firstSwitch");
const secondSwitch = document.getElementById("secondSwitch");
const thirdSwitch = document.getElementById("thirdSwitch");

let isArrowOn = false;
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
let powerOfThrow = 330;

let allArrows = document.getElementById(
  "ba079a96-df17-41b0-af0d-4c8ae237a5ac",
).childNodes;

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
  isArrowOn = false;
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

    rectangleArrow.style.top = arrowPositionTop;

    rectangleArrow.style.bottom = arrowPositionBottom;
    rectangleArrow.style.left = arrowPositionLeft;
    rectangleArrow.style.right = arrowPositionRight;
    rectangleArrow.style.backgroundColor = "red";
    rectangleArrow.style.opacity = 0.5;

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

    angle = result;
    let newHeight = rectangleArrowHeight + powerOfThrow;

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

    const fakeSnowball = document.createElement("div");
    const snowball = document.getElementById(
      "b5716cf9-1b3f-4ddb-b558-979ef37c5855",
    );

    console.log(snowball);
    let snowballPosition = snowball.getBoundingClientRect();
    fakeSnowball.style.top = snowballPosition.top;

    fakeSnowball.style.height = snowballPosition.height + "px";
    console.log(fakeSnowball.style.height);
    fakeSnowball.style.width = snowballPosition.width + "px";
    fakeSnowball.style.top = snowballPosition.top + "px";
    fakeSnowball.style.bottom = snowballPosition.bottom + "px";
    fakeSnowball.style.left = snowballPosition.left + "px";
    fakeSnowball.style.right = snowballPosition.right + "px";
    fakeSnowball.style.position = "absolute";

    fakeSnowball.style.backgroundColor = "green";
    document.querySelector(".footer").append(fakeSnowball);

    console.log(fakeSnowball.style.height);
    console.log("before the shoot", fakeSnowball.getBoundingClientRect());
    console.log(snowballTranslateX, snowballTranslateY);

    console.log(arrowClicked);
    let directionOfThrow;
    for (i = 0; i < 15; i++) {
      if (arrowClicked == allArrows[i]) {
        fakeSnowball.style.transform = `translateX(${snowballTranslateX}) translateY(-${snowballTranslateY}) `;
        directionOfThrow = () => {
          directionsForSnowball = `translateX(${snowballTranslateX}) translateY(-${snowballTranslateY}) `;
          return directionsForSnowball;
        };
      }
    }
    for (i = 15; i < 30; i++) {
      if (arrowClicked == allArrows[i]) {
        fakeSnowball.style.transform = `translateX(-${snowballTranslateX}) translateY(-${snowballTranslateY}) `;
        directionOfThrow = () => {
          directionsForSnowball = `translateX(-${snowballTranslateX}) translateY(-${snowballTranslateY}) `;
          return directionsForSnowball;
        };
      }
    }

    console.log("after the shoot", fakeSnowball.getBoundingClientRect());

    let fakeSnowballAfterThrowPosition = fakeSnowball.getBoundingClientRect();
    let switchPosition = firstSwitch.getBoundingClientRect();
    console.log(fakeSnowballAfterThrowPosition.top, switchPosition.top);
    if (fakeSnowballAfterThrowPosition.top == switchPosition.top) {
      console.log("hit");
    } else {
      console.log("miss");
    }

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
