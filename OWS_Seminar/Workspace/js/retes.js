$(document).ready(function() {

// Prebacivanje aktivnog linka izbornika kod scrollanja
	$('body').scrollspy({
		target: ".navbar-fixed-top"
	})

	$(".intro-naslov").fadeIn(1500, function() {
		$(".strelica").slideDown("slow");
	});
});