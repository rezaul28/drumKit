for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", action);
}
function action() {
  var x=this.innerHTML;
  if(x==="l"){
    var a=new Audio("sounds/l.mp3");
    a.play();
    return;
  }
  else{
  var a=new Audio("sounds/"+x+".mp3");
  a.play();
}
}
