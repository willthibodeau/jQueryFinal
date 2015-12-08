$('document').ready(function(){
	$('#tipCalc').submit(calculate);
	
	
	hideEmail('bob', 'example.com', 'hideBobEmail');
	hideEmail('bobbie','example.com','hideBobbieEmail');
	autoFocus('#name');
	autoClear();
	toggleDependents('#round');
	addInputClassToName();
	addClassToGender();
	// addClassToTotal();
	// addClassToPercent();
	addMarginToLabel();
addValidationEngineToForm('#tipCalc');

	
});// end ready function


function addMarginToLabel(){
	$('label').css({
		'margin-top': '35px' 
	});
}

function addValidationEngineToForm(tipCalc){
	$(tipCalc).validationEngine();
// alert('a');	
}


function addInputClassToName(){
	$('#fullname').addClass('validate[required]').addClass('text-input');
}// end addInputClass

function addClassToGender(){
	$( 'input[name="gender"]' ).addClass('validate[required]').addClass('radio');
//alert('a');
}

function calculate(evt){
	evt.preventDefault();

	if( $("#tipCalc").validationEngine('validate') == true ){
		var allHashes = [];
	var inputs = $('#tipCalc').find('input:not(:submit)');
		for(var i=0; i<inputs.length; i++){
			if($(inputs[i]).is(':input[type=text]') && $(inputs[i]).val() != ''){
				allHashes[$(inputs[i]).attr('id')] = $(inputs[i]).val();
			}
			if($(inputs[i]).prop('checked')){
				allHashes[$(inputs[i]).attr('name')] = $(inputs[i]).val();
			}	
		}
	$('#totalBill').text('Total bill: $' + allHashes['total']);
	var tip = allHashes['total'] * allHashes['percent'] / 100;

		if($('#round').prop('checked')){
			if(allHashes['roundTo']=='int'){
				//round to dollar
				tip = Math.round(tip);
			} else if(allHashes['roundTo']=='ten'){
				//round to dime
				tip = Math.round(tip*10)/10;
				tip = parseFloat(tip).toFixed(2);
			} else if(allHashes['roundTo']=='hun'){
				// round to cent
				tip = Math.round(tip * 100)/100;
				tip = parseFloat(tip).toFixed(2);
			}
		}

	$('#totalTip').text('Total tip: ' + allHashes['percent'] + '% is $' + tip);
	var msg = '<h4>That\'s a very ' + allHashes['gender'] + ' tip, ' + allHashes['name'] + '!</h4>';
	$('#totalTip').next().remove();
	$('#totalTip').after(msg);
}// end calculate 
	}
	

//create function to hide email
function hideEmail(user, domain, replaceMe){
	//create the email address
	var address = user + '@' + domain;

	// build the anchor tag
	var emailLink = 'Send email to <a href="mailto:' + address + ' "> ' + address + '</a>';

	// put it on the page
	$('.' + replaceMe).html(emailLink);
}//end hideEmail

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

// create a function to disable the 3 radio buttons unless the round off checkbox is checked 
function toggleDependents(masterTrigger){
	$('input[type="radio"][name="roundTo"]').attr('disabled', true);
	$('input[type="radio"][name="roundTo"]').prev().css('color','#999');
	$(masterTrigger).click(function(){
		if($(this).is(':checked') == 0){
			$('input[type="radio"][name="roundTo"]').attr('disabled', true);
			$('input[type="radio"][name="roundTo"]').prev().css('color','#999');
		} else {
			$('input[type="radio"][name="roundTo"]').attr('disabled', false);
			$('input[type="radio"][name="roundTo"]').prev().css('color','#000');
		}// end if
	})//end anon function
}//end toggleDependents










