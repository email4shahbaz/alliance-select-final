// Initialize Animation on Scroll
AOS.init();

// Initialize Lozad
//const observer = lozad();
//observer.observe();

const preloader=document.querySelector('#preloader');
const pageOverlay = document.querySelector('#page-overlay');
const navList = document.querySelector('.nav-list');

document.addEventListener("DOMContentLoaded", function () {
	const modalOverlay = document.createElement("div");
	modalOverlay.className = "model-fade-bg";
	document.body.appendChild(modalOverlay);

	modalOverlay.addEventListener('click', () => {
		document.body.classList.remove('mobile-menu-active');
		document.querySelector('.nav-list').classList.remove('active')
	});



	document.querySelectorAll(".menu-item").forEach((item)=>{
		item.addEventListener("click", function(){
			this.classList.add("active");
		})

		item.addEventListener("mouseleave", function(){
			this.classList.remove("active");
		})
	})
});




//Form Validations
const validateContactForm=()=>{
	let isValid = true;

	const name = document.querySelector('#name');
	const email = document.querySelector('#email');
	const contactNumber = document.querySelector('#contactNumber');
	const subject = document.querySelector('#subject');
	const message = document.querySelector('#message');

	const nameError = document.querySelector('#nameError');
	const emailError = document.querySelector('#emailError');
	const contactError = document.querySelector('#contactError');
	const subjectError = document.querySelector('#subjectError');
	const messageError = document.querySelector('#messageError');

	if (!name.value.trim()) {
		nameError.style.display="block";
		nameError.textContent = "Please enter a name";
		isValid = false;
	} else {
		nameError.textContent = "";
	}
	
	if (!email.value.trim() || !email.validity.valid) {
		emailError.style.display="block";
		emailError.textContent = "A valid email id is required";
		isValid = false;
	} else {
		emailError.textContent = "";
	}

	if (!contactNumber.value.trim()) {
		contactError.style.display="block";
		contactError.textContent = "Please enter a contact number";
		isValid = false;
	} else {
		contactError.textContent = "";
	}

	if (!subject.value.trim()) {
		subjectError.style.display="block";
		subjectError.textContent = "Please enter a subject";
		isValid = false;
	} else {
		subjectError.textContent = "";
	}

	if (!message.value.trim()) {
		messageError.style.display="block";
		messageError.textContent = "Please enter a message";
		isValid = false;
	} else {
		messageError.textContent = "";
	}


	return isValid;
}



// accordion start
document.querySelectorAll(".accordion-item").forEach((item) => {
	item.querySelector(".accordion-item-header").addEventListener("click", () => {
		item.classList.toggle("active");
	});
});
// accordion end
  

// mobile menu menu start
document.querySelector('#hamburger-btn').addEventListener('click', () => {
	document.body.classList.toggle('mobile-menu-active');
	document.querySelector('.nav-list').classList.toggle('active')
});

