// /------------ SLIDER-POWER ------------/
// const sliderPower = document.querySelector(".choose-power-wrapper__slider");
// const textSlider = document.querySelector(".choose-power-wrapper__power-text");

export const readPowerOfThrow = (item, text) => {
  let powerOfThrow = Math.round(item.value);
  text.innerText = `your power is: ${Math.round(powerOfThrow / 10)} `;
  console.log(powerOfThrow);
  return powerOfThrow;
};
