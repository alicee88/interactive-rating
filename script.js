const ratingButtons = document.querySelectorAll('.rating-button');
const submitButton = document.querySelector('#submit');
const ratingComponent = document.querySelector('#rating-component');
const thanksComponent = document.querySelector('#thanks-component');
const ratingDisplay = document.querySelector('#score');
let ratingScore = 0;

ratingButtons.forEach(button => button.addEventListener('click', setRating));
submitButton.addEventListener('click', submitRating);

function setRating(e) {
    ratingButtons.forEach(button => {
        button.classList.remove('selected');
        button.disabled = false;

    });
    e.target.classList.add('selected');
    e.target.disabled = true;
    ratingScore = e.target.value;
}

function submitRating(e) {
    ratingComponent.style.display = 'none';
    thanksComponent.style.display = 'flex';
    ratingDisplay.textContent = ratingScore;
}
