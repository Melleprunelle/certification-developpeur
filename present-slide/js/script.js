//animation navbar fixed (transparence)
$(document).ready(function () {
    var scroll_start = 0;
    var startchange = $('#startchange');
    var offset = startchange.offset();
    if (startchange.length) {
        $(document).scroll(function () {
            scroll_start = $(this).scrollTop();
            if (scroll_start > offset.top) {
                $('.navbar').css('color', 'white');
                $('.navbar').css('transition', '0.5s');
            } else {
                $(".navbar").css('color', '#222');
                $('.navbar').css('transition', '0.5s');
            }
        });
    }
});


//Scroll fluid pour l'ancre
$(document).ready(function() {
		$('.js-scrollTo').on('click', function() { // Au clic sur un élément
			var page = $(this).attr('href'); // Page cible
			var speed = 750; // Durée de l'animation (en ms)
			$('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
			return false;
		});
	});


// SCROLL DE 100VH AVEC LE BOUTON FIXE
   $('.button').keydown(function(){
       $("body").animate({ scrollTop: window.pageYOffset + $(window).height()}, 800);
   });


$("body").addClass("thin");
// If user has Javascript disabled, the thick scrollbar is shown
$("body").mouseover(function(){
  $(this).removeClass("thin");
});
$("body").mouseover(function(){
  $(this).addClass("thin");
});
$("body").scroll(function () {
  $("body").addClass("thin");
});

// Using http://css-tricks.com/custom-scrollbars-in-webkit/ for basic custom scrollbars