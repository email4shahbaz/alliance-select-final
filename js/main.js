// Initialize Animation on Scroll
AOS.init();

// Initialize Lozad
// const observer = lozad();
// observer.observe();

const preloader=document.querySelector('#preloader');
const pageOverlay = document.querySelector('#page-overlay');
const navList = document.querySelector('.nav-list');

document.addEventListener("DOMContentLoaded", function () {
    // hamburgerBtn.addEventListener('click', () => {
    //   navList.classList.toggle('drawer');
    // });

	document.querySelectorAll(".menu-item").forEach((item)=>{
		item.addEventListener("click", function(){
			this.classList.add("active");
		})

		item.addEventListener("mouseleave", function(){
			this.classList.remove("active");
		})
	})



	// if(drawerOverlay){
	// 	drawerOverlay.addEventListener('click', ()=>{
	// 		mainHeader.classList.remove("mobile");
	// 		document.body.classList.remove("no-scroll");
	// 		drawerOverlay.classList.remove("active");
	// 	})
	// }


});




//Form Validations
const validateContactForm=()=>{
	let isValid = true;

	const name = document.querySelector('#fullname');
	const email = document.querySelector('#email');
	const message = document.querySelector('#message');

	const nameError = document.querySelector('#nameError');
	const emailError = document.querySelector('#emailError');
	const messageError = document.querySelector('#messageError');

	if (!name.value.trim()) {
		nameError.style.display="block";
		nameError.textContent = "Full name is required";
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

	if(isValid==true){
		pageOverlay.classList.add("active");
		preloader.classList.add("active");
		const timeout=setTimeout(()=>{
			pageOverlay.classList.remove("active");
			preloader.classList.remove("active");
			document.querySelector('#contact-form').style.display='none';
			document.querySelector('#contact-confirmation').style.display='grid';

			document.querySelector('#btn-send-another').addEventListener('click', ()=>{
				document.querySelector('#contact-form').style.display='grid';
				document.querySelector('#contact-confirmation').style.display='none';
			})

			clearInterval(timeout);
		}, 1000)
	}


	return false;
}




const validateRegisterForm=()=>{
	let isValid = true;

	const name = document.querySelector('#fullname');
	const email = document.querySelector('#email');
	const password = document.querySelector('#password');

	const nameError = document.querySelector('#nameError');
	const emailError = document.querySelector('#emailError');
	const passwordError = document.querySelector('#passwordError');

	if (!name.value.trim()) {
		nameError.style.display="block";
		nameError.textContent = "Full name is required";
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

	
	if (!password.value.trim() && !password.value.length < 6) {
		passwordError.style.display="block";
		passwordError.textContent = "Please enter a password (not less than 6 characters)";
		isValid = false;
	} else {
		passwordError.textContent = "";
	}

	if(isValid==true){
		pageOverlay.classList.add("active");
		preloader.classList.add("active");
		const timeout=setTimeout(()=>{
			pageOverlay.classList.remove("active");
			preloader.classList.remove("active");
			window.location="register-complete.html";
			clearInterval(timeout);
		}, 1000)
	}


	return false;
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

document.querySelector('.model-fade-bg').addEventListener('click', () => {
	document.body.classList.remove('mobile-menu-active');
	document.querySelector('.nav-list').classList.remove('active')
});
// mobile menu menu end