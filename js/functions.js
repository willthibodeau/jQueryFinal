// git remote add origin https://github.com/roundtopdog/web215fp.git
// git push -u origin master

function getUpcomingMoves(someContent){
 	var api = 'mv63eupbf36bpmmw4d8mpkn5';
	var moviesURL = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/upcoming.json';
	moviesURL += '?apikey=' + api;
	moviesURL += '&_prettyprint=true&callback=?';
	$.getJSON(moviesURL, displayResults);
	addContent = someContent;
	alert(addContent);	
};// end getUpcomingMovies

function displayResults(serverResults){
 	var total = serverResults.total;
 	var movies = serverResults.movies;
 	var i = 1;
 	$('#results').remove();
 	var resultsContainer = '<ul id="results"> <p>' + total + ' total movies found:</p></ul>';
 	$('#content').after(resultsContainer);
 	$.each(movies, function(index, property){
 	var num = i++;
 		var title = '<h1> # ' + num + ': ' + property.title + '</h1>';
 		var img = '<img src="' + property.posters.thumbnail + '" />';
 		var synopsis = '<p>' + property.synopsis + '</p>';
 		var movieDetails = '<li class="hideMe">' + title + img + synopsis + '</li>';
 		$('#results').append(movieDetails);
 		$('li:first').removeClass('hideMe').addClass('showMe');
 		$('#results-previous').css('color','#999');
 	})
}//end displayResults

function resultsNext(){
	$('#results-next').click(function(){
		$('#results-previous').css('color','#800080');
 		var currentDiv = $('#results li.showMe');
 		var nextDiv = currentDiv.next('li');
 		if( nextDiv.length == 0){
 			nextDiv.attr('disabled', true).prev();
 			$('#results-next').css('color', '#999');
 		} else { 
			currentDiv.removeClass('showMe').addClass('hideMe');
 			nextDiv.addClass('showMe').removeClass('hideMe');
 		}
	})// end click
}// end resultsNext

function resultsPrevious(){
	$('#results-previous').click(function(){
		$('#results-next').css('color','#800080');
		var currentDiv = $('#results li.showMe');
		var nextDiv = currentDiv.prev('li');
		if( nextDiv.length == 0 ){
			nextDiv.attr('disabled', true);
			$('#results-previous').css('color','#999');
		} else {
			currentDiv.removeClass('showMe').addClass('hideMe');
			nextDiv.addClass('showMe').removeClass('hideMe');
		}	
	})// end click function
}// end resultsPrevious

