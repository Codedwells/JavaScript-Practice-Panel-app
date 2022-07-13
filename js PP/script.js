let cards = [ 1, 3, 5, 2, 'This is an array' ];
let outputArray = [];

for (i = 0; i < cards.length; i++) {
	outputArray.push(cards[i]);
}
consoleOut = outputArray;

//          DOCUMENTATION
// Your code goes above here.
// consoleOut is the variable that will be displayed.Example below.

//                  IF STATEMENTS:
//  if (age===100) {
//    consoleOut="Here is your birthday card from the king." ;
//    } else if(age<100) {
//      consoleOut="You are not eligible.Try in a few years."
//      }
//        else{
//          consoleOut="You alredy got your card!!"
//      }

//                  FOR LOOPS           >>>>>
//  let i=0;
//  let out=[] ; >>>>create an empty array>>>>
//  for(; i<20 ; i++) {
//  out.push(i) ;   >>>>push forloop output into array>>>
//  consoleOut=out;
//  }

//Thanks for testing this out.

function logIt() {
	document.getElementById('consoleOutput').textContent += consoleOut + ' ';
}
function clearData() {
	document.getElementById('consoleOutput').textContent = '>_ :  ';
}
