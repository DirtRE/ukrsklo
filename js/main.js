$(document).ready(function(){
	/////////////////////////////////////////////////////////////////////////////////////
    
    // Высота .layout
    $(".layout").css("min-height", $(window).height());

    /////////////////////////////////////////////////////////////////////////////////////
    $.fn.equivalent = function (){
        var $blocks = $(this),
            maxH    = $blocks.eq(0).height(); 
        $blocks.each(function(){
            maxH = ( $(this).height() > maxH ) ? $(this).height() : maxH;
        });
        $blocks.height(maxH);
    };
    $('.nav').equivalent();
    ///////////////////////////////////////////////////////////////////////////////////////
	// Modal
	$(function() {
            $('.modal_button').bind('click', function(e) {
				var modal= $(this).attr("href");
                e.preventDefault();
                $(modal).bPopup({
				closeClass:'close',
				modalClose: true,
				onClose: function() { $('.modal_reset').val(""); }
			});
        });
    });
////////////////////////////////////////////////////////////////////////////////////////////////
if($('ul').is(".bxslider")){
    $('.bxslider').bxSlider({
      nextText:'',
      prevText:'',
      auto: true,
      pause: 7000,
    });
  }
////////////////////////////////////////////////////////////////////////////////////////////////
$('.quest').click(function() {
	if($(this).hasClass("active")){}
	else{
		$('.quest').removeClass("active");
		//$('.hide').slideUp("slow");
		$(this).addClass("active");
		//$(this).find('.hide').slideDown("slow");
		$.when($('.hide').slideUp("slow")).then(function(){$(".quest.active").find('.hide').slideDown("slow");});
	}
});
////////////////////////////////////////////////////////////////////////////////////////////////
	if($("div").is(".sl")){
		$('.sl').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,		
			asNavFor: '.slider-nav'
		});
		$('.ml_slide').slick({
		  slidesToShow: 4,
		  slidesToScroll: 1,
		  asNavFor: '.slider-for',
		  dots: false,
		  //centerMode: true,
		  focusOnSelect: true,
		  centerPadding:0
		
		});
	}
	
////////////////////////////////////////////////////////////////////////////////////////////////



	
	$('.vidi_prokcii').find('.kart').each(function(i) {
		$('.kart').each(function() {
			$('.kart').eq(i).css("z-index",30-i);
		});
	});
	$(".kart").hover(
		function(){
			$(".kart").find(".perechen").slideUp("slow");
			$(this).find(".perechen").slideDown("slow");
		},
		function(){
			$(".kart").find(".perechen").slideUp("slow",function(){$(this).stop(true);});
		}
	);
	
});
$(window).load(function(){
	$(".layout").css("min-height", $(window).height());
	var footer = $("footer").outerHeight(true);
	$(".layout").css("margin-bottom", footer*-1);
	$(".footer-push").css("height", footer);
});
$(window).resize(function(){
	$(".layout").css("min-height", $(window).height());
	var footer = $("footer").outerHeight(true);
	$(".layout").css("margin-bottom", footer*-1);
	$(".footer-push").css("height", footer);
});


