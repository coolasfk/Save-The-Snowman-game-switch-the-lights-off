export const textOpacityToggle = (item, time1, time2) => {
  console.log(`this is time ${time2}`);
 setTimeout(() => item.classList.add("active"), time1);

  setTimeout(() => item.classList.remove("active"), time2);


};
