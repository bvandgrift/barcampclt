$(document).ready(function(){
	// clones the images in #row-one & #row-two
	// on the homepage so we're not duplicating
	$('#row-one a').clone().appendTo('#row-one');
	$('#row-two a').clone().appendTo('#row-two');
	// modal box for photos on homepage
	$("#photos a").fancybox();
	
	// Twitter placement on the homepage
	$('#barcampclt .tweets').twitterSearch({
			term: '@barcampclt',
			applyStyles: false,
			bird: false,
			title: false,
			timeout: 6000,
			pause: true,
	});
	$('#barcampclt-hash .tweets').twitterSearch({
			term: 'barcampclt',
			applyStyles: false,
			bird: false,
			title: false,
			timeout: 6000,
			pause: true,
	});
	$('#barcamp-global .tweets').twitterSearch({
			term: 'barcamp',
			applyStyles: false,
			bird: false,
			title: false,
			timeout: 6000,
			pause: true,
	});
	
	// external links
	$("a[rel='external']").attr('target', '_blank');
	$("a[rel*='external']").click(function(){
		pageTracker._trackEvent('External', 'Misc', $(this).attr('href'));
	});
});






















