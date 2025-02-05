// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Whack-a-Mole!')

// GET A RANDOM CELL
// MOLE img APPEARS IN A RANDOM CELL
// CLICK ON THE MOLE
// MOLE RESPAWNS IN ANOTHER CELL

// Google - "how to get elements by tag name?"
// GETTING A CELLS ARRAY
let cells = document.getElementsByTagName('td')

// Google - "get random int in range"
// GETTING A RANDOM INDEX
let randomIndex = Math.floor(Math.random() * cells.length)

// GETTING A RANDOM CELL
let randomCell = cells[randomIndex] // why does this work?

// Google - "create HTML image with JavaScript"
// MAKING A NEW IMAGE
let mole = document.createElement('img')
mole.src = './mole.png'
mole.id = 'mole' // fix sizing issue
randomCell.appendChild(mole) // append mole to random cell

mole.onclick = whackedMole

function whackedMole() {
  // Get new random cell for the mole to reappear in
  randomIndex = Math.floor(Math.random() * cells.length)
  randomCell = cells[randomIndex]
  randomCell.appendChild(mole)

  // Google - "play audio with JavaScript"
  let audio = new Audio('./whack-audio.wav')
  audio.play()
}
