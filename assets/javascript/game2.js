var wins = 0;
var losses = 0;
var currentScore = 0;
var goal = 0;

var randomNumber = getNum(1, 10);

var crystalOne = 0;
var crystalTwo = 0;
var crystalThree = 0;
var crystalFour = 0;
// var randomNum = 0;

function getNum(min, max) {
    return Math.floor((Math.random() * max) + min);

};

function makeCrystals(){    
$("#crystals").empty();

for (let i=1; i <= 4; i++){

    var $crystal = $("<img>")
        .attr("src", "https://wiki.guildwars2.com/images/8/88/Gem_%28highres%29.png")

        .attr("data-value", getNum(1,10))
        .addClass("crystalOption")

        $("#crystals").append($crystal);

            console.log(($crystal).attr("data-value"))
            console.log($crystal);
}};


   $(document).on("click",'.crystalOption', function(event){
    // currentScore += this.data-value;
    currentScore += parseInt($(this).attr('data-value'));
    $("#user").html(currentScore); 
    if (currentScore == goal) {
        win();
        
        newGame()
    }

    else if (currentScore > goal) {
      lose();
      newGame();
    }
    
    //create an if else statement for win/lose situations
    //create a function to reset the game after win/lose

    
});


function win(){
wins++;
alert("Congratulations! You Win!");
$("#wins").html(wins);
};

function lose(){
losses++;
alert("Maybe next time.");
$("#losses").html(losses);
};

console.log(win);



function newGame(){
goal = getNum(30, 120);
$("#Total").html(goal);

currentScore = 0
$("#user").html(currentScore);

makeCrystals()
};

    /*if (currentNumber === randomNumber){
        win();
    } else if (currentNumber > randomNumber){
        lose();
    }; */

$(document).ready(newGame);


/* crystalThree = Math.floor((Math.random() * 120) +1 );
console.log(crystalThree);
crystalFour = Math.floor((Math.random() * 120) +1 );
console.log(crystalFour); */
