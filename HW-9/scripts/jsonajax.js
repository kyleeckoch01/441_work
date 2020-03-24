$(document).ready(function () {
           $("button").click(function () {
               $("#senatorInformation").load("data/data.json", function(responseText){
                   var senator = JSON.parse(responseText);
                   $("#senatorInformation").html("Name: " + senator.name
               + "<br>Role:" + senator.Role + "<br>State:" + "<br>" + senator.state + "<br>Rank:" + "<br>" + senator.rank + "<br>Class:" + "<br>" + senator.class)
             });
           });
       });
