// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Inflate The Unicorn!')

// Write a function that gets called every time you click on a unicorn
function inflateUnicorn(unihorn) {
  switch (unihorn) {
    case document.getElementById('first-unicorn').src ==
      './images/unicorn-0.png':
      return (
        document.getElementById('first-unicorn').src == './images/unicorn-1.png'
      )
      break
    case document.getElementById('first-unicorn').src ==
      './images/unicorn-1.png':
      return (
        document.getElementById('first-unicorn').src == './images/unicorn-2.png'
      )
      break
    case document.getElementById('first-unicorn').src ==
      './images/unicorn-2.png':
      return (
        document.getElementById('first-unicorn').src == './images/unicorn-3.png'
      )
      break
    case document.getElementById('first-unicorn').src ==
      './images/unicorn-3.png':
      return 'THANK YOU VERY MUCH!'
      break
    default:
      return 'PLEASE HELP US!'
  }
}
