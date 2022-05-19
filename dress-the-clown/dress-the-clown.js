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
    changePart(-1)
    // up arrow
  } else if (e.keyCode == '40') {
    changePart(1)
    // down arrow
  } else if (e.keyCode == '37') {
    changeClothes(-1)
    // left arrow
  } else if (e.keyCode == '39') {
    changeClothes(1)
    // right arrow
  }
}

// let headIndex = 0
// let bodyIndex = 0
// let shoesIndex = 0

// AN OPTIMUM WAY TO DO THE SOLUTION
let indexes = [0, 0, 0]

let wholeIndex = 0

let head = document.getElementById('head')
let body = document.getElementById('body')
let shoes = document.getElementById('shoes')

let imgs = [head, body, shoes]
let strings = ['head', 'body', 'shoes']

function changeClothes(change) {
  let index = indexes[wholeIndex]
  let image = imgs[wholeIndex]
  let str = strings[wholeIndex]
  // if (wholeIndex == 0) {
  // NESTED ALL IN AN IF TO IDENTIFY THE HEAD
  index += change

  if (index < 0) index = 5

  if (index > 5) index = 0

  indexes[wholeIndex] = index

  image.src = './images/' + str + index + '.png'
}

//   if (wholeIndex == 1) {
//     // NESTED ALL IN AN IF TO IDENTIFY THE BODY
//     bodyIndex += change

//     if (bodyIndex < 0) bodyIndex = 5

//     if (bodyIndex > 5) bodyIndex = 0

//     body.src = './images/body' + bodyIndex + '.png'
//   }

//   if (wholeIndex == 2) {
//     // NESTED ALL IN AN IF TO IDENTIFY THE SHOES
//     shoesIndex += change

//     if (shoesIndex < 0) shoesIndex = 5

//     if (shoesIndex > 5) shoesIndex = 0

//     shoes.src = './images/shoes' + shoesIndex + '.png'
//   }
// }

function changePart(change) {
  wholeIndex += change

  if (wholeIndex < 0) wholeIndex = 2

  if (wholeIndex > 2) wholeIndex = 0
}
