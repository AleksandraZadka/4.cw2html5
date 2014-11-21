/**
 * @author Alex
 */

var main = function(){
	
	$('.dropdown-toggle').click(function(){
		
		$('.dropdown-menu').toggle();
	});
	
	$('.dropdown-menu').hide();
	
	
	$('#obrazy').click(function(){
		$('#wstawka').load("Galery.html");
	});
	
	$('span').hover(function(){
		$('span').css("font-size", "20px");
	});
	
	
	
	$('#about').click(function() {
		$('#info').load("about.html");

	});
	
	$('.arrow-next').click(function() {
    var currentSlide = $('.active-slide');
    var nextSlide = currentSlide.next();

    if(nextSlide.length === 0) {
      nextSlide = $('.slide').first();
    }
    
    currentSlide.slideUp(200).removeClass('active-slide');
    nextSlide.slideDown(200).addClass('active-slide');

  });
  
  $('.arrow-prev').click(function() {
    var currentSlide = $('.active-slide');
    var prevSlide = currentSlide.prev();

    
    if(prevSlide.length === 0) {
      prevSlide = $('.slide').last();
      
    }
    
    currentSlide.slideUp(200).removeClass('active-slide');
    prevSlide.slideDown(200).addClass('active-slide');

      });
      
    

$("#one").click(function(){
    $(this).animate({
      left:"900px",
      height:"350px",
      width:"500px"
    });});
$('#one').dblclick(function(){
	$(this).animate({
		left:"-900px",
		height:"300px",
		width:"1000px"
	});
});
$("#two").click(function(){
    $(this).animate({
      left:"900px",
      height:"350px",
      width:"600px"
    });});
$('#two').dblclick(function(){
	$(this).animate({
		left:"-900px",
		height:"300px",
		width:"1000px"
	});
});
$("#three").click(function(){
    $(this).animate({
      left:"900px",
      height:"350px",
      width:"700px"
    });});
$('#three').dblclick(function(){
	$(this).animate({
		left:"-900px",
		height:"300px",
		width:"1000px"
	});
});

    

  	};


$(document).ready(main);
