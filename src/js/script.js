$(function(){
	
	$('#new-training-select').select2({
		theme: "classic",
		width: 'style'
	});

	$('.excercise').children('.inner').children('.name').click(function(){
		console.log('huj');
		$(this).parent().parent().toggleClass('unfolded');
	});

});