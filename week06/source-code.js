/*
1. Callback Functions
 1.1 Write a function greet(name, formatter, formatter2) so that this code works:
  const shout = text => text.toUpperCase() + '!!!'
  const sayHi = text => 'Hi ' + text
  console.log(greet('Alice',sayHi ,shout)) // "HI ALICE!!!"
 1.2 Create a new function whisper(text) that returns lowercase text with "..." at the end.
 Use greet with whisper and sayHi.
*/

const greet = (name, formatter, formatter2) => formatter2(formatter(name))
const shout = text => text.toUpperCase() + '!!!'
const sayHi = text => 'Hi ' + text
console.log(greet('Alice', sayHi, shout));

const whisper = text => text.toLowerCase() + '...'
console.log(greet('Bob', sayHi, whisper));

/*
2. Scope
 2.1 Change the global variable y to 10 inside getScore().
 Print out the result of getScore(2).
 2.2 Try logging doSomething() outside getScore. What happens?
*/

let y = 100 // global variable
let sum = 5
sum = 2

function getScore(x) {
  y = 10
  let mid = 40
  let final = 30
  function doSomething() {
    return `dosomething: ${y + sum + x + mid + final}`
  }
  doSomething()
  return mid + final + x + y + sum
}

const score = getScore(2)
console.log(score)
//console.log(doSomething()) //ReferenceError: doSomething is not defined

/*
3. Closure – ID Generator
 3.1 Complete the function so it generates IDs starting from 1:
  function idGenerator() {
     // your code here
  }
  const idGen = idGenerator()
  console.log(idGen()) // 1
  console.log(idGen()) // 2
  console.log(idGen()) // 3
 3.2 Create a second generator idGen2.
 Show that it starts counting from 1 again, independent of idGen.
*/

function idGenerator() {
    let count = 1
    function increment() {
        return count++
    }
    return increment
}
const idGen = idGenerator()
console.log(idGen()) // 1
console.log(idGen()) // 2
console.log(idGen()) // 3

const idGen2 = idGenerator()
console.log(idGen2()) // 1
console.log(idGen2()) // 2
console.log(idGen2()) // 3

/*
4. Closure – Outer and Inner
 4.1 Write a function outerFunction(a) that returns innerFunction(b).
 innerFunction should return a + b.
  const addFive = outerFunction(5)
  console.log(addFive(3)) // 8
 4.2 Create addTen using outerFunction(10).
 Call addTen(2) and log the result.
*/

function outerFunction(a) {
    function innerFunction(b) {
        return a + b
    }
    return innerFunction
}
const addFive = outerFunction(5)
console.log(addFive(3))
const addTen = outerFunction(10)
console.log(addTen(2))

/*
5. Challenge
 5.1 Write a function multiplier(n) that returns another function.
 The returned function should multiply its input by n.
  const timesTwo = multiplier(2)
  console.log(timesTwo(5)) // 10  
  const timesThree = multiplier(3)
  console.log(timesThree(5)) // 15
*/

function multiplier(n) {
    function multiple(num) {
        return n * num
    }
    return multiple
}
const timesTwo = multiplier(2)
console.log(timesTwo(5)) // 10  
const timesThree = multiplier(3)
console.log(timesThree(5)) // 15


//Project
// Lesson 1: Arrays, Objects, and Functions

// 1. Create an empty array to hold the quotes
const quotes = []

/*
  2. Function: addQuote
  - Accepts a quote object with id, content, and author
  - Adds it to the quotes array
*/
function addQuote(quote) {
  // TODO: Add the quote object to the quotes array
  quotes.push(quote)
  return quotes
}

/*
  3. Function: deleteQuote
  - Accepts an id
  - Removes the quote with that id from the array
*/
function deleteQuote(id) {
  // TODO: Remove the quote object from the array using the given id
  const index = quotes.findIndex(quote => quote.id === id)
  if(index !== -1) {
    quotes.splice(index, 1)
  }
  return quotes
}

/*
  4. Function: updateQuote
  - Accepts an id and an object with new content and/or author
  - Updates the quote with the given id
*/
function updateQuote(id, updatedQuote) {
  // TODO: Find the quote by id and update its properties
  const quote = quotes.find(q => q.id === id);
  if (!quote) {
    return 'not found id'
  }
  if(updatedQuote.content !== undefined) {
    quote.content = updatedQuote.content
  }
  if(updatedQuote.author !== undefined) {
    quote.author = updatedQuote.author
  }
  return quotes
}

/*
  5. Function: getAllQuotes
  - Returns all quotes in the array
*/
function getAllQuotes() {
  // TODO: Return the quotes array
  return quotes
}

// 6. Test your functions below
// TODO: Add 3 quotes using addQuote()
console.log(addQuote({ id: 1, content: 'Stay hungry, stay foolish.', author: 'Steve Jobs' }));
console.log(addQuote({ id: 2, content: 'Do or do not. There is no try.', author: 'Yoda' }));
console.log(addQuote({
  id: 3,
  content: 'Simplicity is the ultimate sophistication.',
  author: 'Leonardo da Vinci'
}));
// TODO: Delete 1 quote using deleteQuote()
console.log(deleteQuote(2));
// TODO: Update 1 quote using updateQuote()
console.log(updateQuote(1, { content: 'Stay hungry. Stay foolish.', author: 'Jobs' }));
// TODO: Print all quotes using getAllQuotes()
console.log(getAllQuotes())