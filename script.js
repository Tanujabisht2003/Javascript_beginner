// alert("hello, world!");

// if else statement
// var youLikeMeat = false;

// if (youLikeMeat){
//     document.write("here is the meaty menu ...");
// }else{
//     document.write("you hate meat");
// }

// else if statement
// var myAge = 17;
// if(myAge >30 ){
//     document.write("you are over 30");
// }else if(myAge > 20){
//     document.write("you are over 20");
// }else if(myAge > 10){
//     document.write("you are over 18");
// }else{
//     document.write("you are not over 10");
// }

// logical operator
// if(myAge < 18 || myAge > 30){
//     document.write("you aint coming!");
// }else{
//     document.write("you can come, you cool dude");
// }

// if(myAge < 18 && myAge > 30){
//     document.write("you aint coming!");
// }else{
//     document.write("you can come, you cool dude");
// }

// while loop
// while(myAge < 20){
//     console.log("your age is less than 20");
//     myAge++;
// }
// document.write("you are now over 20");

// for loop
// for(age = 5;age< 10;age++){
//     console.log("your age is less than 10");
// }
// document.write("you are now over 18");

// var links = document.getElementsByTagName("a");
// for(i=1; i<links.length;i++){
//     console.log("this is a link number" + i);
// }
// document.write("all links now looped")

// for(i=0;i<10;i++){
//     if(i===4 || i===7){
//         continue;
//     }
//     console.log(i);
//     if(i==9){
//         break;
//     }
// }

// var links = document.getElementsByTagName("a");
// for(i=1; i<links.length;i++){
//     links[i].className = "link-" + i;
// }

// functions
// function getAverage(a,b){
//     var average = (a+b)/2;//local variable
//     console.log(average);
//     return average;
// }
// var myResult = getAverage(4,5,6); // global variable
// console.log("the average is" + myResult);

// var num = 6;
// var num2 = 8;
// console.log(num+num2);
// console.log(Math.PI);

// var str = "hello,world!";
// var str1 = str.slice(2);
// var str2 = str.slice(3,6);
// console.log(str2);

// var tags="meat,dubai,prok beef,chicken";
// var tags1 = tags.split(",");
// console.log(tags1);

// var Array1 = new Array();
// var Array2 = new Array(6);

// var Array1 = [];
// Array1[0] = 76;
// Array1[1] = "terd";

// var myArray1 = [34, "text", false];

// Array1.reverse();
// Array1.sort();
// Array1.length;

// var myArray = new Array();
// myArray[0] = 8;
// myArray[1] = "hello";

// Object Creation Using new Object():
// var myCar = new Object();
// myCar.maxspeed = 50;
// myCar.driver = "shaun";
// myCar.drive = function(){
//     console.log("now driving");
// };
// myCar.drive();

// Object Creation Using Object Literals:
// var myCar2 = {
//     maxspeed : 70,
//     driver :"net ninja",
//     drive:function(speed,time){
//         console.log(speed * time);
//     }

// };
// console.log(myCar2.maxspeed);
// myCar2.drive(50,3);

// this keyword

// var myCar2 = {
//     maxspeed : 70,
//     driver :"net ninja",
//     drive:function(speed,time){
//         console.log(speed * time);
//     },
//     test:function(){
//         console.log(this);
//     }
// };
// myCar2.test();
// console.log(myCar2.maxspeed);
// myCar2.drive(50,3);

// var myCar2 = {
//     maxspeed : 70,
//     driver :"net ninja",
//     drive:function(speed,time){
//         console.log(speed * time);
//     },
//     logDriver:function(){
//         console.log("driver name is"+ this.driver);
//     }
// };
// myCar2.logDriver();
// console.log(myCar2.maxspeed);
// myCar2.drive(50,3);

// constructor function
// var Car = function(maxspeed, driver){
//     this.maxspeed = maxspeed;
//     this.driver = driver;
//     this.drive = function(speed,time){
//         console.log(speed*time);
//     }
//     this.logDriver = function(){
//         console.log("driver name is " + this.driver);
//     };
// }
// var myCar = new Car(70, "ninja Man");
// var myCar2 = new Car(48, "ninja thor");
// var myCar3 = new Car(24, "ninja Manu");

// myCar.drive(38,4);
// myCar.logDriver();

// date object
// var mydate = new Date();
// console.log(mydate);
// var myPastDate = new Date(2003, 11, 21, 15, 45,10);
// var myFutureDate = new Date(2027, 11, 21);

// console.log(myPastDate);
// console.log(myFutureDate);

// var birthday = new Date(1985, 8, 15, 11, 15, 25);
// var birthday2 = new Date(1985, 8, 15, 11, 15, 25);

// console.log(birthday.getMonth());
// console.log(birthday.getFullYear());
// console.log(birthday.getDay());
// console.log(birthday.getDate());
// console.log(birthday.getHours());
// console.log(birthday.getTime());

// if(birthday == birthday2){
//     console.log("birthdays are same");
// }else{
//     console.log("birthdays are not same");
// }

// if(birthday.getTime() == birthday2.getTime()){
//     console.log("birthdays are same");
// }else{
//     console.log("birthdays are not same");
// }

// changing html content 
document.getElementsByClassName("content");
var myContentDivs = document.getElementsByClassName("content");
var myH2 = myContentDivs[1].getElementsByTagName("h2");
myH2[0].innerHTML = "yo Ninjas";

var myBody = document.getElementsByTagName("body");
myBody[0].innerHTML;
// this line will remove all content which is under the body tag and replaced with this line
myBody[0].innerHTML = "<p>I am paragraph tag</p>";

var myTitle = document.getElementById("page-title");
myTitle.textContent;
myTitle.textContent = "Yo Ninjas, get ready to learn!";

// changing element attributes
var link = document.getElementById("test");
link.getAttribute("href");
link.getAttribute("class");
link.setAttribute("class","pie");

// changing css styles
var title = document.getElementById("page-title");
title.setAttribute("style","position:relative; left: 10px;");
title.style.left = "20px";
title.style.top = "10px";
title.style.colour = "red";
title.style.backgroundColor = "blue";

// adding elements to the dom
var newLi = document.createElement("li");
var newA = document.createElement("a");

var menu = document.getElementById("main-nav").getElementsByTagName("ul")[0];
menu.appendChild(newLi);
newLi.appendChild(newA);

newA.innerHTML = "Blog";

// add element in first
menu.insertBefore(newLi, menu.getElementsByTagName("li")[0]);

// remove elements form the dom
var parent = document.getElementById("main-nav").getElementsByTagName("ul")[0];
var child = parent.getElementsByTagName("li")[0];
var removed = parent.removeChild(child);
// if i want to reinsert removed element
parent.appendChild(removed);

// javascript events
var title = document.getElementById("page-title");
title.onclick = function(){
    alert("you clicked on me");
}
title.onmouseover = function(){
    alert("you hovered you mouse over me");
}
