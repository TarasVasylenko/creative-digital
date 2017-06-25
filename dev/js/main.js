$('.nav').on('click', 'a', function(even){
	even.preventDefault();
	var link = $(this).attr('href');
	var distanse = $(link).offset().top;
	$('html, body').animate({
		scrollTop: distanse
	}, 700);
});


$(window).scroll(function(){
	var distanse_menu = $('body').offset().top;
	if ($(window).scrollTop() > distanse_menu){
		$('header').css('background','rgba(159, 154, 207, 0.7)');
	}
	else {
		$('header').css('background','transparent');		
	}
});

$(document).ready(function(){
	$('.title-1').addClass('show');
});


$('.slider-content').slick({
  autoplay: true,
  autoplaySpeed: 3000,
  dots: true,
  arrows: true,
});

