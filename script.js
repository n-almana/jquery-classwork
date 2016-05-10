$(document).ready(function() {
	$("h1").css('background-color', 'blue');

	// Respond to a click of button-1
	var button = $('#button-1');
	button.click(function() {
		var value = $("#field-1").val();
		console.log(value);
		$("#display").append("<li class='input-1'>" + value + "</li>");
	});

});