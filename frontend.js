// var madlib = { "text": "  <input id='ad1' class='clr' type='text' name='noun' >"
//            };
// console.log(madlib.text);

// var sub = function(){document.getElementById('madlib').textContent = madlib.text ;} ;
 

// var libsubmit = document.getElementById('submit'); 
//  libsubmit.addEventListener('click', sub);








var date = new Date("Oct 14 2017");
document.getElementById('date').textContent= date ; 

var madlib = 
{ "text": " The dog runs as fast as a(n) <input> and only <input> can run that fast"};

console.log(madlib.text);

var sub = function(event){
  event.preventDefault();
  var element_length = document.getElementById('form').elements.length;
  
  for ( var i= 1 ; i < element_length; i++) {
  document.getElementById('span-ad'+ i).innerHTML = document.getElementById('ad'+i).value; };
};

var libsubmit = document.getElementById('form'); 
libsubmit.addEventListener('submit', sub);

                                 
