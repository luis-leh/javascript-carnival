// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

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

function clicked(event) {
  console.log(event)
}

// CODING WITH JOSEPH'S SESSION

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
