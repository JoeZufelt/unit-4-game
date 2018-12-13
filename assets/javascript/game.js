$(document).ready(function () {
    // Variables

    var wins = 0;
    var losses = 0;
    var compNumber = Math.floor(Math.random() * 100 + 50);
    var yourScore = 0;
    var rupeeGreen = Math.floor(Math.random() * 20 + 2);
    var rupeeBlue = Math.floor(Math.random() * 20 + 2);
    var rupeeRed = Math.floor(Math.random() * 20 + 2);
    var rupeePurple = Math.floor(Math.random() * 20 + 2);

    // Assign Rupees/comp a Number
    function newNumbers() {
        rupeeGreen = Math.floor(Math.random() * 20 + 2);
        rupeeBlue = Math.floor(Math.random() * 20 + 2);
        rupeeRed = Math.floor(Math.random() * 20 + 2);
        rupeePurple = Math.floor(Math.random() * 20 + 2);
        compNumber = Math.floor(Math.random() * 100 + 50);
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
    newNumbers();

    function newGame() {
        newNumbers();
        yourScore = 0;
        $("#randNum").text(compNumber);
        $("#score").text(yourScore);
        // $("#rupeeGreen").attr(rupeeGreen);
        // $("#rupeeBlue").attr(rupeeBlue);
        // $("#rupeeRed").attr(rupeeRed);
        // $("#rupeePurple").attr(rupeePurple);
        // $("wins").text(wins);
        // $("#losses").text(losses);
    }

    // Put compNum into HTML
    $("#randNum").text(compNumber);

    // Assign Rupee Clicks to Score
    $("#rupeeGreen").on("click", function () {
        yourScore = yourScore + rupeeGreen;
        $("#score").text(yourScore);
        if (yourScore === compNumber) {
            wins++;
            $("#wins").text("Wins: " + wins);
            newGame();
        } else if (yourScore > compNumber) {
            losses++
            $("#losses").text("Losses: " + losses);
            newGame();
        } else {

        };
    });
    $("#rupeeBlue").on("click", function () {
        yourScore = yourScore + rupeeBlue;
        $("#score").text(yourScore);
        if (yourScore === compNumber) {
            wins++;
            $("#wins").text("Wins: " + wins);
            newGame();
        } else if (yourScore > compNumber) {
            losses++;
            $("#losses").text("Losses: "+ losses);
            newGame();
        } else {

        };
    });
    $("#rupeeRed").on("click", function () {
        yourScore = yourScore + rupeeRed;
        $("#score").text(yourScore);
        if (yourScore === compNumber) {
            wins++;
            $("#wins").text("Wins: " + wins);
            newGame();
        } else if (yourScore > compNumber) {
            losses++;
            $("#losses").text("Losses: " + losses);
            newGame();
        } else {

        };
    });
    $("#rupeePurple").on("click", function () {
        yourScore = yourScore + rupeePurple;
        $("#score").text(yourScore);
        if (yourScore === compNumber) {
            wins++;
            $("#wins").text("Wins: " + wins);
            newGame();
        } else if (yourScore > compNumber) {
            losses++
            $("#losses").text("Losses: " + losses);
            newGame();
        } else {

        };
    });


    // // if/else for wins/losses
    // function endGame() {
    // if (yourScore === compNumber) {
    //     $("#wins").html("Wins: " + wins++);
    //     newGame();
    // } else if (yourScore > compNumber) {
    //     $("#losses").html("Losses: " + losses++);
    //     newGame();
    // } else {

    // };
    // };

}); // End of JQuery