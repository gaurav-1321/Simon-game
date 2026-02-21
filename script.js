let gamepattern = [];
let userclickedpattern = [];
let started = false;
let level = 0;

let colorarray = ["red", "blue", "green", "yellow"];

$(document).keypress(function () {
  if (!started) {
    nextSequence();
    started = true;
  }
});

$(".btn").click(function () {
  let userchosencolor = $(this).attr("id");
  userclickedpattern.push(userchosencolor);

  playsound(userchosencolor);
  animatePress(userchosencolor);
});

function nextSequence() {

  userclickedpattern = [];  
  level++;
  $("#level-title").text("Level " + level);

  let randomnumber = Math.floor(Math.random() * 4);
  let randomchosencolor = colorarray[randomnumber];

  gamepattern.push(randomchosencolor);

  $("#" + randomchosencolor)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);

  playsound(randomchosencolor);
}

function playsound(name){ var audio=new Audio("sounds/"+name+".mp3"); 
  audio.play(); }

function animatePress(currentcolor) {
  $("#" + currentcolor).addClass("pressed");

  setTimeout(() => {
    $("#" + currentcolor).removeClass("pressed");
  }, 100);
}
