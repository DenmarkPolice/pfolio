// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

var text = "";
var tested = "true";
var tester = 0;
var assignAllDiv = 0;
var divs = [
      "På bar backe",
      "Portfolio",
      "TBA",
      "TBA",
      "TBA"
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

      console.log("complete");
    });

    $(function(){
        $('.scroll').on('click', function(){

          $(".second-scroll-container").css({"display":"block"})

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

      //menuDiv = ".sScroll" + tester;
      //menuDivP = ".sScroll" + tester + " p";
      //$(menuDiv).css({
      //  "pointer-events": "none",
      //  "cursor": "default",
      //  "background-color": "#FFFFFF",
      //  "color": "#4f4f4f"
      //});

      targetDiv = ".sScontent" + tester;
      $(targetDiv).css({"display": "block"});
      $(targetDiv).animate({"opacity": "1"}, 1500 );

      assignAllDiv = tester;
      assignAllDiv += 1;
      while (assignAllDivCounter < 4) {

        if (assignAllDiv == 5) {
          assignAllDiv = 0;
        }

        //menuDiv = ".sScroll" + assignAllDiv;
        //menuDivP = ".sScroll" + assignAllDiv + " p";
        //$(menuDiv).css({"pointer-events": "initial","cursor": "pointer"});
        //$(menuDiv).css({"background-color": "transparent", "color": "#FFFFFF"});

        //$(".second-scroll:hover").css({"background-color": "#FFFFFF", "color": "#4f4f4f"});

        targetDiv = ".sScontent" + assignAllDiv;
        $(targetDiv).animate({"opacity": "0"}, 500 );
        $(targetDiv).css({"display": "none"});

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


function openInNewTab(url) {
  window.open(url);
}
