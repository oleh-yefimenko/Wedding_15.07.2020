$(document).ready(function () {
	$('.instagram__slider').slick({
		slidesToShow: 8,
		arrows: false,
		dots: false,
		autoplay: true,
		responsive: [
			{
				breakpoint: 1610,
				settings: {
					slidesToShow: 6,
				},
			},
			{
				breakpoint: 1210,
				settings: {
					slidesToShow: 5,
				},
			},
			{
				breakpoint: 770,
				settings: {
					slidesToShow: 4,
				},
			},
			{
				breakpoint: 580,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 400,
				settings: {
					slidesToShow: 2,
				},
			},
		],
	});
});