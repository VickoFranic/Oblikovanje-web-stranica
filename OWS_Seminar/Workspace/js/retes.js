$(document).ready(function() {

// Prebacivanje aktivnog linka izbornika kod scrollanja
	$('body').scrollspy({
		target: ".navbar-fixed-top"
	})

// Intro naslov fadeIn i slideDown na strelicu
	$(".intro-naslov").fadeIn(1500, function() {
		$(".strelica").slideDown("slow");
	});

	// ColorBox na slike u print section
	$(".work").colorbox({fixed:true});
});