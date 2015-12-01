$('document').ready(function(){
	 getUpcomingMoves('#mediaContent');
	 youAreHere('#navbar');
	$( "#faqs" ).accordion({ header: "h3", collapsible:true, active: false });
	removeDefaultBehavior('#content a');

});