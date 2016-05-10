$(document).ready(function() {
	$("h1").css('background-color', 'blue');

	// Respond to a click of button-1
	$('#button-1').click(function() {
		var value = $("#field-1").val();
		display(value);
	});
	$('#button-2').click(function() {
		var value = $("#field-2").val(); 
		display(value);
	});

	function display(thing) {
		$("#display").append("<li class='input-1'>" + thing + "</li>");
	};
});