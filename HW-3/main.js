function dayFunction(choice) {
    var answer1 = document.getElementById("choice1").innerHTML;
    var answer2 = document.getElementById("choice2").innerHTML;

    if (choice == 1 && answer1 == "Yes") {
        document.getElementById("day").innerHTML = "Good thing you woke up early! Your friend called and has an extra ticket to go to a concert tonight. Do you go or stay home?";
        document.getElementById("choice1").innerHTML = "Go";
        document.getElementById("choice2").innerHTML = "Stay home";
      } else if (choice == 2 && answer2 == "No") {
          document.getElementById("day").innerHTML = "You have not gotten that much sleep in a long time! Bad news, though, you missed a call from your friend asking you to a concert. He already gave the ticket to someone else.  Do you buy your own ticket or stay home?";
          document.getElementById("choice1").innerHTML = "Buy a ticket";
          document.getElementById("choice2").innerHTML = "Stay home";
      } else if (choice == 1 && answer1 == "Go") {
          document.getElementById("day").innerHTML = "Should you go buy a new outfit for the concert, or should you save that money to get drinks with your friend before the concert instead?";
          document.getElementById("choice1").innerHTML = "New outfit";
          document.getElementById("choice2").innerHTML = "Drinks";
      } else if (choice == 2 && answer2 == "Stay home") {
          document.getElementById("day").innerHTML = "You decide you want to have a chill day by yourself. Instead, you decide to go to the gas station and buy a lottery ticket, and you WIN!! What are you going to buy with your new found fortune?";
          document.getElementById("choice1").innerHTML = "Mansion in the Bahamas";
          document.getElementById("choice2").innerHTML = "Private island";
      } else if (choice == 1 && answer1 == "Buy a ticket") {
          document.getElementById("day").innerHTML = "You caved and decided to buy a ticket for the concert. Now you have to decide if you want to go buy a new outfit for the concert or save that money and get drinks before.";
          document.getElementById("choice1").innerHTML = "Buy a new outfit";
          document.getElementById("choice2").innerHTML = "Get some drinks";
      } else if (choice == 2 && answer2 == "Stay home") {
          document.getElementById("day").innerHTML = "You decide you want to have a chill day by yourself. Instead, you decide to go to the gas station and buy a lottery ticket, and you WIN!! What are you going to buy with your new found fortune?";
          document.getElementById("choice1").innerHTML = "Buy a yacht";
          document.getElementById("choice2").innerHTML = "Beach house in Miami";
      } else if (choice == 1 && answer1 == "New outfit") {
          document.getElementById("day").innerHTML = "You spent too much money and are officially broke! Care to restart?";
          document.getElementById("choice1").innerHTML = "Restart";
          document.getElementById("choice2").innerHTML = "No quit";
      } else if (choice == 2 && answer2 == "Drinks") {
          document.getElementById("day").innerHTML = "You spent too much money and are officially broke! Care to restart?";
          document.getElementById("choice1").innerHTML = "Restart";
          document.getElementById("choice2").innerHTML = "No quit";
      } else if (choice == 1 && answer1 == "Mansion in the Bahamas") {
          document.getElementById("day").innerHTML = "Congrats you are rich! Care to restart?";
          document.getElementById("choice1").innerHTML = "Restart";
          document.getElementById("choice2").innerHTML = "No quit";
      } else if (choice == 2 && answer2 == "Private island") {
          document.getElementById("day").innerHTML = "Congrats you are rich! Care to restart?";
          document.getElementById("choice1").innerHTML = "Restart";
          document.getElementById("choice2").innerHTML = "No quit";
      } else if (choice == 1 && answer1 == "Buy a new outfit") {
          document.getElementById("day").innerHTML = "You spent too much money and are officially broke! Care to restart?";
          document.getElementById("choice1").innerHTML = "Restart";
          document.getElementById("choice2").innerHTML = "No quit";
      } else if (choice == 2 && answer2 == "Get some drinks") {
          document.getElementById("day").innerHTML = "You spent too much money and are officially broke! Care to restart?";
          document.getElementById("choice1").innerHTML = "Restart";
          document.getElementById("choice2").innerHTML = "No quit";
      } else if (choice == 1 && answer1 == "Buy a yacht") {
          document.getElementById("day").innerHTML = "Congrats you are rich! Care to restart?";
          document.getElementById("choice1").innerHTML = "Restart";
          document.getElementById("choice2").innerHTML = "No quit";
      } else if (choice == 2 && answer2 == "Beach house in Miami") {
          document.getElementById("day").innerHTML = "Congrats you are rich! Care to restart?";
          document.getElementById("choice1").innerHTML = "Restart";
          document.getElementById("choice2").innerHTML = "No quit";

        } else if (choice == 1 && answer1 == "Restart") {
              document.getElementById("day").innerHTML = "You are awakened at 6 AM by a dog barking outside.  Do you wake up for the day?";
              document.getElementById("choice1").innerHTML = "Yes";
              document.getElementById("choice2").innerHTML = "No";
          } else if (choice == 2 && answer2 == "No quit") {
              document.getElementById("day").innerHTML = "Thanks for playing!";
    }
}
