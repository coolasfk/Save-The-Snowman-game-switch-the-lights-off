///------------ VARIABLES ITEMS FROM DOM ------------///

const directionsArrows = document.querySelectorAll(".arrows__arrow");

const meltedSnowman1 = document.querySelector(".meltedSnowman__meltedSnowman1");
const meltedSnowman2 = document.querySelector(".meltedSnowman__meltedSnowman2");
const meltedSnowman3 = document.querySelector(".meltedSnowman__meltedSnowman3");
const meltedSnowman4 = document.querySelector(".meltedSnowman__meltedSnowman4");
const meltedSnowman5 = document.querySelector(".meltedSnowman__meltedSnowman5");
const meltedSnowman6 = document.querySelector(".meltedSnowman__meltedSnowman6");

const firstLampON = document.getElementById("lamp-first-on");

const secondLampON = document.getElementById("lamp-second-on");
const thirdLampON = document.getElementById("lamp-third-on");

const firstLampOFF = document.getElementById("lamp-first-off");
const secondLampOFF = document.getElementById("lamp-second-off");
const thirdLampOFF = document.getElementById("lamp-third-off");

const snowballThrow = document.querySelector(
  ".throw-mechanics-wrapper__snowball",
);
const firstSwitch = document.getElementById("firstSwitch-ON");

const secondSwitch = document.getElementById("secondSwitch");
const thirdSwitch = document.getElementById("thirdSwitch");
const firstSwitchOff = document.getElementById("firstSwitch-OFF");
const secondSwitchOff = document.getElementById("secondSwitch-OFF");
const thirdSwitchOff = document.getElementById("thirdSwitch-OFF");

const firstLampBroken = document.getElementById("lamp-first-broken");
const secondLampBroken = document.getElementById("lamp-second-broken");
const thirdLampBroken = document.getElementById("lamp-third-broken");

console.log("before showing textinfo");
const textInfo = document.getElementById("text-info");
let sliderPower = document.querySelector(".choose-power-wrapper__slider");

const snowball = document.querySelector(`[data-id = "snowball"]`);
const fakeSnowball = document.createElement("div");

let allArrows = document.querySelector(`[data-id="allArrows"]`).childNodes;

const throwMechanicsWrapper = document.getElementById(
  "throw-mechanics-wrapper",
);
const sliderWrapper = document.querySelector(".choose-power-wrapper");
const theBody = document.querySelector(".main");

///------------ GLOBAL VARIABLES ------------///

let isArrowOn = false;
let rectangleArrowAngle;

let arrowClicked = {};

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
let requiredDistanceBallSwitch = 150;
let counterMeltingSnowman = 0;

let counterMiss;
let directionOfThrow; /// how to show function
let newWidth = 0;
let isSnowballAnimationOn = false;

///------------ FUNCTIONS HOOVERING EVENTS ------------///

const changeAllArrowsOpacity = (item) => {
  for (let i = 0; i < item.length; i++) {
    if (i % 2 == !0) {
      item[i].style.opacity = "0.1";
    }
  }
};

const pointerOverEvent = (e) => {
  e.target.style.opacity = 0.3;
};

const mouseLeaveEvent = (e) => {
  setTimeout(() => {
    e.target.style.opacity = 0.1;
  }, "1000");
};

const addHoverListeners = (element) => {
  isArrowOn = false;
  element.forEach((arrow) => {
    arrow.addEventListener("pointerover", pointerOverEvent);
  });

  element.forEach((arrow) => {
    arrow.addEventListener("mouseleave", mouseLeaveEvent);
  });
};

const removeHoverListeners = (element) => {
  element.forEach((arrow) => {
    arrow.removeEventListener("pointerover", pointerOverEvent);
    arrow.removeEventListener("mouseleave", mouseLeaveEvent);
  });
};
addHoverListeners(directionsArrows);

///------------ SLIDER-POWER ------------///

sliderPower.addEventListener("change", () => {
  readPowerOfThrow(sliderPower);
});

const readPowerOfThrow = (item) => {
  powerOfThrow = Math.round(item.value);
};

///------------ INFO-TEXT FUNCTIONS ------------///

window.addEventListener("load", () => {
  textOpacityToggle(textInfo);
});

const textOpacityToggle = (item) => {
  //setTimeout(())

  setTimeout(() => item.classList.add("active"), 500);

  setTimeout(() => item.classList.remove("active"), 2500);
};
// textOpacityToggle(textInfo);

