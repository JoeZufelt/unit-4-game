$(document).ready(function(){
// Variables

var wins = 0;
var losses = 0;
var compNumber = Math.floor(Math.random() * 100 + 50);
var yourScore;
var rupeeGreen = Math.floor(Math.random() * 20 + 2);
var rupeeBlue = Math.floor(Math.random() * 20 + 2);
var rupeeRed = Math.floor(Math.random() * 20 + 2);
var rupeePurple = Math.floor(Math.random() * 20 + 2);

// Assign Rupees/comp a Number
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

// Put compNum into HTML
$("#randNum").html(compNumber);

// Assign Rupee Clicks to Score
$("#rupeeGreen").on("click", function(){
    $("#score").html(rupeeGreen);
});
$("#rupeeBlue").on("click", function(){
    $("#score").html(rupeeBlue);
});
$("#rupeeRed").on("click", function(){
    $("#score").html(rupeeRed);
});
$("#rupeePurple").on("click", function(){
    $("#score").html(rupeePurple);
});

// Add up your score


// if/else for wins/losses
if (yourScore === compNumber) {
    $("#wins").html(wins++);
} else if (yourScore < compNumber) {

} else {
    $("#losses").html(losses++);
};

}); // End of JQuery