var turtle1Selector = "#first";
var turtle2Selector = "#second";
var turtle3Selector = "#third";
var turtle4Selector = "#fourth";

var allTurtles = new Arrary();

class TurtleInfo{
  constructor(selector, imagePath)
  {
    this.selector = selector;
    this.imagePath = imagePath;
  }

  get theSelector(){
    return this.Selector;
  }

  get theImagePath(){
    return this.imagePath;
  }
}

function initializeArray(){
  var first = new TurtleInfo("#first", "imgs/turtle1.jpg");
  allTurtles.push(first);

  var second = new TurtleInfo("#first", "imgs/turtle2.jpg");
  allTurtles.push(second);

  var third = new TurtleInfo("#first", "imgs/turtle3.jpg");
  allTurtles.push(third);

  var fourth = new TurtleInfo("#fourth", "imgs/turtle4.jpg");
  allTurtles.push(fourth);
}

$(document).ready(function(){
  $("button").click(function(){
  $(allTurtles[0].theSelector).attr("src", allTurtles[0].theImagePath);

    setInterval(moveSquare, 1000);
    $(allTurtles[0].theSelector).fadeOut().fadeIn();
    });
});

function moveSquare()
{
  $("#square4").animate({left:100}).animate({top:100}).animate({left:40}).animate({top:600});
  $("#square3").animate({left:100}).animate({top:200}).animate({left:30}).animate({top:300});
  $("#square2").animate({left:100}).animate({top:300}).animate({left:20}).animate({top:400});
  $("#square1").animate({left:100}).animate({top:400}).animate({left:10}).animate({top:600});
}
