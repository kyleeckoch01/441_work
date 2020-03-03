class ViewFinder
{
    constructor(image, title, author, description, year)
    {
        this.image = image;
        this.title = title;
        this.author = author;
        this.description= description;
        this.year = year;
    }

      theImage()
      {
        return "./imgs/" + this.image;
      }

      theTitle()
      {
        return this.title;
      }

      theDescription()
      {
        return this.description;
      }

      theAuthor()
      {
        return this.author;
      }

      theYear()
      {
        return this.year;
      }

  }

var myPicture;
var random;

function accessInformation()
{
  let myPicture1 = new ViewFinder("outer.jpg", "Outerspace", "A look into outerspace", "Unknown", "Spring 2020")
  let myPicture2 = new ViewFinder("Koch_finaldrawing_1.jpg", "Psychedelic Space 1", "An astronaut admiring space", "Kylee Koch", "Spring 2020")
  let myPicture3 = new ViewFinder("Koch_finaldrawing_2.jpg", "Psychedelic Space 2", "Two astronauts chillin in a mouth", "Kylee Koch", "Spring 2020")
  let myPicture4 = new ViewFinder("Koch_finaldrawing_3.jpg", "Psychedelic Space 3", "An astronaut taking a moment for himself", "Kylee Koch", "Spring 2020")
  let myPicture5 = new ViewFinder("outer2.jpg", "Outerspace 2", "A view of outerspace", "Unknown", "Spring 2020")

  var myPictures = [myPicture1, myPicture2, myPicture3, myPicture4, myPicture5];

  while(random === myPicture)
  {
    random= Math.floor(Math.random() * 5);
    console.log(random);
  }

  myPicture = random;

  //set card
  document.getElementById("image").src = myPictures[myPicture].theImage();
  document.getElementById("title").innerHTML = myPictures[myPicture].theTitle();
  document.getElementById("desc").innerHTML = myPictures[myPicture].theDescription();
  document.getElementById("name").innerHTML = myPictures[myPicture].theAuthor();
  document.getElementById("year").innerHTML = myPictures[myPicture].theYear();
}