///------------ FUNCTIONS FOR ARROW CLICKED - HANDLING SNOWBALL ------------///

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
  fakeSnowball.style.zIndex = 900;

  fakeSnowball.style.backgroundColor = "green";
  document.querySelector(".footer").append(fakeSnowball);
};

const newWidthCalc = (angle) => {
  newHeight = rectangleArrowHeight + powerOfThrow;
  newWidth = newHeight / Math.tan(angle);

  return newWidth;
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
  isSnowballAnimationOn = true;
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

  snowballThrow.style.animationTimingFunction = "ease-out";

  snowballThrow.addEventListener("click", () => {
    if (isArrowOn == true) {
      snowballThrow.animate(throwingSnowBall, throwingSnowBallTiming);
    }
  });
};
const checkingIfSwitchGotHit = (switchON, snowball) => {
  console.log(switchON);
  let switchPosition = switchON.getBoundingClientRect();
  let xSideSwitch = switchPosition.left;
  let ySideSwitch = switchPosition.bottom;

  let fakeSnowballAfterThrowPosition = snowball.getBoundingClientRect();

  let xSideSnowball = fakeSnowballAfterThrowPosition.left;

  let ySideSnowball = fakeSnowballAfterThrowPosition.bottom;

  let xTriangleBetweenSnowballAndSwitch;
  let yTriangleBetweenSnowballAndSwitch;
  xTriangleBetweenSnowballAndSwitch = xSideSwitch - xSideSnowball;
  yTriangleBetweenSnowballAndSwitch = ySideSwitch - ySideSnowball;

  const distanceBetweenSnowballAndSwitch = Math.sqrt(
    Math.pow(xTriangleBetweenSnowballAndSwitch, 2) +
      Math.pow(yTriangleBetweenSnowballAndSwitch, 2),
  );

  if (distanceBetweenSnowballAndSwitch < requiredDistanceBallSwitch) {
    switchIsHit(
      switchON,
      firstLampON,
      firstLampOFF,
      secondLampON,
      secondLampOFF,
      thirdLampON,
      thirdLampOFF,
      firstSwitch,
      secondSwitch,
      thirdSwitch,
      firstLampBroken,
      secondLampBroken,
      thirdLampBroken,
      snowball,
    );

    console.log("hit");
  } else if (
    (isSnowballAnimationOn =
      true && distanceBetweenSnowballAndSwitch > requiredDistanceBallSwitch)
  ) {
    // isSnowballAnimationOn = false;
    counterMiss++;
  }

  if (counterMiss == 6) {
    counterMeltingSnowman++;
    console.log("miss");
  }

  meltSnowmaGraphicsSteps(counterMeltingSnowman);
};

snowball.addEventListener("click", () => {
  console.log(isArrowOn);
  if (isArrowOn == true) {
    counterMiss = 0;
    checkingIfSwitchGotHit(firstSwitch, fakeSnowball, switchIsHit);
    checkingIfSwitchGotHit(secondSwitch, fakeSnowball, switchIsHit);
    checkingIfSwitchGotHit(thirdSwitch, fakeSnowball, switchIsHit);
    checkingIfSwitchGotHit(firstLampON, fakeSnowball, switchIsHit);
    checkingIfSwitchGotHit(secondLampON, fakeSnowball, switchIsHit);
    checkingIfSwitchGotHit(thirdLampON, fakeSnowball, switchIsHit);
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
    changeAllArrowsOpacity(allArrows);

    arrowClicked = e.target;

    arrowClicked.style.opacity = 1;
    isArrowOn = true;

    addingRectangleForSnowballDirection(arrowClicked);

    getTheAngle(rectangleArrowHeight, rectangleArrowWidth);
    newWidthCalc(angle);
    createFakeSnowball();

    definingDirectionOfThrow(newWidth);

    animationSnowball();

    removeHoverListeners(directionsArrows);
  });
});

///------------ UNCLICKING ARROWS ------------///

const clickOutside = (e) => {
  if (
    !e.target.classList.contains("arrows__arrow") &&
    !(e.target.getAttribute("data-clickable-arrow") == "false")
  ) {
    removeHoverListeners(directionsArrows);
    addHoverListeners(directionsArrows);
    directionsArrows.forEach((arrow) => {
      arrow.style.opacity = 0.1;
    });
  }
};

theBody.addEventListener("click", clickOutside);

