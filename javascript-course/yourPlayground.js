function log(text) {
  console.log(text)
}
// console.log("hello world")

//Variables
// let name = "Edgar Sanchez"
// console.log(name)

//// Operators
// let fruit = prompt("What is your favorite fruit?")
// console.log(fruit)

//// User input
// let billTotal = Number(prompt("How much did you eat fat ass?"))
// let tipPercentage = Number(prompt("tip %?")) / 100
// let tipAmount = billTotal * tipPercentage
// let total = billTotal + tipAmount

// console.log("Tip amount: ", tipAmount)
// console.log("Total: ", total)
//alert(tipAmount)

/* Math Methods
floor - rounds down
ceil - rounds up
random - generates random number 0-1
multiplying by 3 gives random num 0-3
*/

// console.log(Math.floor(Math.random() * 3))

// Baby weather app 
// let weather = prompt('How is the weather?')

// if (weather == "rainy") {
//   console.log('Grab your umbrella')
// } else {
//   console.log('Wear your sunglasses')
// }

// conditional operators
// ==, ===, >, <, <=, >=, !=, !==

// log('hi')

// function sayMyName(name) {
//   console.log(`Hello ${name}, nice to meet you`)
// }
// // sayMyName('Edgar')

// function sum(a, b) {
//   return a + b
// }
// console.log(sum(2,3))





// ES6 
// Arrow Functions =>
// explicit return
// const sumArrow = () => {
//   return a + b 
// }

// // implicit return (remove braces)
// const sum = (a, b) => a + b

// function calculateTip(billTotal, tip) {
//   let tipPercentage = tip / 100
//   let tipAmount = billTotal * tipPercentage
//   let total = sum(billTotal, tipAmount)
//   return total
// }

// log(calculateTip(100, 20))

// Arrays
// let groceries = ['bannana', 'apple', 'orange', 'pear']
// console.log(groceries)
// log(groceries[1])

// groceries.push('cookie')

// console.log(groceries)

// Array Slice
// (Inclusive, exclusive)
// console.log(groceries.slice(2, 4))

// console.log(groceries.indexOf('apple'))
// console.log(groceries.length)

// Objects {}
let person = {
  // Properties
  name: 'Leonardo',
  shirt: 'White'
}

// 2 ways to do same thing
// console.log(person.name)
// console.log(person['shirt'])

person.phone = '1-222-333-4444'
person['age'] = 52

// console.log(person)

let person2 = {
  name: 'Qazi',
  shirt: 'black'
}
// console.log(person2)

// function introducer(person) {
//   console.log('Hello my name is ' + person.name)
// }

// introducer(person)
// introducer(person2)

// const introducer = (name, shirt) => {
//   const person = {
//     name: name,
//     shirt: shirt,
//     assets: 30000,
//     liabilities: 0
//   }

//   const intro = `Hi, my name is ${person.name}, the color of my shirt is ${person.shirt}, and I have a networth of $${person.assets - person.liabilities} USD`

//   return intro
// }
const introducer = (name, shirt, assets, liabilities) => {
  const person = {
    name: name,
    shirt: shirt,
    assets: assets,
    liabilities: liabilities,
    networth: function() {
      return this.assets - this.liabilities
    }
  }

  const intro = `Hi, my name is ${person.name}, the color of my shirt is ${person.shirt}, and I have a networth of $${person.networth()} USD`

  return intro
}

let intro = introducer('Edgar', 'red', 30000, 0)
// intro = introducer(person.name, person.shirt)
// console.log(intro)

let groceries = ['bannana', 'apple', 'orange', 'pear']

//// LOOPS

// for (let i = 0; i < groceries.length; i++) {
//   console.log(groceries[i])
// }

// for (let index of groceries) {
//   console.log(index)
// }

// const numbers = [1, 2, 3, 4, 5, 6]

