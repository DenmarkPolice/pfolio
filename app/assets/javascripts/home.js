// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.


$(document).ready(function() {
    setTimeout(function() {
        $(".intro").fadeIn(1500);
    },500);

    setTimeout(function() {
      $(".logo").animate({
        width: 200
      }, 1000 );
    },1000);

    setTimeout(function() {
      $(".first").animate({
        opacity: 1
      }, 800 );
    },1500);

    setTimeout(function() {
      $(".second").animate({
        opacity: 1
      }, 800 );
    },1750);

    setTimeout(function() {
      $(".third").animate({
        opacity: 1
      }, 800 );
    },2000);

    setTimeout(function() {
      $("nav").animate({
        left: 0
      }, 1000 );
    },2500);
});
