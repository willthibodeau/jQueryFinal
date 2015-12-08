// git remote add origin 0pxttps://github.com/roundtopdog/web215fp.git
// git push -u origin master

//line 79 cant get preventDefault() to work

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
 	var resultsContainer = '<div id="results"> <p>' + total + ' total movies found:</p></div>';
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
function linkChange(something){
   	$(something).attr("target","_blank");
}// end home link changes

// changes to resources page add acordion
function addAccordion(fishfaqID){
	$( fishfaqID ).accordion({ collapsible: true, heightStyle: "content", active: false });
}

// resources functiion 
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
function displayFirstImage(thumbs, galleryBig){
	var firstPath = $(' ' + thumbs + ' a:first').attr('href');
	var firstImage = '<img src="'+firstPath+'" id="' + galleryBig + '">';
	$(thumbs).after(firstImage);
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
	$(' ' + thumbs + ' a').click(function(evt){
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

// end gallery functions start contact form

function addDatePicker(){
	$( "#datepicker" ).datepicker({ minDate: "-20Y", maxDate: "0D" });
}

function autoFocus(field){
	$(field).focus();
}

function autoClear(){
// grab all elements that might contain default text
var elements = $('input[type="text"], textarea');

//compare their default text to their current text
// on focus
elements.focus(function(){
		var defVal = $(this).prop('defaultValue');
		var curVal = $(this).val();
		if(defVal == curVal){
			$(this).val('');
		}
	}); // end anonymous function
	
// when user leaves, check for blank value
// If blank, set it back to default
elements.blur(function(){
		if($(this).val() == ''){
			$(this).val($(this).prop('defaultValue'));
		}
	}); // end anonymous function
}

// add validation functions
function addValidationEngineToForm(contentID){
	$(contentID).validationEngine();
alert(contentID);	
}

function addInputClassToName(){
	$('#name').addClass('validate[required]').addClass('text-input');
	alert(contentID);
}// end addInputClass

// function addClassToGender(){
// 	$( 'input[name="gender"]' ).addClass('validate[required]').addClass('radio');
// //alert('a');
// }

// function addClassToTotal(){
// 	$('#total').addClass('validate[required,custom[number],min[0]]');
// }

// function addClassToPercent(){
// 	$('#percent').addClass('validate[required,custom[integer],min[0]]');
// }