const double = (numbers) => {
  let result = []
  for (const number of numbers) {
    result.push(number ** 2)
  }
  return result
}
// console.log(double(numbers))

const sum = (numbers) => {
  let sum = 0
  for (number of numbers) {
    sum += number
  }
  return { sum }
}
let numbers = [1, 2, 3, 4, 5, 6]

// console.log(sum(numbers))

const howManyCharacters = () => {
  const phrase = 'Hey, can you go to the grocery store with me?'

  let numCharacters = 0
  for (character in phrase) {
    numCharacters++

    // of logs each character
    // in logs index of each character
    // console.log(character) 
  }
  return { numCharacters } // shortcut to return an object
}
const phrase = 'Hey, can you go to the grocery store with me?'

// console.log(howManyCharacters())
// console.log(phrase.length)

const max = (numbers) => {
  let currentMax = numbers[0]

  for (num of numbers) {
    if (num > currentMax) {
      currentMax = num
    }
  }
  return { currentMax }
}

numbers = [1, 2, 0, 3, 12, 4, 5, 6, 8]

// console.log(max(numbers))

const letterFrequency = (phrase) => {
  let lf = {}

  for (const character of phrase) {
    console.log(character)
    if (character in lf) {
      lf[character] += 1
    } else {
      lf[character] = 1
    }
  }
  return lf
}
// console.log(letterFrequency('haha'))

const wordFrequency = (phrase) => {
  let wf = {}
  let words = phrase.split(' ')

  for (const word of words) {
    if (word in wf) {
      wf[word] += 1
    } else {
      wf[word] = 1
    }
  }
  return wf
}

// const userInput = prompt('Write your sentence')
// console.log(wordFrequency('haha haha boo nuts'))

    /* 
     * higher order functions. passing a function into a function
     * map - loops and returns an array
     * filter - loops and returns an array with matching values
     * reduce - loops and gices you back the accumulator
     */
    // implicitly returns log bc no braces
    //  [1, 2, 3, 4].map(number => console.log(number))
    
    // result = [1, 2, 3, 4].map(number => number * 2)
    // console.log(result)

    const filter = (nums, numGreaterThan) => {
      filteredArray = []

      for (let num of nums) {
        if (num > numGreaterThan) {
          filteredArray.push(num)
        } 
      }
      return filteredArray
    }

    // numGreaterThan = prompt('Enter filter: ')
    const array = [1, 2, 3, 4, 5, 6]
    // console.log(filter(array, numGreaterThan))

    // console.log(array.filter(num => num < 3 || num > 4))

    const actors = [
      {name: 'johnny', networth: 2000000},
      {name: 'amber', networth: 10},
      {name: 'leonardo', networth: 1000000},      
    ]

    // prints actors with networth over 100
    // console.log(actors.filter(actor => actor.networth > 100))

    // .innerHTML replaces whats inside playground elements
    // playground.innerHTML = `<h1>${actors[2].name}</h1>`
    // playground.innerHTML = `<h1>${JSON.stringify(actors)}</h1>` // prints whole array
    // // prints all names, turns array to string and adds a separator
    // playground.innerHTML = `<h1>${actors.map(actor => actor.name).join(', ')}</h1>` 

    // // Writes to html file
    // document.write('Hello World')

    /* sum all of the net worths
     * SUM: think reduce
     * reduce takes in a function as an argument
     * reduce loops and gices you back the accumulator 
    */
    const nums = [1, 2, 3]

    // // prints sum of array
    // console.log(
    //   nums.reduce(
    //     function(prev, curr) {
    //       return prev + curr
    //     }
    //   )
    // )
    // Same ^ but much simpler notation. 0 is default parameter for starting value
    // console.log(nums.reduce((prev, curr) => prev * curr, 0))

    function sum2(a, b) {
      return a + b
    }
    // console.log(nums.reduce(sum2))

    // adds all networths. must pass in 0
    // console.log(actors.reduce((prev, curr) => prev + curr.networth, 0 ))

