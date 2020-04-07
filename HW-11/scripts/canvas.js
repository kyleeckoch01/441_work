var canvas;
var ctx;
var x = 50;
var y = 50;
var square1, square2;
var square01, square02, square03;
var direction;
var questions;
var squareArray = [];
var squaresArray = [];
var lives = 3;
$(document).ready(function(){

    setup();

    $(this).keypress(function(event){
        getKey(event);

    });
});



function setup()
{
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");

    // create two objects
    square1 = new Square(150,150,50,50,"#FA7ECA");
    square2 = new Square(400,400,100,100,"#F02BA4");
    $.getJSON("data/information.json", function(data) {
        for(var i = 0; i < data.squares.length; i++)
        {
            squareArray.push(new Square(data.squares[i].x,data.squares[i].y, data.squares[i].h, data.squares[i].w, data.squares[i].color));
        }
        drawSquare();
    });

function setup2()
{
  canvas = document.getElementById("myCanvas");
  ctx = canvas.getContext("2d");
  square01 = new Squares(200, 200, 35, 35, "#BA2BF0");
  square02 = new Squares(300, 300, 40, 40, "#BC75D8");
  square03 = new Squares(500, 500, 100, 100, "#EABFFB");

  $.getJSON("data/more.json", function(data) {
      for(var i = 0; i < data.squares.length; i++)
      {
          squaresArray.push(new Squares(data.squares[i].x,data.squares[i].y, data.squares[i].h, data.squares[i].w, data.squares[i].color));
      }
      drawSquares();
  });

}

}

function getKey(event)
{
    var char = event.which || event.keyCode;
    var actualLetter = String.fromCharCode(char);
    if(actualLetter == "w")
    {
        moveUp();
        direction = "up";
    }
    if(actualLetter == "s")
    {
        moveDown();
        direction = "down";
    }
    if(actualLetter == "a")
    {
        moveLeft();
        direction = "left";
    }
    if(actualLetter == "d")
    {
        moveRight();
        direction = "right";
    }
    var test = hasCollided(square1,square2);
    var test2 = false;
    for(var i = 0; i < squareArray.length; i++)
    {

        test2 = hasCollided(square1,squareArray[i]);
        if(test2 == true)
        {
            break;
        }


    }
    if(test || test2)
    {
        lives--;
        if(direction == "left")
        {
            moveRight();
        }
        else if(direction == "right")
        {
            moveLeft();
        }
        else if(direction == "up")
        {
            moveDown();
        }
        else if(direction == "down")
        {
            moveUp();
        }

    }
    drawSquare();

}

function moveUp()
{
    square1.y-=10;
}
function moveDown()
{
    square1.y+=10;
}
function moveRight()
{
    square1.x+=10;
}
function moveLeft()
{
    square1.x-=10;
}

function drawSquare()
{
    ctx.clearRect(0,0,800,600);
    ctx.fillStyle = square1.mainColor;
    ctx.fillRect(square1.x, square1.y, square1.width, square1.height);
    ctx.fillStyle = square2.mainColor;
    ctx.fillRect(square2.x, square2.y, square2.width, square2.height);
    for(var i = 0; i < squareArray.length; i++)
    {
        ctx.fillStyle = squareArray[i].mainColor;
        ctx.fillRect(squareArray[i].x, squareArray[i].y, squareArray[i].width, squareArray[i].height);
    }

    ctx.font = "30px Arial";
    ctx.fillText("Lives: " + lives, 10, 50);

}


function drawSquares()
{
    ctx.clearRect(0,0,800,600);
    ctx.fillStyle = squares01.mainColor;
    ctx.fillRect(squares01.x, squares01.y, squares01.width, squares01.height);
    ctx.fillStyle = squares02.mainColor;
    ctx.fillRect(squares02.x, squares02.y, squares02.width, squares02.height);
    for(var i = 0; i < squaresArray.length; i++)
    {
        ctx.fillStyle = squaresArray[i].mainColor;
        ctx.fillRect(squaresArray[i].x, squaresArray[i].y, squaresArray[i].width, squaresArray[i].height);
    }

}
function hasCollided(object1, object2) {
    return !(
        ((object1.y + object1.height) < (object2.y)) ||
        (object1.y > (object2.y + object2.height)) ||
        ((object1.x + object1.width) < object2.x) ||
        (object1.x > (object2.x + object2.width))
    );
}
