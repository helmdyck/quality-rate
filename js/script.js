const container = document.querySelector(".container");
const initial = document.querySelector(".initial");
const thanks = document.querySelector(".thanks");
const ratingBubbles = document.querySelectorAll(".rating-bubble");
const submitButton = document.querySelector(".submit");
const tknRate = document.getElementById("tkn_rate");

ratingBubbles.forEach(function(bubble) {
    bubble.addEventListener("click", function() {
        ratingBubbles.forEach(function(bubble) {
            bubble.classList.remove("selected");
        })

        bubble.classList.add("selected");
        ratingValue = bubble.textContent;

    })
});

submitButton.addEventListener("click", function() {
    if (ratingValue > 0) {
        initial.style.display = "none";
        thanks.style.display = "flex";
        tknRate.textContent = "You selected " + ratingValue + " out of 5";
    } else {
        alert("Please, select rating before submit.");
    }
});