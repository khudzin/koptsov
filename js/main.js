//Menu button on smal screen
		function show() {document.querySelector(".nav").classList.toggle('active');
					document.querySelector(".enter").classList.toggle('active');}
	function act() {document.querySelector(".toggle-btn").classList.toggle('active');}
	//end

//Slider
	let nextImg = document.querySelector(".link_sliders__right"),
		prevImg = document.querySelector(".link_sliders__left");
	let slider = document.querySelector(".slider");
	let pics = ["img/1.jpg","img/2.jpg","img/3.jpg", "img/4.jpg", "img/5.jpg"];
	let imgCount = 0;

	function slide_num_end() {
		document.querySelector('.slide_num_end').innerHTML = parseInt(pics.length); 
	}
	slide_num_end();

	nextImg.addEventListener("click", function(e){
		e.preventDefault();
		if(imgCount == pics.length -1 ){
			imgCount = 0;
		} else{
			imgCount++;
		}
		document.querySelector('.slide_num').innerHTML = parseInt(imgCount + 1 ); 
		slider.setAttribute("style", 'background-image: url('+pics[imgCount]+');');		
	});

	prevImg.addEventListener("click", function(e){
		e.preventDefault();
		if(imgCount == 0){
			imgCount = pics.length - 1;
		}
		else {
			imgCount--;
		}
		document.querySelector('.slide_num').innerHTML = parseInt(imgCount + 1 ); 
		slider.setAttribute("style", 'background-image: url('+pics[imgCount]+');');		
	});
	//end


