const favesButtons = document.querySelectorAll(".faves")

function alertFaves(event) {
    console.log("worked");
    event.preventDefault();
    alert(`My favorite ${event.target.id} is ${event.target.value}`);
}

for (let i = 0; i < favesButtons.length; i++) {
    favesButtons[i].addEventListener('click',alertFaves)
}


