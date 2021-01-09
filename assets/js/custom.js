$(document).ready(function () {
        $("#header").load("header.html");
        var curq;
                $(".que").click(function () {
                         $(".que").each(function (index) {
                                if($(this).css("background-color") != "rgb(92, 184, 92)") {
                                        $(this).css({"background-color": "#f7f7f7 ", "color": "black"});
                                }
                         });
                        if($(this).css("background-color") != "rgb(92, 184, 92)") {
                                $(this).css({"background-color": "#0275d8", "color": "white"});
                        }
                         curq = this;
                });

                $("#done").click(function () {
                        $(curq).css({"background-color": "#5cb85c", "color": "white"});
                });
                $("#unmark").click(function () {
                        $(curq).css({"background-color": "#f7f7f7", "color": "black"});
	        });
});
