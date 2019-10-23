$( "document" ).ready(function() { //this helps your jQuery to work. Write all of your JS code in this function.



$("#button").click(function() {

var userInput = $(".input").val();

var words = userInput.split(' ');

words.forEach(function(word){
    var letter = word.charAt(0)
    if (letter != "a" || letter != "e" || letter != "i" || letter != "o" || letter != "u"){

        $(".output").text( word.slice(1) + letter + "ay");
    }
    else{
        $(".output").text( word.slice(1) + letter + "ay");
    }
}


});








});

});
