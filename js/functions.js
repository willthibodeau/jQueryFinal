// git remote add origin https://github.com/roundtopdog/web215fp.git
// git push -u origin master
// movie functions
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

// navbar highlights
function youAreHere(navColor){
	var pathname = $(location).attr('pathname');
	var curPage = pathname.substring(pathname.lastIndexOf('/')+1);
	
	if(navColor == '#navbar a' ){
		newNavColor = 'class', 'pageHighlight';
	} els if ( navColor == "#navbar" ){
		newNavColorl = 'class', 'currentLink';
	}
	$('a').each(function(){
		if(curPage == $(this).attr('href')){
			$(this).attr(newNavColor);
		} else if(curPage == ''){
			$('a:first').attr(newNavColor);
		} // end else if
	}); // end anony fcn
}

// default link behavior
function removeDefaultBehavior(evt){
	evt.preventDefault();
	$(this).attr('target', '_blank');
	})
}




