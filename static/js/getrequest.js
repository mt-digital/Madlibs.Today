/**
 * Here you'll write code to make a GET request to your API
 */
function displayData(data) {

  var textToDisplay = data.text;
  $('div#put-stuff-here').append('<p>' + textToDisplay + '</p>');
  // render data somewhere in website
  // Object.keys(data).some(function(key, idx) {
  //
  //   $('div#put-stuff-here').append('<p>' + key + ' '+data+  '</p>');
  // });
}

$.getJSON("http://localhost:5000/madlib-today", displayData);
