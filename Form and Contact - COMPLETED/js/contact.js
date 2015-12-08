// need to use jQuery at least 1.6 for prop() method
$('document').ready(function(){
	hideEmail('alec', 'example.com', '.hiddenEmail');
	hideEmail('bob', 'test.com', '.BobsEmail');
	autoFocus('#name');
	autoClear();
	toggleDependents('#spam'); // pass the master control
});

function hideEmail(user, domain, replaceMe){
/*
1 - specify the username and domain
2 - build an anchor tag
3 - replace the dummy HTML code with my new A tag
*/

// create the email address
var address = user + '@' + domain;
// build anchor tag
var emailLink = 'Send email to  <a href="mailto:' + address + '">' + address + '</a>';
// put it on the page
$(replaceMe).html(emailLink);
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


function toggleDependents(masterTrigger){

// default radio buttons to disabled
// since the checkbox is initially unchecked
$('input[type="radio"][name="frequency"]').attr('disabled', true);

// gray out the labels
// labels are the previous siblings
$('input[type="radio"][name="frequency"]').prev().css('color','#999');

//bind click to checkbox 
// check for checked state 
// act appropriately 
$(masterTrigger).click(function(){
		if($(this).is(':checked') == 0){
		$('input[type="radio"][name="frequency"]').attr('disabled', true);
		$('input[type="radio"][name="frequency"]').prev().css('color','#999');
		} else { // box must be checked
			$('input[type="radio"][name="frequency"]').attr('disabled', false);
			$('input[type="radio"][name="frequency"]').prev().css('color','#000');
		}
	}); // end anonymous function 
}









