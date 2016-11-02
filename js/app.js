jQuery("#responsive_headline").fitText(1.2, { minFontSize: '30px', maxFontSize: '60px' });

$(document).ready(function () {
	$('.res-menu').on('click', function () {
		$('#menu').fadeToggle();
	});
});