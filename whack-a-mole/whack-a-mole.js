// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Whack-a-Mole!')

// GET A RANDOM CELL
// MOLE img APPEARS IN A RANDOM CELL
// CLICK ON THE MOLE
// MOLE RESPAWNS IN ANOTHER CELL

// Google - "how to get elements by tag name?"
let cells = document.getElementsByTagName('td')

// Google - "get random int in range"
let randomIndex = Math.floor(Math.random() * cells.length)
