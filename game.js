userClickedPattern =[];
var buttonColours = ["red", "blue", "green", "yellow"];
gamePattern=[];
var started= false;
var level = 0;

$(document).keypress(function(){
    if(!started){
$("#level-title").text("Level" + level);
nextSequence();
started=true;
    }
})

$(".btn") .click (function(){
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playsound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);

});

function checkAnswer(currentLevel){
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

        console.log("success");
        if (userClickedPattern.length === gamePattern.length){

            //5. Call nextSequence() after a 1000 millisecond delay.
            setTimeout(function () {
              nextSequence();
            }, 1000);
        }

    } else {

      console.log("wrong");
      playsound("wrong");

      //2. In the styles.css file, there is a class called "game-over", apply this class to the body of the website when the user gets one of the answers wrong and then remove it after 200 milliseconds.
      $("body").addClass("game-over");
      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      //3. Change the h1 title to say "Game Over, Press Any Key to Restart" if the user got the answer wrong.
      $("#level-title").text("Game Over, Press Any Key to Restart");
      startOver();

    }

}

    function nextSequence() {
        userClickedPattern=[];
        level++;
        $("#level-title").text("Level" + level);

    var randomNumber= Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColours[randomNumber];
    gamePattern.push(randomChosenColor);

    $("#" + randomChosenColor ).fadeIn(100) .fadeOut(100) .fadeIn(100);
    playsound(randomChosenColor);
}

function playsound(name){
    var audio= new Audio("sounds/" +name+".mp3");
    audio.play();
}

function animatePress(currentColor){
    $("#" + currentColor) .addClass("pressed");
    setTimeout(function () {
        $("#" + currentColor).removeClass("pressed");
      }, 100);
    }
      function startOver() {

        //3. Inside this function, you'll need to reset the values of level, gamePattern and started variables.
        level = 0;
        gamePattern = [];
        started = false;}
    

