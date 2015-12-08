$('document').ready(function(){
	getUpcomingMoves('#mediaContent', '&q=duck');
	youAreHere('#navbar a','pageHighlight');
	resourceImprovements('#duck_stories', 'duckRowEven', 'duckRowOdd');
	resourceLink('#duck_stories');
	displayFirstImage('#galleryThumbs', 'galleryBig');
	preloadImages('#galleryThumbs');
	gallery('#galleryThumbs', 'galleryBig', '#galleryBig', '#caption', 'caption');
	addAccordion('#faqs');linkChange('#content a ');
});