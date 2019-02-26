// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

var tested = "true";
var tester = 0;

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

    $(document).click(function(event) {
      var text = $(event.target).text();
      tested = "false";
      tester = 0;
      console.log("Click_event");
      console.log(tested == "false");
      $

    });

    while (tested == "false") {

      console.log("tested");
      if (tester > 4) {
        tested = "true";
      }
      tester += 1;
    }
    $(function(){
        $('.scroll').on('click', function(){

          setTimeout(function() {
              $(".intro").fadeOut(1500);
          },500);

          setTimeout(function() {

              $(".logo").animate({
                width: 80,
                "padding-top": 13,
                "padding-bottom": 13,
                "margin-left": "10px",
                "margin-top": "15px"
              },1500);

              $(".A").animate({
                "font-size": 19,
                "line-height": 7
              },1500);

              $(".P").animate({
                "font-size": 23,
                "line-height": 26
              },1500);

              $(".S").animate({
                "font-size": 28,
                "line-height": 12
              },1500);

              setTimeout(function() {
                $("nav").animate({
                  left: "-200px"
                }, 1000 );
              },2500);

              setTimeout(function() {
                $(".second-background").animate({
                  opacity: 1
                }, 2500 );
              },500);


          },0);

        });
    });
});
