import { removeHoverListeners } from "./hovers";
import { addHoverListeners } from "./hovers";

const directionsArrows = document.querySelectorAll(".arrows__arrow");
export const clickOutside = (e, isArrowOn) => {
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
