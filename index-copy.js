///------------ VARIABLES ------------///

const directionsArrows = document.querySelectorAll(".arrows__arrow");
const snowballThrow = document.querySelector(
  ".throw-mechanics-wrapper__snowball",
);
const firstSwitch = document.getElementById("firstSwitch-ON");

const secondSwitch = document.getElementById("secondSwitch");
const thirdSwitch = document.getElementById("thirdSwitch");
const firstSwitchOff = document.getElementById("firstSwitch-OFF");
const secondSwitchOff = document.getElementById("secondSwitch-OFF");
const thirdSwitchOff = document.getElementById("thirdSwitch-OFF");

let isArrowOn = false;
let rectangleArrowAngle;

let arrowClicked = {};

const theBody = document.querySelector(".main");

let arrowPosition = 0;
let arrowPositionHeight = 0;
let arrowPositionWidth = 0;
let arrowPositionLeft = 0;
let arrowPositionRight = 0;
let arrowPositionTop = 0;
let arrowPositionBottom = 0;
let rectangleArrowPosition = 0;
let directionsForSnowball = 0;
let snowballTranslateX = "";
let snowballTranslateY = "";
let powerOfThrow = 400;
let result = 0;
let rectangleArrowHeight = 0;
let rectangleArrowWidth = 0;
let rectangleArrow = {};
let newHeight = 0;
let counterHits = 0;

let newWidth = 0;
let fakeSnowballAfterThrowPosition = {};
let sliderPower = document.querySelector(".choose-power-wrapper__slider");
powerOfThrow = Math.round(sliderPower.value);

console.log(powerOfThrow);

sliderPower.addEventListener("change", () => {
  powerOfThrow = Math.round(sliderPower.value);
  console.log(powerOfThrow);
});

const distancesBallToSwitch = {
  1: 0,
  2: 0,
  3: 0,
};
let directionOfThrow; /// how to show function

const snowball = document.querySelector(`[data-id = "snowball"]`);
const fakeSnowball = document.createElement("div");

let allArrows = document.querySelector(`[data-id="allArrows"]`).childNodes;

///------------ FUNCTIONS HOOVERING EVENTS ------------///

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
  });
};
addHoverListeners();
///------------ FUNCTIONS FOR ARROW CLICKED ------------///
const addingRectangleForSnowballDirection = (arrowClicked) => {
  rectangleArrow = document.createElement("div");
  arrowPosition = arrowClicked.getBoundingClientRect();

  arrowPositionHeight = arrowPosition.height;
  arrowPositionWidth = arrowPosition.width;

  rectangleArrow.style.transformOrigin = "left bottom";
  rectangleArrow.style.height = arrowPosition.height + "px";
  rectangleArrow.style.width = arrowPosition.width + "px";

  rectangleArrow.style.top = arrowPosition.top + "px";

  rectangleArrow.style.bottom = arrowPosition.bottom + "px";
  rectangleArrow.style.left = arrowPosition.left + "px";
  rectangleArrow.style.right = arrowPosition.right + "px";
  rectangleArrow.style.backgroundColor = "red";
  rectangleArrow.style.opacity = 0;

  rectangleArrow.style.position = "absolute";
  rectangleArrow.style.zIndex = -100;
  document.querySelector(".main").append(rectangleArrow);

  rectangleArrowPosition = rectangleArrow.getBoundingClientRect();

  rectangleArrowHeight = parseFloat(rectangleArrow.style.height);
  rectangleArrowWidth = parseFloat(rectangleArrow.style.width);
};

const getTheAngle = (rectangleArrowHeight, rectangleArrowWidth) =>
  (angle = Math.atan(rectangleArrowHeight / rectangleArrowWidth));

const createFakeSnowball = () => {
  let snowballPosition = snowball.getBoundingClientRect();
  fakeSnowball.style.top = snowballPosition.top;

  fakeSnowball.style.height = snowballPosition.height + "px";

  fakeSnowball.style.width = snowballPosition.width + "px";
  fakeSnowball.style.top = snowballPosition.top + "px";
  fakeSnowball.style.bottom = snowballPosition.bottom + "px";
  fakeSnowball.style.left = snowballPosition.left + "px";
  fakeSnowball.style.right = snowballPosition.right + "px";
  fakeSnowball.style.position = "absolute";
  fakeSnowball.style.opacity = 0;

  fakeSnowball.style.backgroundColor = "green";
  document.querySelector(".footer").append(fakeSnowball);
};

