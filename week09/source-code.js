/*
Part 1: Basic Interaction
1. When the page loads, ask the user for their favorite color and change the background color of the <body> to that color.
2. When the button is clicked, change that <p> text from "Click the button to see magic!" to "You clicked the button!"
*/

const colorInput = prompt('What is your favorite color?','type your favorite color')
if (colorInput) {
    const background = document.querySelector('body')
    background.style.backgroundColor = colorInput.toLowerCase()
}

const okButton = document.querySelector("button#okBtn")
okButton.addEventListener('click',event => {
    const magicText = document.querySelector("p#hint")
    magicText.textContent = 'You clicked the button!'
})

/*
Part 2: Event Handling
3. Write a new function named sayHello() that shows an alert "Welcome to JavaScript!".
   → Add it as a click event listener for the <button>.
4. Add another listener to the same button that logs "Button clicked again!" to the console.
   → Observe what happens when multiple handlers exist.
5. Try to remove the first event listener (sayHello) and check that it no longer runs.
*/

function sayHello() {
    alert('Welcome to JavaScript!')
}
okButton.addEventListener('click',sayHello)

okButton.addEventListener('click', event => {
    console.log("Button clicked again!");
})

okButton.removeEventListener('click', sayHello)

/*
Part 3: Event Bubbling and Capturing
6. Add a click event listener to:
 - the <button>
 - its parent <div>
 - and the <body>
   Each one should log which element was clicked.
   → Experiment with bubbling vs capturing (true or false as the 3rd parameter).
*/

okButton.addEventListener('click',() => {
    console.log('button was clicked');
}, true)
const divElement = document.querySelector('div#container')
divElement.addEventListener('click',() => {
    console.log('div was clicked');
}, true)
const bodyElement = document.querySelector('body')
bodyElement.addEventListener('click',() => {
    console.log('body was clicked');
}, true)

/*
Part 4: Preventing Default Actions
7. Modify the link <a> so that when it’s clicked:
 - It doesn’t open the SIT website.
 - Instead, it shows an alert: "Link was blocked!"
*/

const aElement = document.querySelector('a')
aElement.addEventListener('click', event => {
    event.preventDefault()
    alert("Link was blocked!")
})

/*
Part 5: Form Handling
8. Prevent the form from submitting when the submit button is clicked.
9. Validate that both the first name and last name fields are not empty.
 - If either is empty → show an alert "Please fill all fields!".
 - Otherwise → show an alert with "Hello, [fname] [lname]!"
*/

const submitButton = document.querySelector("input[type='submit']")
submitButton.addEventListener('click', event => {
    event.preventDefault()
    //validate
    const fnameInput = document.querySelector("#fname");
    const lnameInput = document.querySelector("#lname");

    const firstName = fnameInput ? fnameInput.value.trim() : '';
    const lastName = lnameInput ? lnameInput.value.trim() : '';

    if (firstName.length === 0 || lastName.length === 0) {
        alert("Please fill all fields!");
        return; 
    }
    alert(`Hello, ${firstName} ${lastName}!`);
})

/*
Part 6: Page & Window Events
10. Add a listener for DOMContentLoaded that logs "HTML loaded!"
 and creates a <h3> element with text "Welcome to my site".
11. Add a resize event listener on window that updates the <p id="info">
 to show the current window size (width × height).
12. Add a scroll event listener that logs the scroll position (Y-axis).
*/

document.addEventListener('DOMContentLoaded', () => {
    console.log("HTML loaded!");
    const heading = document.createElement('h3')
    heading.textContent = "Welcome to my site"
    document.body.appendChild(heading)
})

const info = document.querySelector('p#info')
window.addEventListener('resize', () => {
    info.textContent = `Window resized: ${window.innerWidth} x ${window.innerHeight}`
})

window.addEventListener('scroll', () => {
    info.textContent = `Scrolled to Y: ${window.scrollY}`
})

/*
Part 7: Mouse Events
13. When the mouse is over the <div id=box"">, change its background color to yellow.
14. When the mouse leaves the <div>, change it to green.
15. When the user moves the mouse, show the coordinates in <p id="info">.
*/

const divBox = document.querySelector('div#box')
divBox.addEventListener('mouseover', event => {
    divBox.style.backgroundColor = 'yellow'
})

divBox.addEventListener('mouseout', event => {
    divBox.style.backgroundColor = 'green'
})

window.addEventListener('mousemove', event => {
    info.textContent = `Mouse at X: ${event.clientX}, Y: ${event.clientY}`
})

/*
Part 8: Keyboard Events
16. Add an event so that when the user types in the #message input,
 the text appears live in the <p> below it (already done, review it and explain how it works).
*/

const message = document.querySelector('input#message')
const display = document.querySelector('p#display')
message.addEventListener('input', () => {
    display.textContent = message.value
})

/*
Bonus Challenge
17. Add a Clear Button that, when clicked:
 - Clears the text input field.
 - Resets the <p> display message.
18. Add an event that detects when the user double-clicks the button 
 → show "Double click detected!" in an alert.
*/

const clearButton = document.querySelector('button#clearBtn')
clearButton.addEventListener('click', event => {
    message.value = ''
    display.textContent = ''
})

okButton.addEventListener('dblclick', event => {
    alert("Double click detected!")
})