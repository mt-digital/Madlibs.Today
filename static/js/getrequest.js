//create JSON objects
var madlib = { "text": " The dog runs as fast as a(n) <input> and only <input> can run that fast", "libs": ["",""]           };

var sub = function(event) {
    //prevent submit button from submitting form
    event.preventDefault();
    var element_length = document.getElementById('input-form').elements.length;
    for ( var i= 1 ; i <= element_length; i++) {
        madlib.libs[i -1] = document.getElementById('ad'+i).value;
        // assign input values to JSON object array
        document.getElementById('span-ad'+i).innerHTML = document.getElementById('adlib-'+i).value;


        console.log(madlib.libs) ;
    }
    //display message to provide positive reinforcement to users
    document.getElementById('alerter').textContent= "Your Madlib is complete my Good Person";
    var alerter = document.querySelector('#alerter');
    alerter.style['font-family'] = 'Times New Roman';
    //insert approval image
    document.getElementById('thumbs-up').innerHTML =
        "<image id=\" thumbs-up\" src=\"http://romantic.silviubacky.com/wp-content/uploads/2012/11/thumbs-up-150x150.png\"></image> " ;
};



var libsubmit = document.getElementById('input-form');
libsubmit.addEventListener('submit', sub);




// /**
//  * Here you'll write code to make a GET request to your API
//  */
// function displayData(data) {
//
//     var textToDisplay = data.text;
//     $('#input-form').append('<p>' + textToDisplay + '</p>');
//
// }
// $.getJSON("http://localhost:5000/madlib-today", displayData);
//
//
//
// function handleSubmission(data) {
//     var element_length = document.getElementById('input-form').elements.length;
//     for ( var i= 1 ; i<= element_length ; i++) {
//         var word = document.getElementById('adlib-'+i).value;
//         $('.input-form span#span-ad1').html(word);
//         // assign input values to JSON object array
//     }
//
//     // Create an object we'll send to the server's /post-route.
//     var postObj = {};
//
//     // Append each adlib to the input object.
//     for (var i=0; i < $(".ad").length; i++) {
//         var key = "adlib-" + (i+1);
//         postObj[key] = $("#" + key).val();
//     }
//
//
//     // Make POST request to the server; log server response to console;
//     $.post('/post-route', postObj, data => console.log(data));
// }
//
// $("#post-data-button").click(handleSubmission);
