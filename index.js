for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", action);
}

function action() {
  var x=this.innerHTML;
  playMusic(x);
  animation(x);
}

document.addEventListener("keydown", event => {
  var x=String.fromCharCode(event.keyCode);
  x=x.toLowerCase();
  playMusic(x);
  animation(x);
});

function playMusic(key){
  var a=new Audio("sounds/"+key+".mp3");
  a.play();
}

function animation(key){
  document.querySelector("."+key).classList.add("pressed");
  setTimeout(function() {
    document.querySelector("."+key).classList.remove("pressed");
  }, 100);
}
