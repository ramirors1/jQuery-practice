// $("h1").addClass("big-title margin-50");  //adds styling classes from styles.css

// $("h1").text("Bye");  //change h1 text from Hello to Bye

// $("button").css("background-color", "yellow");

// $("a").attr("href", "https://www.yahoo.com");

// $("h1").click(function() {
//     $("h1").css("color", "purple");
// });

// $("button").click(function() {   //when button is clicked H1 text changes color to green
//     $("h1").css("color", "green");
// });

// $("input").keypress(function(event) {    //when a key is pressed, it will replace the h1 text
//     $("h1").text(event.key);
// });

// $("h1").on("click", function() {
//     $("h1").css("color", "red");
// });

// $("h1").after("<button>New</button>")

// $("button").on("click", function() {   //when button is clicked H1 text hides
//     $("h1").hide();
// });

// $("button").on("click", function() {   //when button is clicked H1 text toggles on and off
//     $("h1").toggle();
// });

$("button").on("click", function() {   //when button is clicked H1 text's opacity is changed
    $("h1").animate({opacity: 0.5});
});