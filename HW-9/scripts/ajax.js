$(document).ready(function () {
           $("button").click(function () {
               $("#senatorInformation").load("data/senatorInfo.txt", fadeText);
           });
       });

       function fadeText()
       {
           $("#senatorInformation").fadeOut("slow").fadeIn("slow");
       }
