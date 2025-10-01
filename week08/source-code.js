/*
1. Querying Elements
 1.1 Use getElementById to select the <ul id="appetizer">.
  - Log it in the console.
 1.2 Use querySelector to select the first <li class="meat">.
  - Log the text content.
 1.3 Use querySelectorAll to get all elements with the class "vegan".
  - Loop through them and log each item.
*/

const ulAppetizer = document.getElementById('appetizer')
console.log(ulAppetizer);

const liMeat = document.querySelector('.meat')
console.log(liMeat.textContent);

const veganEle = document.querySelectorAll('.vegan')
veganEle.forEach(ele => console.log(ele))

/*
2. Traversing the DOM
 2.1 Select the first <li> inside <ul id="appetizer"> and print all of its siblings using nextElementSibling.
 2.2 From the <ul id="soup">, find the <li> whose text is "Beef Soup".
  - Store it in a variable and log it.
*/

const appetizer = document.getElementById('appetizer')
let currentAppetizer = appetizer.firstElementChild
while (currentAppetizer !== null) {
    console.log(currentAppetizer);
    currentAppetizer = currentAppetizer.nextElementSibling
}

const soup = document.getElementById('soup')
const soupChild = soup.children
let beefSoup
Array.from(soupChild).forEach(ele => {
    const soupElement = ele
    if (soupElement.textContent.trim() === 'Beef Soup') {
        beefSoup = soupElement
        console.log(beefSoup);
    }
})

/*
3. Adding & Removing Elements
 3.1 Remove "Vegetable Soup" from <ul id="soup">.
 3.2 Add a new <li class="vegan">Pumpkin Soup</li> at the end of <ul id="soup">.
 3.3 Insert a new <li class="meat">Duck Soup</li> before "Beef Soup".
 3.4 Replace "Pork Soup" with "Chicken Soup".
*/

const ulSoup = document.getElementById('soup')
const soupChildren = ulSoup.children

Array.from(soupChildren).forEach(ele => {
    if (ele.textContent.trim() === "Vegetable Soup") {
        ulSoup.removeChild(ele)
    }
})

const newSoup = document.createElement('li')
newSoup.textContent = 'Pumpkin Soup'
newSoup.setAttribute('class', 'vegan')
ulSoup.appendChild(newSoup)

const newSoup2 = document.createElement('li')
newSoup2.textContent = 'Duck Soup'
newSoup2.setAttribute('class', 'meat')
let beefElement =null
Array.from(soupChildren).forEach(ele => {
  if (ele.textContent.trim() === "Beef Soup") beefElement = ele
})
ulSoup.insertBefore(newSoup2, beefElement)

const newSoup3 = document.createElement('li')
newSoup3.textContent = 'Chicken Soup'
newSoup3.setAttribute('class', 'meat')
let porkElement = null
Array.from(soupChildren).forEach(ele => {
  if (ele.textContent.trim() === "Pork Soup") porkElement = ele
})
ulSoup.replaceChild(newSoup3, porkElement)

/*
4. Working with Forms
 4.1 Use getElementsByName("fname") to select the input box for the first name.
  - Log its value.
 4.2 Add an event listener so that when the form is submitted, 
 it logs the first and last name to the console instead of refreshing the page.
*/

const firstNameInput = document.getElementsByName("fname")[0]
console.log(firstNameInput.value)

const form = document.querySelector("form")
form.addEventListener("submit", (event) => {
  event.preventDefault() // stop form from refreshing the page
  
  const firstName = document.getElementById("fname").value
  const lastName = document.getElementById("lname").value

  console.log("First Name:", firstName)
  console.log("Last Name:", lastName)
})

/*
5. Styling with ClassList
 5.1 Create 3 buttons: Add Border, Remove Border, and Toggle Border.
  - Use classList.add, classList.remove, and classList.toggle to change the style of a <div id="box">.
*/

const buttons = document.getElementsByTagName("button")
const box = document.getElementById("box")
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", () => {
    if (button.getAttribute('id') === 'addBorderBtn') {
        box.classList.add("bordered")
    }
    if (button.getAttribute('id') === 'removeBorderBtn') {
        box.classList.remove("bordered")
    }
    if (button.getAttribute('id') === 'toggleBorderBtn') {
        box.classList.toggle("bordered")
    }
  })
})

/*
6. Styling with Dataset
 6.1 Create 3 buttons: Red, Green, Blue.
  - Give each button a data-color attribute.
  - When clicked, the <div id="box"> should change its background color to the button’s dataset color
    and shows the color name in UPPERCASE.
*/

const buttons2 = document.getElementsByTagName("button")
const box2 = document.getElementById("box")
Array.from(buttons2).forEach((button) => {
  button.addEventListener("click", () => {
    const colorName = button.dataset.color
    box2.style.backgroundColor = colorName
    box2.textContent = colorName.toUpperCase()
  })
})
