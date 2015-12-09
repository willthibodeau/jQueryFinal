// git remote add origin 0pxttps://github.com/roundtopdog/web215fp.git
// git push -u origin master

// start movie functions
function getUpcomingMoves(someContent, animal){
 	var api = 'mv63eupbf36bpmmw4d8mpkn5';
	var moviesURL = 'http://api.rottentomatoes.com/api/public/v1.0/movies.json';
	moviesURL += '?apikey=' + api;
	moviesURL += '&q=' + animal;
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
	var synopsis = '<p>Rating: ' + property.mpaa_rating + '</p>';
	var releaseDate = '<p>Release Date: ' + property.year + '</p>';
	var movieDetails = '<p>' + title + img + synopsis + releaseDate + '</p><hr>';
	$('#results').append(movieDetails);
 	})
}//end displayResults

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
function linkChange(something){
   	$(something).attr("target","_blank");
}// end home link changes

// changes to resources page add acordion
function addAccordion(fishfaqID){
	$( fishfaqID ).accordion({ collapsible: true, heightStyle: "content", active: false });
}

// resources functions
function resourceImprovements(resourceID, rowEven, rowOdd){
	$( resourceID + ' tr:even').addClass(rowEven);
	$( resourceID + ' tr:odd').addClass(rowOdd);
 	$( resourceID + ' tr td').css('text-decoration', 'underline');
 	$( resourceID + ' tr td').css('cursor', 'pointer');
}// end resource improvements

function resourceLink(resourceID){
	$( resourceID + ' a').click(function(evt){
		evt.preventDefault();
	})

  	$( resourceID + ' tr:not(:first)').click(function(){
		var myLink = $( this ).find('a').attr('href');
		window.open(myLink);
  	})// end click function
}// end resource Links 

// gallery functions
function displayFirstImage(thumbs, galleryBig, caption){
	var firstPath = $(' ' + thumbs + ' a:first').attr('href');
	var firstImage = '<img src="'+firstPath+'" id="' + galleryBig + '">';
	$(thumbs).after(firstImage);
	var theText = $( thumbs + ' a').attr('title');
	var firstCaption = $('<div id="' + caption + '"> ' + theText + '</div>');
	$('#galleryBig').after(firstCaption);
}

function preloadImages(thumbs){
	var arrGalleryImages = [];
	var arrGalleryImageLinks = $(' ' + thumbs + ' a');
	for(i=0; i<arrGalleryImageLinks.length; i++){
		arrGalleryImages[i] = new Image();
		arrGalleryImages[i].src = arrGalleryImageLinks[i];
	}
}

function gallery(thumbs, galleryBig, galleryBigID, captionID, caption){
	$( thumbs + ' a').click(function(evt){
		evt.preventDefault();
		var oldImage = $(thumbs).next();
		var imgPath = $(this).attr('href');
		var newImage = $('<img src="' + imgPath +'" id="' + galleryBig + '">');
		newImage.hide();
		$(thumbs).after(newImage);
		newImage.fadeIn();
		oldImage.remove();
		$( captionID ).remove();
		var altText = $(this).attr('title');
		var newTag = $('<div id="' + caption + '"> ' + altText + ' </div>');
		newTag.fadeIn();
		$( galleryBigID ).after(newTag);
	}); // end anon fcn
}

 function addDatePicker(){
 	$( "#datepicker" ).datepicker({ minDate: "-20Y", maxDate: "0D" });
 }

// create a function to add focus to the page
function autoFocus(field){
	$(field).focus();
}// end autoFocus

// create a function to autoClear the form elements 
function autoClear(){
	var elements = $('input[type="text"], textarea');
	elements.focus(function(){
		var defValue = $(this).prop('defaultValue');
		var currentValue = $(this).val();

		if(defValue == currentValue){
			$(this).val('');
		}// end if
	})// end anon function

	elements.blur(function(){
		if($(this).val() == ''){
			$(this).val($(this).prop('defaultValue'));
		}// end if
	})//end anon function
}// end autoClear



