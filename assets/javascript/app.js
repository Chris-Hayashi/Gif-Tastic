//Create a variable called topics to store an array of strings
var animals = ["dogs", "cats", "lizards", "turtles", "alligators", "giraffes", "elephants"];

//Create a variable to store the API key
var apiKey = "116WLag9WzHVmZuA8ZFkWR4Y84P6QQOe";

//Create a variable to store the query URL
var queryURL = ["https://api.giphy.com/v1/gifs/search?q=", "&limit=10&api_key="];

function makeButtons() {

    //Create a for loop to iterate through topics
    for (var i = 0; i < animals.length; i++) {
        
        //Create a button and store in a variable
        var newButton = $("<button>");
        
        //Give the button a val() equal to the string
        newButton.val(animals[i]);
        
        //Give the button a text content equal to the string
        newButton.text(animals[i]);
        
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

    //clear the current gifs in "#gifs" div tag
    $("#gifs").empty();

    //Create a variable equal to the value of the button clicked
    var animal = $(this).val();

    //Create an ajax call for the queryURL
    $.ajax({
        url: queryURL.join(animal) + apiKey,
        method: "GET"
    }).then(function(response) {
        
        //Create a for loop iterating 10 times
        for (var i = 0; i < 10; i++){
            
            //Create a section tag for each gif
            var newSection = $("<section>");

            //Create an image tag for each gif
            var newGif = $("<img>");

            //Give newGif a class
            newGif.addClass("gif");

            //Give newSection a data attr equal to the active gif url
            newGif.data("moveGif", response.data[i].images.fixed_height.url);
            
            //Append the still giphy image to the section tag
            newGif.attr("src", response.data[i].images.fixed_height_still.url);
            
            //Append newGif to newSection
            newSection.append(newGif);
            
            //Append the giphy rating
            newSection.append($("<h3>").text("Rating: " + response.data[i].rating));

            //Append a horizonal reference to newSection
            newSection.append($("<hr>"));

            //Append the newSection to #gifs
            $("#gifs").append(newSection);
        }
    });
});

//Create an onClick event for the submit
$("#submit").on("click", function(event) {

    //prevent the submit button from reloading the page
    event.preventDefault();
    
    //add #addMe.val() to the topics array
    animals.push($("#addMe").val());
    
    //call makeButtons()
    makeButtons();
})
// Create an OnClick event for the giphy images
$(document).on("click", ".gif", function() {

    //save the link stored in data attribute "moveGif" in a temp variable
    var temp = $(this).data("moveGif");

    //replace data-moveGif with the link stored in the src attribute
    $(this).data("moveGif", $(this).attr("src"));

    //move the link in temp into src
    $(this).attr("src", temp);

});


makeButtons();