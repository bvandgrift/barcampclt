$(document).ready(function(){
	// clones the images in #row-one & #row-two
	// on the homepage so we're not duplicating
	$('#row-one a').clone().appendTo('#row-one');
	$('#row-two a').clone().appendTo('#row-two');
	// modal box for photos on homepage
	$("#photos .photos a").fancybox();
	
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
	
	if ( $("#venue-map").length > 0 ) {
		$('#venue-map .inner').googleMaps({
		    latitude: 35.23259758788463,
	      longitude: -80.8254611492157,
	      depth: 17,
	      layer: 'org.wikipedia.en',
	      markers: [{
	          latitude:   35.23259758788463,
	          longitude: -80.8254611492157,
	          icon: { 
	              image: '/images/map-icons/barcamp-icon.png', 
	              shadow: '/images/map-icons/barcamp-icon-shadow.png', 
	              iconSize: '45, 49', 
	              shadowSize: '65, 49' 
	          }
	      },{
	          latitude:   35.232273337970376,
	          longitude: -80.82453846931458,
	          icon:{
	              image: '/images/map-icons/parking-icon.png',
	              shadow: '/images/map-icons/no-shadow.png',
	              iconSize: '36, 35'
	          }
	      },{
	          latitude:   35.23286925573389,
	          longitude: -80.82593321800232,
	          icon: {
	              image: '/images/map-icons/parking-icon.png',
	              shadow: '/images/map-icons/no-shadow.png',
	              iconSize: '36, 35'
	          }
	      }]
		});
	}
	
	// external links
	$("a[rel='external']").attr('target', '_blank');
	$("a[rel*='external']").click(function(){
		pageTracker._trackEvent('External', 'Misc', $(this).attr('href'));
	});
});






















