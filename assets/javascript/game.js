$(document).ready(function(){
// Variables

var wins = 0;
var losses = 0;
var compNumber = Math.floor(Math.random() * 100 + 50);
var yourScore = 0;
var newScore = 0;
var rupeeGreen = Math.floor(Math.random() * 20 + 2);
var rupeeBlue = Math.floor(Math.random() * 20 + 2);
var rupeeRed = Math.floor(Math.random() * 20 + 2);
var rupeePurple = Math.floor(Math.random() * 20 + 2);

// Assign Rupees/comp a Number
function newNumbers() {
$("#rupeeGreen").val(rupeeGreen);
$("#rupeeBlue").val(rupeeBlue);
$("#rupeeRed").val(rupeeRed);
$("#rupeePruple").val(rupeePurple);
$("#randNum").val(compNumber);
console.log(rupeeGreen);
console.log(rupeeBlue);
console.log(rupeeRed);
console.log(rupeePurple);
console.log(compNumber);
};

function newGame () {
    newNumbers();
    newScore = 0;
    $("#randNum").text(compNumber);
    $("#score").text(yourScore);
    $("#rupeeGreen").attr("rupeeGreen", rupeeGreen);
    $("#rupeeBlue").attr("data-crystalvalue", rupeeBlue);
    $("#rupeeRed").attr("data-crystalvalue", rupeeRed);
    $("#rupeePurple").attr("data-crystalvalue", rupeePurple);
    $("wins").text(wins);
    $("#losses").text(losses);
}
newNumbers();
newGame();

// Put compNum into HTML
$("#randNum").html(compNumber);

// Assign Rupee Clicks to Score
$("#rupeeGreen").on("click", function(){
    yourScore = yourScore + rupeeGreen;
    $("#score").html(yourScore);
});
$("#rupeeBlue").on("click", function(){
    yourScore = yourScore + rupeeBlue;
    $("#score").html(yourScore);
});
$("#rupeeRed").on("click", function(){
    yourScore = yourScore + rupeeRed;
    $("#score").html(yourScore);
});
$("#rupeePurple").on("click", function(){
    yourScore = yourScore + rupeePurple;
    $("#score").html(yourScore);
});


// if/else for wins/losses

if (yourScore == compNumber) {
    $("#wins").html("Wins: " + wins++);
    newGame();
} else if (yourScore > compNumber) {
    $("#losses").html("Losses: " + losses++);
    newGame();
} else {

};

}); // End of JQuery