$('document').ready(function(){
	 getUpcomingMoves('#movieContent');
	 resourceImprovements('#fishfun');

		displayFirstImage('#survivors');
// pre-load remaining images
	preloadImages('#survivors');
// load the gallery
	gallery('#survivors');

	 youAreHere('#navbar a', 'currentLink');
	 
	

	addAccordion('#fishfaq');
	});