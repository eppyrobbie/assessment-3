console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Form Submitted');
}

function imgComp(){
	alert('I like your shirt today')
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

let comp = document.querySelector('img')

comp.addEventListener('mouseover', imgComp)