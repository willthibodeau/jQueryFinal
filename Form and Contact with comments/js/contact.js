// need to use jQuery at least 1.6 for prop() method
$('document').ready(function(){
	hideEmail('alec', 'example.com', 'hiddenEmail');//the email name then domain then the class of the location
	hideEmail('bob', 'example.com', 'bobsEmail');
	autoFocus('#name');
	autoClear();
	toggleDependents('#spam');// pass the master control with the id of spam

	$( "#datepicker" ).datepicker({ minDate: "-20Y", maxDate: "+1M +10D" });
});// end document ready

// this function allows the email to not be hard coded on the site and replaces it 
function hideEmail(user, domain, replaceMe ) { // user = alec, domain = example.com , replaceMe = hiddenEmail
/* 
1 specify the username and domain
2 build an anchor tag
3 replace the dummy html code whith my new A tag
*/
//create the email address
var address = user + '@' + domain;

// build anchor tag
var emailLink = 'Send email to<a href="mailto:' + address + ' "> ' + address + '</a>';

// put it on the page
$('.' + replaceMe).html(emailLink);

}//end hideEmail

// focuses on one location when the page loads
function autoFocus(field){
	$(field).focus();// focuses on the field of the variable from the call
}// end autoFocus

//autoclears the form elements
function autoClear(){
	// grab all elements that might contain default text
	var elements = $('input[type="text"], textarea');// creates an array of all inputs and text area, like css selector
	// compare default text to the current text on focus (focus and blur)
	elements.focus(function(){
		// does it have a default value
		var defValue = $(this).prop('defaultValue');//defaultValue is a "prop" value
		var currentValue = $(this).val();//val is a method that gets the value typed inside the "elements"
		if(defValue == currentValue){
			$(this).val('');// val can be used to remove or isert a value

		}
	})//end anon function
// when user leaves, check for blank value, 
// if blank, set it back to default
elements.blur(function(){
	if($(this).val() == ''){// checks this blur element value  is equal to empty
		$(this).val($(this).prop('defaultValue'));// set "this" to the defaultValue
	}
})// end anon function
}//end autoClear

function toggleDependents(masterTrigger){
// default radio buttons to be disabled since the check box is initially unchecked
// first find the radio buttons and disable them so they cant be clicked
$('input[type="radio"][name="frequency"]').attr('disabled', true);

// gray out the labels
// labels ar ehe previous siblings
$('input[type="radio"][name="frequency"]').prev().css('color','#999');

// bind click to checkbox
// check for the checked static
// act appropriately
$(masterTrigger).click(function(){// binds click to the checkbox
	if($(this).is(':checked') == 0) {
		$('input[type="radio"][name="frequency"]').attr('disabled', true);
		$('input[type="radio"][name="frequency"]').prev().css('color','#999');	
	} else { // box must be checked
		$('input[type="radio"][name="frequency"]').attr('disabled', false);
		$('input[type="radio"][name="frequency"]').prev().css('color','#000');
	}// end else 
 })// end anon function
}// end toggleDependents