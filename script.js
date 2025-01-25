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

var links = document.getElementsByTagName("a");
for(i=1; i<links.length;i++){
    links[i].className = "link-" + i;
}