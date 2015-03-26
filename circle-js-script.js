document.getElementById("red-circle").onclick=function(){
  /*var elem = document.getElementById("red-circle");
  elem.parentNode.removeChild(elem);*///works as well
  document.getElementById("red-circle").style.display="none";
  console.log("the circle should be gone now");//we use the log function like this for debugging purposes
}
