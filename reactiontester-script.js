
var clickedTime; var createdTime; var reactionTime;

function makeBox(){
  createdTime = Date.now();
  //var time = Math.random();value between 0 and 1
  //time = time*5000; this works too
  var random_time = Math.floor((Math.random()* 5000) + 1);//gives whole int
  setTimeout(function(){
    document.getElementById("red-box").style.display="block";
    //alert("hello");
  }, random_time);
}

var time = Date.now();
console.log(time);



document.getElementById("red-box").onclick=function(){
  clickedTime = Date.now();
  //document.getElementById("red-box").style.display="none";
  reactionTime = (clickedTime - createdTime)/1000;
  console.log(reactionTime);
  document.getElementById("time").innerHTML=reactionTime + " seconds";
  this.style.display="none";
  makeBox();
}

makeBox();
