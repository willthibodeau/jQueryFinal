$('document').ready(function(){
	getUpcomingMoves('#mediaContent', 'duck', 'results', '#results');
	youAreHere('#navbar a','pageHighlight');
	resourceImprovements('#duck_stories', 'duckRowEven', 'duckRowOdd');
	resourceLink('#duck_stories');
	displayFirstImage('#galleryThumbs', 'galleryBig', 'caption');
	preloadImages('#galleryThumbs');
	gallery('#galleryThumbs', 'galleryBig', '#galleryBig', '#caption', 'caption');
	autoFocus('#fullname');
	autoClear();
    // addDatePicker('#sightingdate');
	addAccordion('#faqs');linkChange('#content a ');
});