// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Dress The Clown!')

// CODING WITH JOSEPH

// arrow keys left & right - clothing items
// arrow keys up & down - clown parts

document.onkeydown = checkKey

// EVENT IS THE SAME WITH ONCLICK

function checkKey(e) {
  //  e = e || window.event (TO CATER FOR WINDOWS INTERNET EXPLORER)

  console.log(e)

  if (e.keyCode == '38') {
    // up arrow
  } else if (e.keyCode == '40') {
    // down arrow
  } else if (e.keyCode == '37') {
    changeClothes(-1)
    // left arrow
  } else if (e.keyCode == '39') {
    changeClothes(1)
    // right arrow
  }
}

function changeClothes() {}

let headIndex = 0

let head = document.getElementById('head')
let body = document.getElementById('body')
let feet = document.getElementById('feet')

function changeClothes(change) {
  headIndex += change

  if (headIndex < 0) headIndex = 5

  if (headIndex > 5) headIndex = 0

  head.src = './images/head' + headIndex + '.png'
}
