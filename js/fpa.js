$('document').ready(function(){
	getUpcomingMoves('#movieContent');
	resourceImprovements('#fishfun');

		displayFirstImage();
// pre-load remaining images
	preloadImages();
// load the gallery
	gallery();

	youAreHere('#navbar a', 'currentLink');
	 
	

	//addAccordion('#fishfaq');
	});