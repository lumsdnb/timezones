const inputSlider = document.querySelector('.slider-input');

const zoneSelected = (e) => {
  const xClick = Math.round((e.x / window.screen.width) * 24);
  inputSlider.value = xClick;
  console.log(xClick);
  console.log(inputSlider);
};

document.body.addEventListener('click', zoneSelected, true);
