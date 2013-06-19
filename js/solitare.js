$(function(){
	var new_square = '<div class="square"></div>';

	$('body').on('click','.square', function(){
		// var my_square = $(this);
		$(this).toggleClass('blue');

		b = $(new_square)
			.insertAfter(this);
		a = $(new_square)
			.insertBefore(this);
		b.toggleClass('blue');
		a.toggleClass('blue');
	});


});