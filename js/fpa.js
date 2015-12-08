$('document').ready(function(){
	getUpcomingMoves('#movieContent', 'fish');
	resourceImprovements('#fishfun', 'fishRowEven', 'fishRowOdd');
	resourceLink('#fishfun');
	displayFirstImage('#survivors', 'galleryBig');
	preloadImages('#survivors');
	gallery('#survivors', 'galleryBig', '#galleryBig', '#caption', 'caption');
	youAreHere('#navbar a', 'currentLink');
	addDatePicker();
	autoFocus('#fname');
	autoClear();
	addValidationEngineToForm('#mainContent')
	addAccordion('#fishfaq');
	});