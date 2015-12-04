// git remote add origin 0pxttps://github.com/roundtopdog/web215fp.git
// git push -u origin master

// start movie functions
function getUpcomingMoves(someContent){
	if(someContent == '#mediaContent'){
		var animal = '&q=duck';
	} else {
		var animal = '&q=fish';
	};

 	var api = 'mv63eupbf36bpmmw4d8mpkn5';
	var moviesURL = 'http://api.rottentomatoes.com/api/public/v1.0/movies.json';
	moviesURL += '?apikey=' + api;
	moviesURL += animal;
	moviesURL += '&page_limit=10'
	moviesURL += '&_prettyprint=true&callback=?';
	$.getJSON(moviesURL, displayResults);
	addContent = someContent;	
};// end getUpcomingMovies

function displayResults(serverResults){
 	var total = serverResults.total;
 	var movies = serverResults.movies;
 	var i = 1;
 	$('#results').remove();
 	var resultsContainer = '<ul id="results"> <p>' + total + ' total movies found:</p></ul>';
 	$(addContent).after(resultsContainer);
 	$.each(movies, function(index, property){
 	var num = i++;
 		var title = '<h1> # ' + num + ': ' + property.title + '</h1>';
 		var img = '<img src="' + property.posters.thumbnail + '" />';
 		var synopsis = '<p>' + property.posters.original + '</p>';
 		var movieDetails = '<li class="hideMe">' + title + img + synopsis + '</li>';
 		$('#results').append(movieDetails);
 	})
}//end displayResults

// end movie functions

// start navbar highlights 
function youAreHere(navbarID, navbarCSSClass){
	var pathname = $(location).attr('pathname');
	var curPage = pathname.substring(pathname.lastIndexOf('/')+1);
	$(navbarID).each(function(){
		if(curPage == $(this).attr('href')){
			$(this).addClass(navbarCSSClass);
		} else if(curPage == ''){
			$('a:first').addClass(navbarCSSClass);
		} // end else if
	}); // end anony fcn
}// end navbar highlights

// home link changes
  function linkChange(){
  	$("#content a[href^='http://']").attr("target","_blank");
  }// end home link changes

// changes to resources page add acordion
function addAccordion(fishfaqID){
	$( fishfaqID ).accordion({ collapsible: true, heightStyle: "content", active: false });
}

// resources functiion 
function resourceImprovements(resourceID){
	//  if(resourceID == '#duck_stories' ){
	//  	var rowEven = .duckRowEven;
	// }
	//else {
	// 	var rowEven = .fishRowEven;
	// }
	// alert(rowEven);
$(' ' + resourceID + ' tr:odd'  ).css('background-color', '#999');
$(' ' + resourceID + ' tr:even' ).css('background-color', '#555');
$(' ' + resourceID + ' tr').css('text-decoration', 'underline');



}// end resourceImprovements 

// 	.duckRowEven {
// 	background-color: #1cc;
// }
// .duckRowOdd {
// 	background-color: #cc1;
// }







