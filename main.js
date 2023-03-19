("use strict");
import { changeAllArrowsOpacity } from "./hovers.js";
import { addHoverListeners } from "./hovers.js";
import { removeHoverListeners } from "./hovers.js";
import { readPowerOfThrow } from "./slider.js";
import { textOpacityToggle } from "./text.js";
import { definingDirectionOfThrow } from "./directionsOfThrow.js";

///------------ DOM ITEMS ------------///

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

const snowballThrow = document.querySelector(".snowball-wrapper__snowball");
const firstSwitch = document.getElementById("firstSwitch-ON");

const secondSwitch = document.getElementById("secondSwitch");
const thirdSwitch = document.getElementById("thirdSwitch");
const firstSwitchOff = document.getElementById("firstSwitch-OFF");
const secondSwitchOff = document.getElementById("secondSwitch-OFF");
const thirdSwitchOff = document.getElementById("thirdSwitch-OFF");

const firstLampBroken = document.getElementById("lamp-first-broken");
const secondLampBroken = document.getElementById("lamp-second-broken");
const thirdLampBroken = document.getElementById("lamp-third-broken");

const textInfo = document.getElementById("text-info");
const textSlider = document.querySelector(".choose-power-wrapper__power-text");

let sliderPower = document.querySelector(".choose-power-wrapper__slider");

const snowball = document.querySelector(`[data-id = "snowball"]`);
const textOnSnowball = document.querySelector(`[data-id = "snowball-text"]`);

const sliderBall = document.querySelector(".choose-power-wrapper__slider");

const fakeSnowball = document.createElement("div");

// let allArrows = [...document.querySelector(`[data-id="allArrows"]`).childNodes];
let allArrows = [...document.querySelectorAll(`.arrows__arrow`)];

console.log("just  found allArrows: ", allArrows);

const throwMechanicsWrapper = document.getElementById(
  "throw-mechanics-wrapper",
);
const sliderWrapper = document.querySelector(".choose-power-wrapper");
const theBody = document.querySelector(".main");

///------------ GLOBAL VARIABLES ------------///

let isArrowOn = false;

let counterHits = 0;
let requiredDistanceBallSwitch = 150;
let counterMeltingSnowman = 0;

let counterMiss;

let isSnowballAnimationOn = false;
let arrowClicked = false;
// let rectangleArrowPosition = {};

///------------ FUNCTIONS HOOVERING EVENTS ------------///

isArrowOn = addHoverListeners(directionsArrows);

// /------------ SLIDER-POWER ------------/
sliderPower.addEventListener("change", () => {
  readPowerOfThrow(sliderPower, textSlider);
});

let power = readPowerOfThrow(sliderPower, textSlider);

///------------ INFO-TEXT FUNCTIONS ------------///

window.addEventListener("load", () => {
  textOpacityToggle(textInfo, 500, 5000);
});

///------------ FUNCTIONS FOR ARROW CLICKED - HANDLING SNOWBALL ------------///

const animationSnowball = (arrow, fakeBall, ball) => {
  isSnowballAnimationOn = true;

  let [finalMoveX, finalMoveY] = definingDirectionOfThrow(
    arrow,
    fakeBall,
    ball,
    // sliderPower, //readPower?
    allArrows,
    sliderPower,
    textSlider,
  );
  console.log("returned data:", finalMoveX, finalMoveY);
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
  } else if (isArrowOn == false) {
    textInfo.innerText = "click the direction arrows first";
    textOpacityToggle(textInfo, 500, 3000);
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
    arrowClicked.style.stroke = "white";
    arrowClicked.style.strokeWidth = "1vw";
    isArrowOn = true;

    animationSnowball(arrowClicked, fakeSnowball, snowball);

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
    isArrowOn = addHoverListeners(directionsArrows);
    directionsArrows.forEach((arrow) => {
      arrow.style.opacity = 0.1;
      arrow.style.stroke = "unset";
      arrow.style.stoke = "transparent";
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
  textOnSnowball.style.opacity = 0;
  setTimeout(() => {
    snowball.style.opacity = 0;
    textOnSnowball.style.opacity = 1;

    counterHits++;

    if (counterHits == 1) {
      textOpacityToggle(textInfo, 500, 3000);

      textInfo.innerText = `One down!\nTwo more to go!`;

      theBody.style.backgroundColor = "#474c59";
    } else if (counterHits == 2) {
      textOpacityToggle(textInfo, 500, 3000);
      textInfo.innerText = "Yay snowman is really happy!\nHit one more!";

      theBody.style.backgroundColor = "#3a3e46";
    } else if (counterHits == 3) {
      snowball.style.opacity = 0;
      throwMechanicsWrapper.style.opacity = 0;
      throwMechanicsWrapper.style.zIndex = -100;
      sliderWrapper.style.opacity = 0;
      textOpacityToggle(textInfo, 500, 99000);
      textInfo.innerText =
        "Congrats! By saving electricity you contribute\n to less global warming and more happy snowmen!";
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
      gameOver("Game over!\nDestroying lamps is ver bad for environment :/");
    } else if (switchHit == secondLampON) {
      console.log("lamp got hit");
      secondLampON.classList.add("notactive");
      secondLampBroken.classList.remove("notactive");
      gameOver("Game over!\nDestroying lamps is ver bad for environment :/");
    } else if (switchHit == thirdLampON) {
      console.log("lamp got hit");
      thirdLampON.classList.add("notactive");
      thirdLampBroken.classList.remove("notactive");
      gameOver("Game over!\nDestroying lamps is ver bad for environment :/");
    }
  }, 1000);
};

///------------ SWITCH IS NOT HIT ------------///

const meltSnowmaGraphicsSteps = (count) => {
  if (count == 1) {
    textOpacityToggle(textInfo, 500, 3000);
    textInfo.innerText =
      "Oh no! Snowman is melting!\nAim at the switches to save it!";

    meltedSnowman1.classList.add("notactive");
    meltedSnowman2.classList.remove("notactive");
  } else if (count == 2) {
    textInfo.innerText = "You can do better!";
    textOpacityToggle(textInfo, 500, 3000);
    meltedSnowman2.classList.add("notactive");
    meltedSnowman3.classList.remove("notactive");
  } else if (count == 3) {
    textInfo.innerText = "Try again!\nYou can do it :)";
    textOpacityToggle(textInfo, 500, 3000);
    meltedSnowman3.classList.add("notactive");
    meltedSnowman4.classList.remove("notactive");
  } else if (count == 4) {
    textInfo.innerText = "Focus!\nYou have one more chance!";
    textOpacityToggle(textInfo, 500, 3000);
    meltedSnowman4.classList.add("notactive");
    meltedSnowman5.classList.remove("notactive");
  } else if (count == 5) {
    gameOver("Game over! Snowman melted :/\nTry again!");
  }
};

const gameOver = (text) => {
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
  textInfo.innerText = text;
  textInfo.style.opacity = 1;
};
