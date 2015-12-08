$('document').ready(function(){
	$('#tipCalc').submit(calculate);
});

function calculate(evt){
evt.preventDefault();
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
}