$('document').ready(function(){
	getUpcomingMoves('#mediaContent');
	youAreHere('#navbar a','pageHighlight');
	
	resourceImprovements('#duck_stories');

	displayFirstImage();
// pre-load remaining images
	preloadImages();
// load the gallery
	gallery();
	
	linkChange('#content a ');
	addAccordion('#faqs');
});