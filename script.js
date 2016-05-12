$(document).ready(function() {
	var heading = $('h1');
	heading.click(function(){
		heading.animate({'margin-left': '100px'}, 2000);
	});

	// Respond to a click of button-1
	$('#button-1').click(function() {
		var value = $("#field-1").val();
		display(value);
		$("#field-1").val("");
	});
	$('#button-2').click(function() {
		var value = $("#field-2").val(); 
		display(value);
		$("#field-2").val("");
	});

	$('#button-3').click(function() {
		$('.input-1').hide(); 
	});

	function display(thing) {
		$("#display").append("<li class='input-1'>" + thing + "</li>");
	};
});