for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", action);
}
function action() {
  var x=this.innerHTML;
  var a=new Audio("sounds/"+x+".mp3");
  a.play();
}
document.addEventListener("keydown", event => {
  var x=String.fromCharCode(event.keyCode);
  x=x.toLowerCase();
  var a=new Audio("sounds/"+x+".mp3");
  a.play();
});
