$(document).ready(function(){
	$('.sign-up-form').submit(function(event){
		event.preventDefault();
		console.log("User submitted the form!");
		$('input').each(function(){
			var currentInputTagClass = $(this).attr('class');
			console.log(currentInputTagClass);
			var errorDivClassName = '.' + currentInputTagClass + '-error';
			console.log(errorDivClassName);
			//input tags have .val()
			// everything else has a .html() - innerHTML
			if($(this).val() == ''){
				$(errorDivClassName).html('Field cannot be empty.');
			}
		});

		var password = $('.password').val();
		var password2 = $('.password2').val();
		if (password !== password2) {
			$('.password-error').html('Your passwords do not match.')
		}

		var numberFound = false;
		for (let i = 0; i < password.length; i++){
			if(isNan(Number(password[i]))){

			}else{
				numberFound = true;
			}

		}
		if (!numberFound){
			$('.password-error').html('Your password must contain one number');
		}
	});
});

