$(function() {
    $('#login').click(function(){
    	$('.form-signin').fadeIn();
    	$('.logo-front').hide('slow');
    	$('#login').hide('slow');
    });
    
    $('.nav li').click(function(){
    	$(this).addClass('active');
    });
});