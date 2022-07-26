let titleDiv = document.getElementById('title')
// console.log(title.innerText = 'hi')

// console.log('before: ', titleDiv.innerText)

let message = 'Goodbye my lover!'

titleDiv.innerText = message

// console.log('after: ', titleDiv.innerText)

titleDiv.innerHTML = `<p>${message}</p>`

titleDiv.style.color = 'lightpink'

// let redDiv = document.getElementById('red')
// let yellowDiv = document.getElementById('yellow')
// let greenDiv = document.getElementById('green')

// redDiv.onclick = () => document.write('You clicked red')
// yellowDiv.onclick = () => console.log('You clicked yellow')
// greenDiv.onclick = () => console.log('You clicked green')

// Prints an array of all elements with specified class
const squares = document.querySelectorAll('.colorSquare')
// console.log(squares)

const timesClicked = {
    'red': 0,
    'yellow': 0,
    'green': 0
}
// For each
squares.forEach(square => {
    square.onclick = () => {
        console.log(square.value)
        timesClicked[square.value]++
        square.innerText = timesClicked[square.value]
        // console.log(timesClicked)
    }
})

document.getElementById('clear').onclick = () => squares.forEach(square => square.innerText = '0')


// const clearSquares = () => {
//     squares.forEach(square => square.value = '')
// }







