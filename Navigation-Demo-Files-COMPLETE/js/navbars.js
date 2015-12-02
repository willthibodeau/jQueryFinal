$('document').ready(function(){
/* used for demo of methods only
var jQueryLocation = $(location).attr('hostname');
var fullURL = $(location).attr('href');
var currentPage = fullURL.substring(fullURL.lastIndexOf('/')+1);
alert(currentPage);
alert(fullURL.substring(1));
*/
youAreHere();
});

/*var jsLocation = window.location;
alert(jsLocation);*/

function youAreHere(){
	var pathname = $(location).attr('pathname');
	var curPage = pathname.substring(pathname.lastIndexOf('/')+1);
	
	$('a').each(function(){
		if(curPage == $(this).attr('href')){
			$(this).attr('id', 'current');
		} else if(curPage == ''){
			$('a:first').attr('id', 'current');
		} // end else if
	}); // end anony fcn
}












