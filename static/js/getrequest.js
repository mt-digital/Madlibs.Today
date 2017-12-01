/**
 * Here you'll write code to make a GET request to your API
 */
function displayData(data) {

    var textToDisplay = data.text;
    $('#input-form').append('<p>' + textToDisplay + '</p>');

}
$.getJSON("http://localhost:5000/madlib-today", displayData);



function handleSubmission(data) {

    // Create an object we'll send to the server's /post-route.
    var postObj = {};
var j = $(".ad").length;
    // Append each adlib to the input object.
    for (var i=0; i < j; i++) {
        var key = "adlib-" + (i+1);
        var key2 = "span-ad" + (i+1);
        console.log(j);
        postObj[key] = $("#" + key).val();
        $("#" + key2).html($("#" + key).val());


    }


    // Make POST request to the server; log server response to console;
    $.post('/post-route', postObj, data => console.log(data));
}

$("#post-data-button").click(handleSubmission);
