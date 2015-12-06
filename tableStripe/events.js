 $('document').ready(function(){
	$('#coloredBox').bind('mouseover', highlight);
	$('#coloredBox').bind('mouseout', highlight);
	$('#coloredBox').bind('click', function(){
		$('#coloredBox').unbind('mouseover', highlight);
		$('#coloredBox').unbind('mouseout', highlight);
		$('#coloredBox').html('You have <strong>disabled</strong> highlighting');
	}); /*// end anon fcn*/
	
	
	$('#coloredBox').hover(highlight, highlight);*/
	
	
	 var i = 0;
	 $('#coloredBox a').click(function(evt){
	 	evt.preventDefault();
	 	$('#coloredBox').append(' ' + i++);
	 }); // end anon fcn
	
	
	$('#coloredBox a').one('click', function(evt){
	 evt.preventDefault();
	 $('#coloredBox a').attr('target', '_blank');
	 }); // end anon fcn
	
	
 }); // end ready
 
 
 
 function highlight(){
	$(this).toggleClass('highlighted');
 }
 
 
 
 
 
 
 
 
 
 
 