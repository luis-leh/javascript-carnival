// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

// CODING WITH JOSEPH'S SESSION

console.log('Inflate The Unicorn!')

let uni0 = document.getElementById('uni0')
let uni1 = document.getElementById('uni1')
let uni2 = document.getElementById('uni2')

let inflationLevel0 = 0
let inflationLevel1 = 0
let inflationLevel2 = 0

// REMOVED () FROM THE END OF clicked
// clicked & event could be named anything

uni0.onclick = clicked
uni1.onclick = clicked
uni2.onclick = clicked

// SPECIFYING UNICORN CLICKED
// INFLATION LEVELS OF UNICORN
// CHANGE SOURCE OF IMAGE TO NEW IMAGE

// TRYING TO DO IT WITH LESSER CODE

function clicked(event) {
  let unicorn = event.target
  let id = unicorn.id[3]
}

// function clicked(event) {
//   let unicorn = event.target
//   let id = unicorn.id[3]

//   if (unicorn.id === 'uni0') {
//     inflationLevel0++

//     if (inflationLevel0 === 4) inflationLevel0 = 0

//     unicorn.src = './images/unicorn-' + inflationLevel0 + '.png'
// }

// if (unicorn.id === 'uni1') {
//   inflationLevel1++

//   if (inflationLevel1 === 4) inflationLevel1 = 0

//   unicorn.src = './images/unicorn-' + inflationLevel1 + '.png'
// }

// if (unicorn.id === 'uni2') {
//   inflationLevel2++

//   if (inflationLevel2 === 4) inflationLevel2 = 0

//   unicorn.src = './images/unicorn-' + inflationLevel2 + '.png'
// }
// }

// MY INITIAL CODE

// Write a function that gets called every time you click on a unicorn

// let myImage = document.querySelector('inflate-an-image')

// myImage.onclick = function () {
//   let mySrc = myImage.getAttribute('src')
//   if (mySrc === './images/unicorn-0.png') {
//     myImage.setAttribute('src', './images/unicorn-1.png')
//   }
//   else if (mySrc === './images/unicorn-1.png') {
//     myImage.setAttribute('src', './images/unicorn-2.png')
//   }
//   else (mySrc === './images/unicorn-2.png') {
//     myImage.setAttribute('src', './images/unicorn-3.png')
//   }
//   break
// }

// function inflateUnicorn() {
//   switch () {
//     case document.getElementById('first-unicorn').src ==
//       './images/unicorn-0.png':
//       return (
//         document.getElementById('first-unicorn').src == './images/unicorn-1.png'
//       )
//       break
//     case document.getElementById('first-unicorn').src ==
//       './images/unicorn-1.png':
//       return (
//         document.getElementById('first-unicorn').src == './images/unicorn-2.png'
//       )
//       break
//     case document.getElementById('first-unicorn').src ==
//       './images/unicorn-2.png':
//       return (
//         document.getElementById('first-unicorn').src == './images/unicorn-3.png'
//       )
//       break
//     case document.getElementById('first-unicorn').src ==
//       './images/unicorn-3.png':
//       return 'THANK YOU VERY MUCH!'
//       break
//     default:
//       return 'PLEASE HELP US!'
//   }
// }
