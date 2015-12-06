$('document').ready(function(){
	 getUpcomingMoves('#mediaContent');
	 youAreHere('#navbar a','pageHighlight');
	
	 resourceImprovements('#duck_stories');

	displayFirstImage('#galleryThumbs');
// pre-load remaining images
	preloadImages('#galleryThumbs');
// load the gallery
	gallery('#galleryThumbs');
	
	 
	 addAccordion('#faqs');linkChange('#content a ');
});