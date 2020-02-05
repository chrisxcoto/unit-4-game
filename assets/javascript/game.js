    var win = ""
    var losses = ""
    var currentScore = ""
    var goal = ""
    
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

        const crystal = $("<img>")
            .attr("src", "https://pbs.twimg.com/profile_images/531994916181012480/EBap51cO_400x400.png")

            .attr("data-value", getNum(1,10))
            .addClass("crystalOption")

            $("#crystals").append(crystal);

            console.log(crystal);
}
    }

function newGame(){
    goal = getNum(30, 120);
    $("#Total").html(goal);

    currentScore = 0
    $("#user").html(currentScore);

    makeCrystals()
}

function giveValue(){

    $("#crystals").on("click", function(){
        currentScore += crystal; 
        $("#currentPoints").html(currentNumber);
        if (currentNumber === randomNumber){
            win();
        } else if (currentNumber > randomNumber){
            lose();
        };
    });
    


$(document).ready(newGame)


    /* crystalThree = Math.floor((Math.random() * 120) +1 );
    console.log(crystalThree);
    crystalFour = Math.floor((Math.random() * 120) +1 );
    console.log(crystalFour); */


