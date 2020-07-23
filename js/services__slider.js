$(document).ready(function () {
	$('.services__slider').slick({
		slidesToShow: 3,
		arrows: true,
		appendArrows: $('.slider__arrows'),
		autoplay: true,
		pauseOnFocus: true,
		pauseOnHover: true,
		responsive: [
			{
				breakpoint: 815,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 555,
				settings: {
					slidesToShow: 1,
					fade: true,
					// appendArrows: $('.slider'), //----> для перемешения стрелок по бокам
				}
			},
		],
	});
});