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
