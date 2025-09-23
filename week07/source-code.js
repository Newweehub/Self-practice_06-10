/*
1. DOM Structure & Nodes
 1.1 Use document.documentElement to show the root element of the HTML.
 1.2 Use document.body.nodeName to check if it equals "BODY".
 1.3 Use nodeType to check what type of node the <title> tag is.
*/

const html = document.documentElement
console.log(html);

console.log(document.body.nodeName === "BODY");

const title = document.head.firstElementChild
if (title.nodeType === Node.ELEMENT_NODE)
  console.log(`title is an element node type`) //title is an element node type
if (title.nodeType === Node.ATTRIBUTE_NODE)
  console.log(`title is an attribute node type`)
if (title.nodeType === Node.TEXT_NODE)
  console.log(`title is a text node type`)

/*
2. Query & Child Elements
 2.1 Access <div id="demo"> and show its childNodes.length.
 2.2 Loop through its childNodes and log the nodeName and nodeType.
 2.3 Access <div id="demo"> using children and log only the element tag names.
*/

const div = document.getElementById("demo")
const divChild = div.childNodes
console.log(divChild.length);

divChild.forEach(child => {
    console.log(child.nodeName);
    console.log(child.nodeType);
})

const divChildren = div.children
Array.from(divChildren).forEach(child => {
    console.log(child.nodeName);
})

/*
3. Create & Append
 3.1 Create a <p> element with id="int142" and text INT142, then append it into <div id="subject">.
 3.2 Set its attribute style="color:blue".
 3.3 Use getAttribute() to read both the id and style values.
*/

let p = document.createElement('p')
p.setAttribute('id','int142')
p.textContent = 'INT142'
const div2 = document.getElementById('subject')
div2.appendChild(p)

p.setAttribute('style','color:blue')

console.log(p.getAttribute('id'));
console.log(p.getAttribute('style'));

/*
4. Text Content vs InnerHTML
 4.1 Access <div id="demo"> and log:
  - innerHTML
  - innerText
  - textContent
 Compare the differences.
 4.2 Create a new <p> and try setting:
  - innerHTML = "<i>Italic Content</i>"
  - innerText = "<i>Italic Content</i>"
  - textContent = "<i>Italic Content</i>"
 Observe the results.
*/

const div1 = document.getElementById('demo')
console.log(div1.innerHTML);
console.log(div1.innerText);
console.log(div1.textContent);

const p1 = document.createElement('p')
p1.innerHTML = "<i>Italic Content</i>"
p1.innerText = "<i>Italic Content</i>"
p1.textContent = "<i>Italic Content</i>"
document.body.appendChild(p1)

/*
5. Traversal
 5.1 Use children of <ul id="drink"> to list all drinks.
 5.2 Access <li>Tea</li> by index, then log:
  - Its previous element sibling
  - Its next element sibling
  - Its parent element
*/

const ulDrinks = document.getElementById('drink')
const allDrinks = ulDrinks.children
Array.from(allDrinks).forEach(drink => console.log(drink.textContent))

let teaDrink = allDrinks[1]
console.log(teaDrink.textContent);
console.log(teaDrink.previousElementSibling);
console.log(teaDrink.nextElementSibling);
console.log(teaDrink.parentElement);

/*
6. Bonus Challenge
 6.1 Add a new <li>Milk</li> to the end of <ul id="drink">.
 6.2 Remove <li>Chocolate</li> from the <ul>.
*/

let liMilk = document.createElement('li')
liMilk.textContent = 'Milk'
ulDrinks.appendChild(liMilk)

Array.from(allDrinks).forEach(drink => {
  if (drink.textContent.trim() === "Chocolate") {
    drink.remove();
  }
});