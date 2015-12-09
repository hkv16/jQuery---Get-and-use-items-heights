$( document ).ready(function() {

  console.log( "Document ready!" ); // is the document ready - check console log

	setInterval(function() { // Check the height of the item every .5 seconds
		var h1_height = $(".div1").height(); // Set the variable heights item
		h1_height = h1_height + "px"; // prepare to append css
		$(".div2").css("min-height", d1_height); // applying the css to the element it needs to apply to
	}, 500); // every 500 ms

});
