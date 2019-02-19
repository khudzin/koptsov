let fullMessage = document.querySelectorAll('.feedback_full_message');
let readMoreBtn = document.querySelectorAll('.feedback_read_more');

for (let i = 0; i < readMoreBtn.length; i++) {
	readMoreBtn[i].addEventListener("click", function readMore() {
		console.log(readMoreBtn[i]);
		fullMessage[i].classList.toggle('collapsed');
	});
}
	
let closeMessageBtn = document.querySelectorAll('.feedback_close_full_message');
for (let i = 0; i < closeMessageBtn.length; i++) {		
		closeMessageBtn[i].addEventListener("click", function hideFullMessage()	{
		fullMessage[i].classList.toggle('collapsed');
	});
}





// Get the modal
var modal = document.querySelectorAll('.modal');

// Get the <span> element that closes the modal
var span = document.querySelectorAll(".close");

// When the user clicks on <span> (x), close the modal
for (let i = 0; i < span.length; i++) {
	span[i].onclick = function() {
	  modal[i].style.display = "none";
	}

}
// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
		for (let i = 0; i < modal.length; i++) {
			if (event.target == modal[i]) {
				modal[i].style.display = "none";
			}
		}
	}
// When the user clicks on the button, open the modal 
let srcOpenBtn = document.querySelectorAll('.feedback_open_screenshot');
	for (let i = 0; i < srcOpenBtn.length; i++) {
		srcOpenBtn[i].onclick = function() {
			modal[i].style.display = "block";
		}
	}