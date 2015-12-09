$('document').ready(function(){
	getUpcomingMoves('#movieContent', 'fish', 'results', '#results');
	resourceImprovements('#fishfun', 'fishRowEven', 'fishRowOdd');
	resourceLink('#fishfun');
	displayFirstImage('#survivors', 'galleryBig');
	preloadImages('#survivors', 'caption');
	gallery('#survivors', 'galleryBig', '#galleryBig', '#caption', 'caption');
	youAreHere('#navbar a', 'currentLink');
	addDatePicker();
	addAccordion('#fishfaq');
	});