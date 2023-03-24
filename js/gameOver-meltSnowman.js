import { textOpacityToggle } from "./text";

///------------ SWITCH IS NOT HIT ------------///

const meltedSnowman1 = document.querySelector(".meltedSnowman__meltedSnowman1");
const meltedSnowman2 = document.querySelector(".meltedSnowman__meltedSnowman2");
const meltedSnowman3 = document.querySelector(".meltedSnowman__meltedSnowman3");
const meltedSnowman4 = document.querySelector(".meltedSnowman__meltedSnowman4");
const meltedSnowman5 = document.querySelector(".meltedSnowman__meltedSnowman5");
const meltedSnowman6 = document.querySelector(".meltedSnowman__meltedSnowman6");
const snowball = document.querySelector(`[data-id = "snowball"]`);
const playAgainBtnWrapper = document.querySelector(
  ".main__btnPlayAgain-wrapper",
);
const playAgainBtn = document.querySelector(
  ".btnPlayAgain-wrapper__btnPlayAgain",
);
const throwMechanicsWrapper = document.getElementById(
  "throw-mechanics-wrapper",
);
const sliderWrapper = document.querySelector(".choose-power-wrapper");
export const gameOver = (
  textInfo,
  snowball,
  throwMechanicsWrapper,
  sliderWrapper,
  text,
) => {
  meltedSnowman1.classList.add("notactive");
  meltedSnowman2.classList.add("notactive");
  meltedSnowman3.classList.add("notactive");
  meltedSnowman4.classList.add("notactive");
  meltedSnowman5.classList.add("notactive");
  meltedSnowman6.classList.remove("notactive");
  playAgainBtnWrapper.classList.remove("notactive");
  playAgainBtn.classList.remove("notactive");
  playAgainBtn.addEventListener("click", () => {
    window.location.reload();
  });
  snowball.style.opacity = 0;
  throwMechanicsWrapper.style.opacity = 0;
  throwMechanicsWrapper.style.zIndex = -100;
  sliderWrapper.style.opacity = 0;
  textInfo.innerText = text;
  textInfo.style.opacity = 1;
};

export const meltSnowmaGraphicsSteps = (count, textInfo) => {
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
    gameOver(
      textInfo,
      snowball,
      throwMechanicsWrapper,
      sliderWrapper,
      "Game over! Snowman melted :/\nTry again!",
    );
  }
};
