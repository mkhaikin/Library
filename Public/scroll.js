$(function(){
  var start =100;
  var shrinkHeader = 300;
  var addBlue=655;
  var addRed=1255;
  var addYellow=1855;

  $(window).scroll(function() {
    var scroll = getCurrentScroll();

    if ( scroll >= shrinkHeader  ) {
         $('.header').addClass('shrink');
        }
        else  {
           $('.header').removeClass('shrink');
        }

    if ( scroll >= addBlue  ) {
         $('div.b').show();
         $('div.b').addClass('blue');
        }
        else  {
           $('div.b').removeClass('blue');
           $('div.b').hide();
        }

    if ( scroll >= addRed  ) {
         $('div.c').show();
         $('div.c').addClass('red');
        }
        else  {
           $('div.c').removeClass('red');
           $('div.c').hide();
        }

    if ( scroll >= addYellow  ) {
         $('div.d').show();
         $('div.d').addClass('yellow');
        }
        else  {
           $('div.d').removeClass('yellow');
           $('div.d').hide();
        }
  });
function getCurrentScroll() {
    return window.pageYOffset || document.documentElement.scrollTop;
    }
});
