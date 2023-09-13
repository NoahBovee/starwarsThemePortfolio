/* FLIP CARDS */

const flipCards = document.querySelectorAll(".flip-card");
let flippedCard = null;

flipCards.forEach(flipCard => {
  flipCard.addEventListener("click", () => {
    if (flippedCard !== null && flippedCard !== flipCard) {
      // Rotate the previously flipped card back to its original state
      flippedCard.style.transform = "rotateY(0deg)";
    }

    if (flippedCard !== flipCard) {
      // Flip the clicked card
      flipCard.style.transform = "rotateY(180deg)";
      flippedCard = flipCard;
    } else {
      // Clicked on the same card again, rotate it back to its original state
      flipCard.style.transform = "rotateY(0deg)";
      flippedCard = null;
    }

    console.log("click");
  });
});
