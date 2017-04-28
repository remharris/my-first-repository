/**
 * In the browser there is a SPECIAL OBJECT called:
 * document
 */

console.log(document);

/**
 * debugger is a command that PAUSES the
 * Javascript compiler AT THE LINE of the
 * command
 */

// debugger;

/**
 * document.querySelectorAll() is a function that
 * reaches into the document and grabs all elements which
 * match a CSS selector that you pass into querySelectorAll
 */

// this will grab EVERYTHING that's a DIV
let allDivs = document.querySelectorAll('div');

// this will grab EVERYTHING with class of 'first'
let allFirsts = document.querySelectorAll('.first');

// allDivs is (almost) an array.. so it has a LENGTH so we
// can LOOP over it with a for loop...
// it's actually a NODELIST

for (let i = 0; i < allDivs.length; i = i + 1) {
  // each time through the loop currentDiv will be the "next one"
  const currentDiv = allDivs[i];

  // currentDiv is a NODE
  currentDiv.innerText = "I'm in div #" + i;

  if (i == 1) {
    currentDiv.style.color = "blue";
  } else if (i == 2) {
    // font-family is the CSS rule
    // but fontFamily is the JS version
    currentDiv.style.fontFamily = "Roboto";
    currentDiv.style.fontWeight = "900";
  } else {
    // remove is a node function that DELETES the node
    currentDiv.remove();
  }
}

/**
 * document also has a createElement function
 * it makes a NEW NODE
 */

let newDiv = document.createElement('div');
// as of RIGHT NOW newDiv is ONLY IN MEMORY

newDiv.innerText = "I'm new!";

/**
 * classList is a node Property, it's arraylike...
 * it has some extra methods: add, remove, toggle
 */
newDiv.classList.add('first');

/**
 * querySelector is like querySelectorAll, but only grabs
 * the FIRST THING, and so it's not in a nodelist, but is
 * just a node
 */
let body = document.querySelector('body');

/**
 * all nodes have an appendChild method, that inserts another
 * node LAST in its list of children
 */
body.appendChild(newDiv);
