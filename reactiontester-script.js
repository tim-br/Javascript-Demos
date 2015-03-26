document.getElementById("red-box").onclick=function(){
  //document.getElementById("red-box").style.display="none";
  this.style.display="none";

  //var time = Math.random();value between 0 and 1
  //time = time*5000; this works too

  var random_time = Math.floor((Math.random()* 5000) + 1);
  setTimeout(function(){
    document.getElementById("red-box").style.display="block";
    //alert("hello");
  }, random_time);
}
