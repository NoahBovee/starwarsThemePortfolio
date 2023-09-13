/* ANIMATION BUTTON */
const body = document.getElementsByTagName("BODY")[0];
const animButton = document.querySelector(".animation-button");
const starwarsAnimation = document.querySelector(".crawl");
const audioTheme = new Audio(
  "./assets/8d82b5_Star_Wars_Main_Theme_Song (mp3cut.net).mp3"
);
const audioSaber = new Audio("./assets/power-up-2-lightsaber.mp3");

const swSection = document.querySelector(".star-wars");
const titleP = document.querySelector(".title-p");
const titleH = document.querySelector(".title-h");

animButton.addEventListener("click", () => {
  audioSaber.play();
  animButton.classList.add("slide-animation");
  animButton.style.backgroundColor = "blueviolet";
  animButton.style.visibility = "hidden";
  // body.style.overflowY = "visible";

  setTimeout(() => {
    swSection.style.perspective = "400px";
    titleP.style.visibility = "visible";
    titleH.style.visibility = "visible";
    starwarsAnimation.style.animationPlayState = "running";

    audioTheme.play();
  }, 1000);
});
