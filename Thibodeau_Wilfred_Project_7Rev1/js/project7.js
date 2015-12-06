$('document').ready(function(){
	loadImages();
	displayFirst();
	gallery();
});
 
function loadImages(){
	var galleryImages = [];
	var loadThese = $('#thumbs a');
	for(i=0; i<loadThese.length; i++){
		galleryImages[i] = new Image();
		galleryImages[i].src = loadThese[i];
		}
} // end loadImages

function displayFirst(){
		var firstImagePath = $('#thumbs a').attr('href');
		var firstImage = $('<img id="galleryBig" src="' + firstImagePath + '">');
		$('#thumbs').after(firstImage);

		var firstAltPath = $('#thumbs img').attr('alt');
		var firstAlt = $('<div id="caption">' + firstAltPath + '</div>');
		$('#galleryBig').after(firstAlt);
		
}

function gallery(){
	$('#gallery a').click(function(evt){
		evt.preventDefault();
		oldImage = $('#thumbs').next();
		var imgPath = $(this).attr('href');
		var newImage = $('<img id="galleryBig" src="' + imgPath + '">');
		newImage.hide();
		$('#thumbs').after(newImage);
		newImage.fadeIn();
		oldImage.remove();

		
		$('#caption').remove();
		
		var altText = $(this).children().attr('alt');

		// put the text from the altPath variable into a div tag and assign it to a variable
		var newTag = $('<div id="caption"> ' + altText + ' </div>');
		newTag.fadeIn();
		// put the variable that shows the text after the image fade in 
		$('#galleryBig').after(newTag);
		
		//firstAlt.remove();

	}); //end anonymous fcn
	
} //end gallery
