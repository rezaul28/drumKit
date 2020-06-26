for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", action);
}
function action() {
  var a=new Audio("sounds/crash.mp3");
  a.play();
}
