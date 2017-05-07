console.log('Hello.....');

/*
  We want to make the button on the page update
  the span on the page with the correct number of clicks that have happened on the button...
*/

// Step 1, let's grab and store the button and the counter in some variables...

// let's be a little specific since there may be other buttons later...
const incrementButton = document.querySelector('.widget-header > button');
const resetButton = document.querySelector('.widget-actions > button');

function incrementCounter() {
  // this is the span called widget-counter
  const counterSpan = document.querySelector('.widget-counter');
  counterSpan.innerText = Number(counterSpan.innerText) + 1;
}

function resetCounter() {
  // this is the span called widget-counter
  const counterSpan = document.querySelector('.widget-counter');
  counterSpan.innerText = 0;
}


// console.log("CALLING incrementCounter....");
// incrementCounter();
// console.log("BACK FROM incrementCounter.....");

/*
  addEventListener takes TWO MAIN arguments...
  the name of the event you care about (e.g. mousedown, click, focus...)
  the NAME of a thing to do (aka a function) once the event happens
*/
incrementButton.addEventListener('click', incrementCounter);
resetButton.addEventListener('click', resetCounter);

console.log('Goodbye...')
