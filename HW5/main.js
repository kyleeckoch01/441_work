var imageTags = ["image01", "image02", "image03", "image04", "image05", "image06", "image07", "image08", "image09", "image10"];
var blankImagePath = "imgs/placeholder6.jpg";
var actualImages = new Array();

function printBlanks()
{
    createRandomImageArray();
    for(var i = 0; i < imageTags.length; i++)
    {
      document.getElementById(imageTags[i]).src= blankImagePath;
    }

}

function createRandomImageArray()
{
  var actualImagePath = ["imgs/placeholder1.jpg", "imgs/placeholder2.jpeg", "imgs/placeholder3.jpg", "imgs/placeholder4.jpg", "imgs/placeholder5.jpg"];
    var count = [0,0];
    while(actualImages.length < 25)
    {
        var randomNumber = Math.floor(Math.random() * actualImagePath.length)
        if(count[randomNumber] < 12.5)
        {
            actualImages.push(actualImagePath[randomNumber]);
            count[randomNumber] = count[randomNumber] + 1;
        }
    }





}

function flipImage(number)
{
    document.getElementById(imageTags[number]).src= actualImages[number];
}
