$('document').ready(function(){
	getUpcomingMoves('#movieContent', '&q=fish');
	resourceImprovements('#fishfun', 'fishRowEven', 'fishRowOdd');
	resourceLink('#fishfun');
	displayFirstImage('#survivors', 'galleryBig');
	preloadImages('#survivors');
	gallery('#survivors', 'galleryBig', '#galleryBig', '#caption', 'caption');
	youAreHere('#navbar a', 'currentLink');
	addDatePicker();
	addAccordion('#fishfaq');
	});