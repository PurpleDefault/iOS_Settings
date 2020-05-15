const toggle = document.querySelector('#toggleButton');
let nightMode = false;

const bodyBg = document.querySelector('body');
const containBg = document.querySelector('.settings-container');
const searchColor = document.querySelector('#searchHeading');
const iconsBg = document.querySelectorAll('.iconSets');
const userBg = document.querySelector('.userProfile');

toggle.addEventListener("click", toggleMode);

function toggleMode() {
  if (nightMode == false) {
    bodyBg.style.backgroundColor = "#FFFFFF";
    bodyBg.style.color = "#FFFFFF";
    searchColor.style.color = "#FFFFFF";
    containBg.style.backgroundColor = "#5E6165";
    userBg.style.backgroundColor = "#999EA1";
    for (let i = 0; i < 3; i ++) {
      iconsBg[i].style.backgroundColor = "#999EA1";
    }
    return nightMode = true;
  } else {
    bodyBg.style.backgroundColor = "#222222";
    bodyBg.style.color = "#7C8084";
    searchColor.style.color = "#484D53";
    containBg.style.backgroundColor = "#DBE0E4";
    userBg.style.backgroundColor = "#FFFFFF";
    for (let i = 0; i < 3; i ++) {
      iconsBg[i].style.backgroundColor = "#FFFFFF";
    }
    return nightMode = false;
  }
}
