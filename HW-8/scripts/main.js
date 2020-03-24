var turtle1Selector = "#first";
var turtle2Selector = "#second";
var turtle3Selector = "#third";
var turtle4Selector = "#fourth";

// there was a misspelling in array
//var allTurtles = new Arrary();
var allTurtles = new Array();

class TurtleInfo {
    constructor(selector, imagePath) {
        this.selector = selector;
        this.imagePath = imagePath;
    }

    get theSelector() {
        // you want to make sure the capitalization is the same
        //return this.Selector;
        return this.selector;
    }

    get theImagePath() {
        return this.imagePath;
    }
}

function initializeArray() {
    // you want to reference the id that is in your index.html
    // in this case, <img tag has the id "turtle1"
    //var first = new TurtleInfo("#first", "imgs/turtle1.jpg");
    var first = new TurtleInfo("#turtle1", "imgs/turtle1.jpg");
    allTurtles.push(first);

    var second = new TurtleInfo("#turtle1", "imgs/turtle2.jpg");
    allTurtles.push(second);

    var third = new TurtleInfo("#turtle1", "imgs/turtle3.jpg");
    allTurtles.push(third);

    var fourth = new TurtleInfo("#turtle1", "imgs/turtle4.jpg");
    allTurtles.push(fourth);
}

$(document).ready(function() {
    $("button").click(function() {
        // now you just need to add the random number here and put that in instead of the 0 for the array.
        $(allTurtles[0].theSelector).attr("src", allTurtles[0].theImagePath);

        setInterval(moveSquare, 1000);
        $(allTurtles[0].theSelector).fadeOut().fadeIn();
    });
});

function moveSquare() {
    $("#square4").animate({ left: 100 }).animate({ top: 100 }).animate({ left: 40 }).animate({ top: 600 });
    $("#square3").animate({ left: 100 }).animate({ top: 200 }).animate({ left: 30 }).animate({ top: 300 });
    $("#square2").animate({ left: 100 }).animate({ top: 300 }).animate({ left: 20 }).animate({ top: 400 });
    $("#square1").animate({ left: 100 }).animate({ top: 400 }).animate({ left: 10 }).animate({ top: 600 });
  }