const newWidthCalc = (angle) => {
  newHeight = rectangleArrowHeight + powerOfThrow;
  newWidth = newHeight / Math.tan(angle);

  return newWidth;
};

const changeAllArrowsOpacity = () => {
  for (let i = 0; i < allArrows.length; i++) {
    if (i % 2 == !0) {
      allArrows[i].style.opacity = "0.1";
    }
  }
};

const definingDirectionOfThrow = (newWidth) => {
  rectangleArrow.style.height = newHeight + "px";
  rectangleArrow.style.width = newWidth + "px";
  rectangleArrow.style.transform = `translateY(-${
    newHeight - arrowPositionHeight
  }px)`;

  snowballTranslateX = rectangleArrow.style.width;
  snowballTranslateY = rectangleArrow.style.height;

  for (i = 0; i < 15; i++) {
    if (arrowClicked == allArrows[i]) {
      fakeSnowball.style.transform = `translateX(${snowballTranslateX}) translateY(-${snowballTranslateY}) `;
      directionOfThrow = () => {
        directionsForSnowball = [
          parseFloat(snowballTranslateX),
          -parseFloat(snowballTranslateY),
        ];
        return directionsForSnowball;
      };
    }
  }
  for (i = 15; i < 30; i++) {
    if (arrowClicked == allArrows[i]) {
      fakeSnowball.style.transform = `translateX(-${snowballTranslateX}) translateY(-${snowballTranslateY}) `;
      directionOfThrow = () => {
        directionsForSnowball = [
          -parseFloat(snowballTranslateX),
          -parseFloat(snowballTranslateY),
        ];
        return directionsForSnowball;
      };
    }
  }
};

const animationSnowball = () => {
  let [finalMoveX, finalMoveY] = directionOfThrow();

  const throwingSnowBall = [
    { transform: "scale(1)" },

    {
      transform: `translateX(${finalMoveX / 2}px) translateY(${
        finalMoveY / 2
      }px) scale(1.5)`,
    },
    {
      transform: `translateX(${finalMoveX}px) translateY(${finalMoveY}px) scale(0.8)`,
    },
  ];

  const throwingSnowBallTiming = {
    duration: 1000,
    iterations: 1,
  };

  // ??????????? why this does not work ??????;
  snowballThrow.style.animationTimingFunction = "ease-out";

  snowballThrow.addEventListener("click", () => {
    if (isArrowOn == true) {
      snowballThrow.animate(throwingSnowBall, throwingSnowBallTiming);
    }
  });
};
const checkingIfSwitchGotHit = (switchON, snowball) => {
  let switchPosition = switchON.getBoundingClientRect();
  let xSideSwitch = switchPosition.left;
  let ySideSwitch = switchPosition.top;

  fakeSnowballAfterThrowPosition = snowball.getBoundingClientRect();

  let xSideSnowball = fakeSnowballAfterThrowPosition.left;

  let ySideSnowball = fakeSnowballAfterThrowPosition.top;

  let xTriangleBetweenSnowballAndSwitch;
  let yTriangleBetweenSnowballAndSwitch;

  if (xSideSnowball > xSideSwitch) {
    xTriangleBetweenSnowballAndSwitch = xSideSnowball - xSideSwitch;
  } else if (xSideSnowball < xSideSwitch) {
    xTriangleBetweenSnowballAndSwitch = xSideSwitch - xSideSnowball;
  }

  if (ySideSnowball > ySideSwitch) {
    yTriangleBetweenSnowballAndSwitch = ySideSnowball - ySideSwitch;
  } else if (ySideSnowball < ySideSwitch) {
    yTriangleBetweenSnowballAndSwitch = ySideSwitch - ySideSnowball;
  }

  const distanceBetweenSnowballAndSwitch = Math.sqrt(
    Math.pow(xTriangleBetweenSnowballAndSwitch, 2) +
      Math.pow(yTriangleBetweenSnowballAndSwitch, 2),
  );

  if (distanceBetweenSnowballAndSwitch < 50) {
    switchIsHit(switchON);
  }
};

