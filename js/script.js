$( "document" ).ready(function() { //this helps your jQuery to work. Write all of your JS code in this function.



$("#button").click(function() {
    $(".output").text("");

    var userInput = $(".input").val();
    var words = userInput.split(' ');
    var vowels = ["a", "e", "i", "o", "u"];

    words.forEach(function(word){
        var letter = word.charAt(0).toLowerCase();
        if (vowels.includes(letter)){
            var vowel = word + "ay ";
            $(".output").append(vowel);
        }
        else{
            var constants =word.slice(1) + letter + "ay ";
            $(".output").append(constants);
    }
});

/* let words = song.split(" ");
    let beg1 = words[0].charAt(0);
    let beg2 = words[1].charAt(0);
    console.log(beg1);
    console.log(beg2);
    let end1 = words[0].slice(1, words[0].length);
    let end2 = words[1].slice(1, words[1].length);
    console.log(end1);
    console.log(end2);
    $("#result").append(end1+beg1+" "+end2+beg2);
    */


});

});
