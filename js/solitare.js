$(function(){
	var new_square = '<div class="square"></div>';

	$('body').on('click','.square', function(){
		var my_square = $(this),
				my_square_classes;

		my_square.toggleClass('blue');
		my_square_classes = my_square.attr("class");

		if (my_square.next().is('div')){
			match_classes(my_square.next(), my_square_classes);
		} else {
			var next_sq = $(new_square).insertAfter(this);
			match_classes(next_sq, my_square_classes);
		}

		if (my_square.prev().is('div')){
			match_classes(my_square.prev(), my_square_classes);
		} else {
			var prev_sq = $(new_square).insertBefore(this);
			match_classes(prev_sq, my_square_classes);
		}

	});

	var match_classes = function(square, classes) {
		square
			.removeClass()
			.attr("class", classes);
	};


});