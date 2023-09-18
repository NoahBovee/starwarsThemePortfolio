/* FLIP CARDS */

const flipCards = document.querySelectorAll(".flip-card");
let flippedCard = null;

flipCards.forEach(flipCard => {
  flipCard.addEventListener("click", () => {
    if (flippedCard !== null && flippedCard !== flipCard) {
      flippedCard.style.transform = "rotateY(0deg)";
    }
    if (flippedCard !== flipCard) {
      flipCard.style.transform = "rotateY(180deg)";
      flippedCard = flipCard;
    } else {
      flipCard.style.transform = "rotateY(0deg)";
      flippedCard = null;
    }

    console.log("click");
  });
});
