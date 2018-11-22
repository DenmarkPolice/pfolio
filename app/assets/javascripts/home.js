// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.


$(document).ready(function() {
    setTimeout(function() {
        $("h1").fadeIn(1500);
        $(".logo").animate({
          width: 200
        }, 2000 );
    },2000);

    setTimeout(function() {
      $(".A, .P, .S").animate({
        opacity: 1
      }, 1000 );
    },4000);
});
