const zoneSelected = (e) => {
  console.log((e.screenX / window.screen.width) * 24);
  //window.screen.width;
  //window.screen.height;
};

document.body.addEventListener('click', zoneSelected, true);
