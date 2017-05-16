$(document).ready(function(){
	$('.candidate-form').submit(function(event){
		event.preventDefault();
		console.log("Candidate submitted the form");
		$('input').each(function(){
			var currentInputTagClass = $(this).attr('name');
			console.log(currentInputTagClass);
			var errorDivClassName = '.' + currentInputTagClass + '-error';
		$('textarea').each(function(){
			var currentInputTagClass = $(this).attr('name');
			console.log(currentInputTagClass);
		// 	console.log(errorDivClassName);
		// 	//input tags have .val()
		// 	// everything else has a .html() - innerHTML
			if($(this).val() == ''){
				$(errorDivClassName).html('Field cannot be empty.');
			}
		});
		});
	});
});