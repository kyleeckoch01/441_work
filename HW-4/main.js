function getChoice1()
{
    var myChoice = document.getElementById("choice").value;
    var myQuestion = document.getElementById("question");
    if(myChoice === "Yes")
    {
        document.getElementById("choice").style.display="none";
        document.getElementById("btnSubmit").style.display="none";

        document.getElementById("choice2").style.display="block";
        document.getElementById("btnSubmit2").style.display="block";

        document.getElementById("choice3").style.display="none";
        document.getElementById("btnSubmit3").style.display="none";


        myQuestion.innerHTML = "You chose yes. Good thing, because your friend called you and has an extra ticket to a concert. Do you accept?";
    }
    else if(myChoice === "No")
    {
      document.getElementById("choice").style.display="none";
      document.getElementById("btnSubmit").style.display="none";

      document.getElementById("choice2").style.display="none";
      document.getElementById("btnSubmit2").style.display="none";

      document.getElementById("choice3").style.display="block";
      document.getElementById("btnSubmit3").style.display="block";

        myQuestion.innerHTML = "You chose no. Bad news, you missed a call from your friend asking you to go to a concert. He already gave the ticket away. Do you buy your own or stay home?";

    }
    else
    {
        myQuestion.innerHTML = "Invalid answer";
    }

}

function getChoice2()
{
    var answer1 = document.getElementById("choice2").value;
    var myQuestion = document.getElementById("question");

    if(answer1 === "Yes")
    {

    document.getElementById("choice").style.display="none";
    document.getElementById("btnSubmit").style.display="none";

    document.getElementById("choice2").style.display="none";
    document.getElementById("btnSubmit2").style.display="none";

    document.getElementById("choice3").style.display="none";
    document.getElementById("btnSubmit3").style.display="none";

    document.getElementById("choice4").style.display="block";
    document.getElementById("btnSubmit4").style.display="block";

        myQuestion.innerHTML = "You accepted the ticket. Now you have to decide if you want to go buy a new outfit or save that money for drinks before the concert.";
    }
    else if(answer1 === "No")
    {

      document.getElementById("choice").style.display="none";
      document.getElementById("btnSubmit").style.display="none";

      document.getElementById("choice2").style.display="none";
      document.getElementById("btnSubmit2").style.display="none";

      document.getElementById("choice3").style.display="none";
      document.getElementById("btnSubmit3").style.display="none";

      document.getElementById("choice4").style.display="none";
      document.getElementById("btnSubmit4").style.display="none";

      document.getElementById("choice5").style.display="block";
      document.getElementById("btnSubmit5").style.display="block";


        myQuestion.innerHTML = "You chose no. It sounds nice to stay home today. Instead, you go to the gas station and buy a lottery ticket. You WON! What are you going to buy?";
      }
        else
        {
            myQuestion.innerHTML = "Invalid answer";
          }

  }
function getChoice3()
  {
    var answer2 = document.getElementById("choice3").value;
    var myQuestion = document.getElementById("question");

    if(answer2 === "Buy")
      {
        document.getElementById("choice").style.display="none";
        document.getElementById("btnSubmit").style.display="none";

        document.getElementById("choice2").style.display="none";
        document.getElementById("btnSubmit2").style.display="none";

        document.getElementById("choice3").style.display="none";
        document.getElementById("btnSubmit3").style.display="none";

        document.getElementById("choice4").style.display="none";
        document.getElementById("btnSubmit4").style.display="none";

        document.getElementById("choice5").style.display="none";
        document.getElementById("btnSubmit5").style.display="none";

        document.getElementById("choice6").style.display="block";
        document.getElementById("btnSubmit6").style.display="block";


      myQuestion.innerHTML = "You decided to buy your own ticket. Now you are faced with the choice of going to buy a new outfit or save that money for drinks before the concert.";
    }

  else if(answer2 === "Stay")
    {
        document.getElementById("choice").style.display="none";
        document.getElementById("btnSubmit").style.display="none";

        document.getElementById("choice2").style.display="none";
        document.getElementById("btnSubmit2").style.display="none";

        document.getElementById("choice3").style.display="none";
        document.getElementById("btnSubmit3").style.display="none";

        document.getElementById("choice4").style.display="none";
        document.getElementById("btnSubmit4").style.display="none";

        document.getElementById("choice5").style.display="none";
        document.getElementById("btnSubmit5").style.display="none";

        document.getElementById("choice6").style.display="none";
        document.getElementById("btnSubmit6").style.display="none";

        document.getElementById("choice7").style.display="block";
        document.getElementById("btnSubmit7").style.display="block";

    myQuestion.innerHTML = "You chose to stay home. Instead you decided to go to the gas station and buy a lottery ticket. You WON! What are you going to buy?";
    }
  else
    {
      myQuestion.innerHTML = "Invalid answer";
      }

    }

function getChoice4()
  {
    var answer3 = document.getElementById("choice4").value;
    var myQuestion = document.getElementById("question");

    if(answer3 === "Outfit")
      {
        myQuestion.innerHTML = "You chose to buy a new outfit. Bad news. You spent too much money and you are now broke. Restart?";
      }
    else if(answer3 === "Drinks")
      {
        myQuestion.innerHTML = "You chose to save the money for drinks. But bad news, you spent too much money and you are now broke. Restart?";
      }
    else
      {
        myQuestion.innerHTML = "Invalid answer";
      }

  }

function getChoice5()
    {
      var answer4 = document.getElementById("choice5").value;
      var myQuestion = document.getElementById("question");

      if(answer4 === "Island")
        {
          myQuestion.innerHTML = "You chose to buy an island with your new found fortune. Congrats! Restart?";
        }
      else if(answer4 === "Mansion")
        {
          myQuestion.innerHTML = "You chose to buy a mansion with your new found fortune. Congrats! Restart?";
        }
      else
        {
          myQuestion.innerHTML = "Invalid answer";
        }

  }


function getChoice6()
    {
      var answer5 = document.getElementById("choice6").value;
      var myQuestion = document.getElementById("question");

      if(answer5 === "Outfit")
        {
          myQuestion.innerHTML = "You chose to buy a new outfit. Bad news. You spent too much money and you are now broke. Restart?";
          }
      else if(answer5 === "Drinks")
        {
          myQuestion.innerHTML = "You chose to save the money for drinks. But bad news, you spent too much money and you are now broke. Restart?";
          }
      else
        {
          myQuestion.innerHTML = "Invalid answer";
          }

    }

function getChoice7()
      {
        var answer6 = document.getElementById("choice7").value;
        var myQuestion = document.getElementById("question");

        if(answer6 === "Island")
            {
              myQuestion.innerHTML = "You chose to buy an island with your new found fortune. Congrats! Restart?";
              }
        else if(answer6 === "Mansion")
            {
              myQuestion.innerHTML = "You chose to buy a mansion with your new found fortune. Congrats! Restart?";
              }
        else
          {
            myQuestion.innerHTML = "Invalid answer";
            }

    }
