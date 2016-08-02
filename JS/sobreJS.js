$(document).ready(function() {

	$('#botaoLeft').click(function(){
		$('.principalSobreMim').css('display','block');
		$('#botaoRight').css('display','inline-block');
		$('.principalExperiencias').css('display','none');
		$('#botaoLeft').css('display','none');

	});

	$('#botaoRight').click(function(){ 

		$('.principalSobreMim').css('display','none');
		$('#botaoRight').css('display','none');
		$('.principalExperiencias').css('display','block');
		$('#botaoLeft').css('display','inline-block');

	});

});