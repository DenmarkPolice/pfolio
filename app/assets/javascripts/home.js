// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

var text = "";
var tested = "true";
var tester = 0;
var assignAllDiv = 0;
var divs = [
      "På bar backe",
      "Exempel 2",
      "Annan sida",
      "Fler sidor",
      "Jag gjorde den"
    ];

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
      assignAllDivCounter = 0;
      displayHelper(text);
    });

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

              setTimeout(function() {
                $(".second-scroll").css({"pointer-events": "initial","cursor": "pointer"});
              },500);

          },0);

        });
    });
});

//Helper functions


function displayHelper(text) {
  while (tested == "false") {

    if (text == divs[tester]) {

      targetDiv = ".sScroll" + tester;
      $(targetDiv).css({"opacity": "1"});

      assignAllDiv = tester;
      assignAllDiv += 1;
      while (assignAllDivCounter < 4) {

        if (assignAllDiv == 5) {
          assignAllDiv = 0;
        }

        targetDiv = ".sScroll" + assignAllDiv;
        $(targetDiv).css({"opacity": "0"});


        assignAllDiv += 1;
        assignAllDivCounter += 1;
      }
      tested = "true";
    }

    if (tester > 5) {
      tested = "true";
    }
    tester += 1;
  }
}
