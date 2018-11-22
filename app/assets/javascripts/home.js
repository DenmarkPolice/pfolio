// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.


$(document).ready(function() {
    setTimeout(function() {
        $(".intro").fadeIn(1500);
    },500);

    setTimeout(function() {
      $(".logo").animate({
        width: 200
      }, 2000 );
    },1000);

    setTimeout(function() {
      $(".A, .P, .S").animate({
        opacity: 1
      }, 1000 );
    },1500);

    setTimeout(function() {
      $("nav").animate({
        left: 0
      }, 1000 );
    },2500);
});
