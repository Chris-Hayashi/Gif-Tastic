//Create a variable called topics to store an array of strings
var animals = ["dogs", "cats", "lizards", "turtles", "alligators", "giraffes", "elephants"];

function makeButtons() {

    //Create a for loop to iterate through topics
    for (var i = 0; i < animals.length; i++) {
        
        //Create a button and store in a variable
        var newButton = $("<button>");
        
        //Give the button a val() equal to the string
        newButton.val(animals[0]);
        
        //Give the button a text content equal to the string
        newButton.text(animals[0]);
        
        //give each button a class i.e. button1, button2, etc.
        newButton.addClass("button");
        
        //Append the button to #buttons
        $("#buttons").append(newButton);

    }

    //Empty the array
    animals.splice(0, animals.length);
}
//Create an onClick event for the buttons
$(document).on("click", ".button", function() {

    //Create a variable to store the API key
    var apiKey = "116WLag9WzHVmZuA8ZFkWR4Y84P6QQOe";
    
    //Create a variable to store the query URL
    var queryURL = "api.giphy.com/v1/gifs/search?q=" + button + "&limit=10&api_key=";
    
    //Create a variable equal to the value of the button clicked
    var button = this.val();

    $.ajax({
        url: queryURL + apiKey,
        method: "GET"
    }).then(function(response) {
        console.log(response);
        
        //Create a for loop iterating 10 times
        // for (var i = 0; i < 10; i++){
            
            //Append the giphy image
            
            //Append the giphy rating
            
            //
        // }
    });
});

//Create an onClick event for the submit

    //add #addMe.val() to the topics array

    //call NEWBUTTONS()

//Create an OnClick event for the giphy images

makeButtons();