let senator = {
    "name" : "Sen. Michael Enzi",
    "role" : "Senator"
    "state" : "WY",
    "rank" : "Senior"
    "class" : "Class 2"

}


        $(function () {
            $("button").click(function () {
                showSenatorInfo();
            });

        });

        function showSenatorInfo()
            {
                $("#senatorInformation").html("Name: " + senator.name
            + "<br>Role:" + senator.Role + "<br>State:" + "<br>" + senator.state + "<br>Rank:" + "<br>" + senator.rank + "<br>Class:" + "<br>" + senator.class)
            }