directionsArrows.forEach((arrow) => {
  arrow.addEventListener("dblclick", () => {
    removeHoverListeners(directionsArrows);
    addHoverListeners(directionsArrows);

    arrow.style.opacity = 0.1;
  });
});
///------------ SWITCH IS HIT ------------///

const switchIsHit = (
  switchHit,
  firstLampON,
  firstLampOFF,
  secondLampON,
  secondLampOFF,
  thirdLampON,
  thirdLampOFF,
  firstSwitch,
  secondSwitch,
  thirdSwitch,
  firstLampBroken,
  secondLampBroken,
  thirdLampBroken,
  snowball,
) => {
  console.log(switchHit);
  setTimeout(() => {
    snowball.style.opacity = 0;
    counterHits++;

    if (counterHits == 1) {
      textOpacityToggle(textInfo);
      textInfo.textContent = "One down! Two more to go!";

      theBody.style.backgroundColor = "#474c59";
    } else if (counterHits == 2) {
      textOpacityToggle(textInfo);
      textInfo.textContent = "Yay snowman is really happy! Hit one more!";

      theBody.style.backgroundColor = "#3a3e46";
    } else if (counterHits == 3) {
      snowball.style.opacity = 0;
      throwMechanicsWrapper.style.opacity = 0;
      throwMechanicsWrapper.style.zIndex = -100;
      sliderWrapper.style.opacity = 0;
      textOpacityToggle(textInfo);
      textInfo.textContent =
        "congrats! By saving electricity you contribute to less global warming and more snow!";
    }

    switchHit.classList.add("notactive");

    if (switchHit == firstSwitch) {
      firstLampON.classList.add("notactive");
      firstLampOFF.classList.remove("notactive");

      firstSwitchOff.classList.remove("notactive");
    } else if (switchHit == secondSwitch) {
      secondLampON.classList.add("notactive");
      secondLampOFF.classList.remove("notactive");
      secondSwitchOff.classList.remove("notactive");
    } else if (switchHit == thirdSwitch) {
      thirdLampON.classList.add("notactive");
      thirdLampOFF.classList.remove("notactive");
      thirdSwitchOff.classList.remove("notactive");
    } else if (switchHit == firstLampON) {
      counterMeltingSnowman = 5;
      console.log("lamp got hit");
      firstLampON.classList.add("notactive");
      firstLampBroken.classList.remove("notactive");
      gameOver();
    } else if (switchHit == secondLampON) {
      console.log("lamp got hit");
      secondLampON.classList.add("notactive");
      secondLampBroken.classList.remove("notactive");
      gameOver();
    } else if (switchHit == thirdLampON) {
      console.log("lamp got hit");
      thirdLampON.classList.add("notactive");
      thirdLampBroken.classList.remove("notactive");
      gameOver();
    }
  }, 1000);
};

///------------ SWITCH IS NOT HIT ------------///

const meltSnowmaGraphicsSteps = (count) => {
  if (count == 1) {
    textOpacityToggle(textInfo);
    textInfo.textContent =
      "Oh no! Snowman is melting! Aim at the switches to save it!";

    meltedSnowman1.classList.add("notactive");
    meltedSnowman2.classList.remove("notactive");
  } else if (count == 2) {
    textInfo.textContent = "Try harder! You can do it!";
    textOpacityToggle(textInfo);
    meltedSnowman2.classList.add("notactive");
    meltedSnowman3.classList.remove("notactive");
  } else if (count == 3) {
    textInfo.textContent = "Try harder! You can do it!";
    textOpacityToggle(textInfo);
    meltedSnowman3.classList.add("notactive");
    meltedSnowman4.classList.remove("notactive");
  } else if (count == 4) {
    textInfo.textContent = "Try harder! You can do it!";
    textOpacityToggle(textInfo);
    meltedSnowman4.classList.add("notactive");
    meltedSnowman5.classList.remove("notactive");
  } else if (count == 5) {
    gameOver();
  }
};

const gameOver = () => {
  meltedSnowman1.classList.add("notactive");
  meltedSnowman2.classList.add("notactive");
  meltedSnowman3.classList.add("notactive");
  meltedSnowman4.classList.add("notactive");
  meltedSnowman5.classList.add("notactive");
  meltedSnowman6.classList.remove("notactive");

  snowball.style.opacity = 0;
  throwMechanicsWrapper.style.opacity = 0;
  throwMechanicsWrapper.style.zIndex = -100;
  sliderWrapper.style.opacity = 0;
  textInfo.textContent = "GAME OVER\nhitting lamps is not a solution!";
  textInfo.style.opacity = 1;
};
