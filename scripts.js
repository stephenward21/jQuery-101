// 

// console.dir(document)
// var dom = $(document);
// console.dir(dom);


// // 1. wait until the document is fully loaded...i.e .ready
// // 2. Once the DOM is loaded, run the anon function.

$(document).ready(function(){
// 	var thing = document.getElementById('thing');
// 	console.log(thing);


// 	var classThing = document.getElementsByClassName('thing');
// 	console.log(classThing);
// 	var classThing = $('.thing');
// 	console.dir(classThing);

// 	var body = document.getElementsByTagName('body');
// 	body = $('body');

$('#thing').mouseenter(function(){
	console.log("You have entered the button");
});
$('#thing').mouseleave(function(){
    $('#thing').css("background-color", "gray");
});
		


$('button').click(function(){
	// console.log(this);
	console.log($(this).attr('toDo'));
	var whatToDo = $(this).attr('toDo');
	if(whatToDo == 'hide'){
		$('#thing').hide();
	}else if(whatToDo == 'show'){
		$('#thing').show();
	}else if(whatToDo == 'toggle'){
		$('#thing').toggle();
	}else if(whatToDo == 'html'){
		// if you dont pass html() an arg, it will simply return innerHTML.
		console.log($('#thing').html());
		// if you pass html an arg, innerHTML will change to that.
		$('#thing').html('<strong> I am the new html.</strong>')
	}else if (whatToDo == 'text'){
		$('#thing').text('<strong> I am new innerHTML.</strong>');
	}else if (whatToDo == 'prepend'){
		$('#thing').prepend('<strong> I am new innerHTML.</strong>');
	}else if (whatToDo == 'append'){
		$('#thing').append('<strong> I am HTML added to the end.</strong>');
	}else if (whatToDo == 'css'){
		$('#thing').css({	
			'color': 'orange',
			'font-size': '80px',
			'background-color': 'blue',
			'border-radius': '50%'

		});
	}else if (whatToDo == 'addClass'){
		$('#thing').addClass('crazy-css')
	}else if(whatToDo == 'removeClass'){
		$('#thing').removeClass('crazy-css');
	
	// else if(whatToDo == 'mouseEnter'){
	// 	$('#thing').mouseenter();
	// 	console.log("You have entered the button");
	}else if (whatToDo == "blur"){
		$('#thing').blur(function(){
    	$(this).css("background-color", "#ffffff");
});
	}else if(whatToDo == 'slideUp'){
		$('#thing').slideUp();
	}else if(whatToDo == 'slideDown'){
		$('#thing').slideDown();
	}else if(whatToDo == 'animate'){
		$('#thing').animate({
			width: "40%",
			opacity: 0.3,
			fontSize: "40px",
			borderWidth: "10px"
		});
	}



	});

});


// 1. Wait until ABSOLUTELY EVERYTHING has loaded (pictures, videos, etc)
// $(window).on("load", function(){
// 	console.log("the window has loaded!")
// 	var thing = document.getElementById('thing');
// 	console.log(thing);
// });