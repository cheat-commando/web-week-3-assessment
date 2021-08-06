console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("You have successfully submitted the form.")
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

function pictureCompliment() {
	alert("Your toes are just the cutest!!")
}

const pic = document.querySelector('img');

pic.addEventListener('mouseover',pictureCompliment)