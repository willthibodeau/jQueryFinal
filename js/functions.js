// git remote add origin 0pxttps://github.com/roundtopdog/web215fp.git
// git push -u origin master

//line 79 cant get preventDefault() to work

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
  // function linkChange(something){
  // 	$(something).attr("target","_blank");
  // 	alert(something);
  // }// end home link changes

// changes to resources page add acordion
function addAccordion(fishfaqID){
	$( fishfaqID ).accordion({ collapsible: true, heightStyle: "content", active: false });
}

// resources functiion 
function resourceImprovements(resourceID){
	if(resourceID == '#fishfun'){
		$('table tr:even').addClass('fishRowEven');
		$('table tr:odd' ).addClass('fishRowOdd, ');
		
	}

	if(resourceID == '#duck_stories'){
		$('table tr:even').addClass('duckRowEven');
		$('table tr:odd').addClass('duckRowOdd');
	}

 	$(' ' + resourceID + ' tr td').css('text-decoration', 'underline');
 	$(' ' + resourceID + ' tr td').css('cursor', 'pointer');

  	$(' ' + resourceID + ' tr:not(:first)').click(function(evt){
		evt.preventDefault();



		 var td1 = $(this).children(':first').text();
		 alert(td1);
		// var td2 = $(this).attr('href');
		// alert(td2);	

		// text then assign the a
  		//$(td).attr('href').attr('target','_blank');


  	})// end click function
}// end resourceImprovements 

// gallery functions

function displayFirstImage(thumbs){
	var firstPath = $(' ' + thumbs + ' a:first').attr('href');
	
	var firstImage = '<img src="'+firstPath+'" id="galleryBig">';
	
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

function gallery(thumbs){
	$(' ' + thumbs + ' a').click(function(evt){
		evt.preventDefault();
		var oldImage = $(thumbs).next();
		var imgPath = $(this).attr('href');
		var newImage = $('<img src="' + imgPath + '" id="galleryBig">');
		newImage.hide();
		$(thumbs).after(newImage);
		newImage.fadeIn();
		oldImage.remove();
		$('#caption').remove();
		var altText = $(this).attr('title');
		var newTag = $('<div id="caption"> ' + altText + ' </div>');
		newTag.fadeIn();
		$('#galleryBig').after(newTag);
	
	}); // end anon fcn
}




