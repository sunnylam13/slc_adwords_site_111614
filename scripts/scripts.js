jQuery(document).ready(function($) {

//////////////////////////////////////////////////
// GLOBAL VARIABLES



//////////////////////////////////////////////////
// FUNCTIONS

////////////////////////////////////////////
// 		SERVICE OFFER
////////////////////////////////////////////

function testJSActive () {
	alert("JS is active.");
}

// this function doesn't work
function changeCircleBack1 () {
	$('.serviceBlock').hover(function() {
		/* Stuff to do when the mouse enters the element */
		$('.circleImage').toggleClass('.circleSelActive');
	}, function() {
		/* Stuff to do when the mouse leaves the element */
		$('.circleImage').toggleClass('.circleSelActive');
	});
}

// this function doesn't work
function changeCircleBack2 () {
	$('.serviceBlock').mouseover(function(event) {
		/* Act on the event */
		$('.circleImage').toggleClass('.circleSelActive');
	});

	$('.serviceBlock').mouseout(function(event) {
		/* Act on the event */
		$('.circleImage').toggleClass('.circleSelActive');
	});
}

// this function doesn't work
function changeCircleBack3 () {
	$('.serviceBlock').mouseover(function(event) {
		/* Act on the event */
		$('.circleImage').addClass('circleSelActive');
	});

	$('.serviceBlock').mouseout(function(event) {
		/* Act on the event */
		$('.circleImage').removeClass('.circleSelActive');
	});
}

// this function doesn't work
function changeCircleBack4 () {
	$('.serviceBlock').hover(function() {
		/* Stuff to do when the mouse enters the element */
		$('.circleImage').toggleClass("circleactive");
	}, function() {
		/* Stuff to do when the mouse leaves the element */
		$('.circleImage').toggleClass("circleactive");
	});
}

// the only function that works
function changeCircleBack5 () {
	$('.serviceBlock').hover(function() {
		/* Stuff to do when the mouse enters the element */
		$(this).find('.circleImage').css('background', 'lightgrey');
		// these ones don't work
		// $(this).parent('.serviceBlock').filter('.circleImage').css('background', 'lightgrey');
		// $(this).parent('.serviceBlock').parent('.serviceBlock').filter('.circleImage').css('background', 'lightgrey');
	}, function() {
		// this automatic generated exit part doesn't work for hover
		// you have to use another separate statement as you see below with mouseleave before it works
		/* Stuff to do when the mouse leaves the element */
		// $('.circleImage').css('background', 'white');
		// $(this).parent('.serviceBlock').filter('.circleImage').css('background', 'white');
		// $(this).parent('.serviceBlock').parent('.serviceBlock').filter('.circleImage').css('background', 'white');
	});

	$('.serviceBlock').on('mouseleave', function() {
		$(this).find('.circleImage').css('background', 'white');
	});
}

//////////////////////////////////////////////////
// EXECUTION CODE

// testJSActive();
// changeCircleBack1();
// changeCircleBack2();
// changeCircleBack3();
// changeCircleBack4();
changeCircleBack5();

//////////////////////////////////////////////////

});  //end doc.onready function
