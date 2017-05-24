$(document).ready(function() {
	setTimeout(kiss, 3000);
});

function kiss() {
	$('body').toggleClass('kiss');
	setTimeout(kiss, 3000);
}