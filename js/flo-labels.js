$(document).ready(function() {

	$('button').click(function() {
		$(this).toggleClass('active')
	});

	$('.toggle').click(function() {
		$('.card.alt').addClass('show')
		// $('.cards').addClass('cover')
	});

	$('.fa-times').click(function() {
		$('.card.alt').removeClass('show')
		// $('.cards').removeClass('cover')
	});

})