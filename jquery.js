var myPara = document.getElementById("content").getElementsByTagName("p")[5];

// in jquery
var myPara2 = $("#content p:last-child");

myPara2.addclass("test");
myPara2.removeClass("test");
myPara2.fadeOut();
myPara2.css({position:"relative",color:"red"})
myPara2.animate({left:"50px"})