snowball.addEventListener("click", () => {
  console.log(isArrowOn);
  if (isArrowOn == true) {
    checkingIfSwitchGotHit(firstSwitch, fakeSnowball);
    checkingIfSwitchGotHit(secondSwitch, fakeSnowball);
    checkingIfSwitchGotHit(thirdSwitch, fakeSnowball);
  }
});

const snowballOpacity = (element) => {
  let increment = 0.025;
  let opacity = 0;
  let instance = window.setInterval(() => {
    element.style.opacity = opacity;
    opacity = opacity + increment;
    if (opacity > 1) {
      window.clearInterval(instance);
    }
  }, 30);
};

///------------ ARROW CLICKED MAIN FUNCTION ------------///

directionsArrows.forEach((arrow) => {
  arrow.addEventListener("click", (e) => {
    changeAllArrowsOpacity();

    arrowClicked = e.target;

    arrowClicked.style.opacity = 1;
    isArrowOn = true;

    addingRectangleForSnowballDirection(arrowClicked);

    getTheAngle(rectangleArrowHeight, rectangleArrowWidth);
    newWidthCalc(angle);
    createFakeSnowball();

    definingDirectionOfThrow(newWidth);

    animationSnowball();
    // const distanceBetweenSnowballAndSwitch1 = checkingIfSwitchGotHit(
    //   firstSwitch,
    //   fakeSnowball,
    // );
    // const distanceBetweenSnowballAndSwitch2 = checkingIfSwitchGotHit(
    //   secondSwitch,
    //   fakeSnowball,
    // );
    // const distanceBetweenSnowballAndSwitch3 = checkingIfSwitchGotHit(
    //   thirdSwitch,
    //   fakeSnowball,
    // );

    // distancesBallToSwitch={
    //   1:dista..
    //   2:distance..

    // }

    // distancesBallToSwitch[1] = distanceBetweenSnowballAndSwitch1;
    // distancesBallToSwitch[2] = distanceBetweenSnowballAndSwitch2;
    // distancesBallToSwitch[3] = distanceBetweenSnowballAndSwitch3;

    // main
    // develop
    // git checkout -b develop
    //git merge develop main
    //git checkout main

    //const foo = (a,b) => a + b
    // foo(1,2,3,4,5,6)
    // checkingIfSwitchGotHit(secondSwitch);
    // checkingIfSwitchGotHit(thirdSwitch);
    removeHoverListeners();
  });
});

///------------ UNCLICKING ARROWS ------------///

const clickOutside = (e) => {
  if (!e.target.classList.contains("arrows__arrow")) {
    console.log("target doesn't include");
    removeHoverListeners();
    addHoverListeners();
    directionsArrows.forEach((arrow) => {
      arrow.style.opacity = 0.1;
    });
  }
};

theBody.addEventListener("click", clickOutside);

directionsArrows.forEach((arrow) => {
  arrow.addEventListener("dblclick", () => {
    removeHoverListeners();
    addHoverListeners();

    arrow.style.opacity = 0.1;
  });
});
///------------ SWITCH IS HIT ------------///
console.log(document.querySelector(".lamps__first"));

const switchIsHit = (switchHit) => {
  setTimeout(() => {
    snowball.style.opacity = 0;
    snowballOpacity(snowball);
    counterHits++;

    if (counterHits == 1) {
      theBody.style.backgroundColor = "#616b84";
    } else if (counterHits == 2) {
      theBody.style.backgroundColor = "#2e292f";
    } else if (counterHits == 3) {
      theBody.style.backgroundColor = "#221f23";
    }
    console.log(document.querySelector(".lamps__first"));

    switchHit.classList.add("notactive");
    console.log(switchHit);
    if (switchHit == firstSwitch) {
      console.log(document.querySelector(".lamps__first"));

      document.querySelector(".lamps__first").style.height = "800px";
      document.querySelector(".lamps__first").style.opacity = 1;
      document.querySelector(".lamps__first").remove("notactive");
      firstSwitchOff.classList.remove("notactive");
    } else if (switchHit == secondSwitch) {
      secondSwitchOff.classList.remove("notactive");
    } else if (switchHit == thirdSwitch) {
      thirdSwitchOff.classList.remove("notactive");
    }
  }, 1000);
};
