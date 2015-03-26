//we can run this file with node
var myArray=new Array();
myArray[0] = "pizza";
myArray[1] = "chocolate";

console.log(myArray);

myOtherArray=["peanuts", "jelly"];

myOtherArray.push("pizza");

myOtherArray.splice(1, 2); //removes the 2nd/3rd element

myOtherArray.push("hello");
myOtherArray.push("bill nye");

myOtherArray.splice(1, 0, "hail", "friday");//adds an elem before 1

console.log(myOtherArray);

console.log(myOtherArray.length);

var i = 0;

document.getElementById("stylesChanger").onclick=function(){
document.getElementById("firstDiv").innerHTML=myOtherArray[i];
  i++;
  if(i > myOtherArray.length){
    i = 0;
    document.getElementById("firstDiv").innerHTML=myOtherArray[i];
  }
}
//if we comment the last 2 lines out, we can run this with nodejs
//ie nodejs arrays-script.js
