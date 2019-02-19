
//Pagination blog
	let pageSize = 5,
		pages = document.querySelectorAll('.blog_article'),
		pageCount = Math.ceil(pages.length / pageSize),
		pagination = document.querySelector('#pagination');

		for(let i = 0 ; i<pageCount;i++){			
			var el = document.createElement('a');
			el.classList.add('page_select')
			el.innerHTML = (i+1);
			document.querySelector('#pagination').append(el);			
		}

		pagination.querySelector("a").classList.add("current");

		let showPage = function(page) {
			for(let i = 0; i < pages.length; i++){
			pages[i].style.display = 'none';}
				
			for(let i = 0; i < pages.length; i++){
				if ([i] >= pageSize * (page - 1) && [i] < pageSize * page)
				pages[i].style.display = 'block';
			}			
		}
	showPage(1);
	let a = document.querySelectorAll('.page_select');

	for(let i = 0; i < a.length; i++){
		a[i].addEventListener('click', function(e){
			e.preventDefault();
			for(let i = 0; i < a.length; i++){
				a[i].classList.remove('current');
			}
			this.classList.add("current");
			showPage(parseInt(this.text));
			});
		}

	//pagination buttons
	let nextPage = document.querySelector('.next_btn'),
		prevPage = document.querySelector('.prev_btn'),
		currentPage = document.querySelector('.current'),
		numberOfPages = document.querySelectorAll('.page_select'),
		count = parseInt(currentPage.text);

	nextPage.addEventListener('click', function(e){
		e.preventDefault();
		if(count == numberOfPages.length ){
			count = 1;
		} 
		else{
			count++;
		}

			for(let i = 0; i < numberOfPages.length; i++){
				numberOfPages[i].classList.remove('current');
			}
			numberOfPages[count - 1].classList.add("current");

		showPage(count);
	});	
	prevPage.addEventListener('click', function(e){
		e.preventDefault();
		if( count == 1  ){
			count = numberOfPages.length;
		} 
		else{
			count--;
		}
			for(let i = 0; i < numberOfPages.length; i++){
				numberOfPages[i].classList.remove('current');
			};
			numberOfPages[count - 1].classList.add("current");

		showPage(count);
	});
	//end
