import { readPowerOfThrow } from "./slider";

export const definingDirectionOfThrow = (
  arrow,
  fakeSnowball,
  ball,

  allArrows,
  sliderPower,
  textSlider,
) => {
  let rectangleArrow = document.createElement("div");
  let arrowPosition = arrow.getBoundingClientRect();

  let arrowPositionHeight = arrowPosition.height;

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

  let rectangleArrowPosition = rectangleArrow.getBoundingClientRect();

  let rectangleArrowHeight = parseFloat(rectangleArrow.style.height);
  let rectangleArrowWidth = parseFloat(rectangleArrow.style.width);
  let angle = Math.atan(rectangleArrowHeight / rectangleArrowWidth);

  let snowballPosition = ball.getBoundingClientRect();
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
  let newHeight =
    rectangleArrowHeight + readPowerOfThrow(sliderPower, textSlider);

  let newWidth = newHeight / Math.tan(angle);

  rectangleArrow.style.height = newHeight + "px";
  rectangleArrow.style.width = newWidth + "px";
  rectangleArrow.style.transform = `translateY(-${
    newHeight - arrowPositionHeight
  }px)`;

  let snowballTranslateX = rectangleArrow.style.width;
  let snowballTranslateY = rectangleArrow.style.height;
  let directionOfThrow;
  for (let i = 1; i < 7; i++) {
    if (arrow == allArrows[i]) {
      fakeSnowball.style.transform = `translateX(${snowballTranslateX}) translateY(-${snowballTranslateY}) `;
      directionOfThrow = () => {
        let directionsForSnowball = [
          parseFloat(snowballTranslateX),
          -parseFloat(snowballTranslateY),
        ];
        return directionsForSnowball;
      };
    }
  }

  if (arrow == allArrows[0]) {
    fakeSnowball.style.transform = `translateX(${snowballTranslateX}) translateY(-${snowballTranslateY}) `;
    directionOfThrow = () => {
      let directionsForSnowball = [0, -parseFloat(snowballTranslateY)];
      return directionsForSnowball;
    };
  }

  for (let i = 7; i < 14; i++) {
    if (arrow == allArrows[i]) {
      fakeSnowball.style.transform = `translateX(-${snowballTranslateX}) translateY(-${snowballTranslateY}) `;
      directionOfThrow = () => {
        let directionsForSnowball = [
          -parseFloat(snowballTranslateX),
          -parseFloat(snowballTranslateY),
        ];
        return directionsForSnowball;
      };
    }
  }
  return directionOfThrow();
};
