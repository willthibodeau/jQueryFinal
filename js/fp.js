$('document').ready(function(){
	getUpcomingMoves('#mediaContent', 'duck');
	youAreHere('#navbar a','pageHighlight');
	resourceImprovements('#duck_stories', 'duckRowEven', 'duckRowOdd');
	resourceLink('#duck_stories');
	displayFirstImage('#galleryThumbs', 'galleryBig');
	preloadImages('#galleryThumbs');
	gallery('#galleryThumbs', 'galleryBig', '#galleryBig', '#caption', 'caption');
	addDatePicker();
	autoFocus('#fullname');
	autoClear();
	addValidationEngineToForm('#content')
	addAccordion('#faqs');linkChange('#content a ');
});