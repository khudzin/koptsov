// Get the modal
var modal = document.getElementById('myModal');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// When the user clicks on the button, open the modal 
let procModalBtn = document.querySelector('.detail');

	procModalBtn.addEventListener('click', function loadProcessModal(e) {
		e.preventDefault();
		modal.style.display = "block";
		let request = new XMLHttpRequest();
		request.open('GET', 'process.html', true);

		request.onload = function() {
			if (request.status >= 200 && request.status < 400) {
				let resp = request.responseText;
		    	document.querySelector('.modal-html').innerHTML = resp;
			}
		};
		request.send();
	});

let orderModalBtn = document.querySelector(".btn_question");

	orderModalBtn.addEventListener('click', function loadProcessModal(e) {
		e.preventDefault();
		modal.style.display = "block";
		let request = new XMLHttpRequest();
		request.open('GET', 'modal-order.html', true);

		request.onload = function() {
			if (request.status >= 200 && request.status < 400) {
				let resp = request.responseText;
		    	document.querySelector('.modal-html').innerHTML = resp;
			}
		};
		request.send();
	});

let certifModalBtn = document.querySelector(".btn_certificates");

	certifModalBtn.addEventListener('click', function loadProcessModal(e) {
		e.preventDefault();
		modal.style.display = "block";
		let request = new XMLHttpRequest();
		request.open('GET', 'modal-sertificat.html', true);

		request.onload = function() {
			if (request.status >= 200 && request.status < 400) {
				let resp = request.responseText;
		    	document.querySelector('.modal-html').innerHTML = resp;
			}
		};
		request.send();
	});