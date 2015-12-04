$(document).on('ready', function (){

	$('img').eq(0).fadeIn();

	//set up some defaults

	var slideNum = 0;
	var slideCount = $('.slideshow img').length;

	var doSlides = function(direction){
		//Hide the current slide
		$('.slideshow img').eq(slideNum).hide();

		console.log('slideNum:' + slideNum);
		console.log('slideCount:'+ slideCount);

		//If we are at the last slide
		//reset slide to 0
	
	if(direction === 'next'){

			if(slideNum === slideCount -1){
			slideNum = 0;
			} else{
				slideNum = slideNum + 1;
			}
		}  else {
				console.log('previous');
				if(slideNum <= 0){
					//reset to the last slide
					slideNum = slideCount - 1;
				}else {
					slideNum = slideNum - 1;
				}
			}
		

		//Show the next slide
		$('.slideshow img').eq(slideNum).fadeIn();
	}

	$('.slideshow img, .js-next').on('click', function(){
		doSlides('next');
	
	}); 

	$('.js-prev').on('click',function(){
		doSlides('prev');
	});

	//autoplay slideshow on doc.ready
	var autoPlay = setInterval(function(){
		doSlides('next');
	}, 1000);

	//Stop slideshow with click event
	$('.js-pause').on('click', function (){
		clearInterval(autoPlay);
	});


	

	});//Closes doc.ready