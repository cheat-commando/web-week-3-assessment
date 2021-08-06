const randoRecommendButton = document.querySelector('button');

function randoRecommendation() {
    const options = document.querySelectorAll('.option')
    const index = Math.floor(Math.random() * options.length)
    alert(`You should go to ${options[index].firstChild.textContent}!`)
}

randoRecommendButton.addEventListener('click',randoRecommendation)