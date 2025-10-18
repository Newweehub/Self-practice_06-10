import { CookieUtil } from "./CookieUtil.js"

/*
Part 1: Working with Cookies
1. Create and Read Cookies
 - Use document.cookie to create a cookie with:
   - name: user
   - value: John
   - expiration date: 3 days from now
 - Then log document.cookie to the console to confirm it was created.
*/

document.cookie = `user=John; max-age=${60 * 60 * 24 * 3}`
console.log(document.cookie);

/*
2. Update Cookies
 - Change the value of the user cookie to "Alice".
 - Log the cookie again to confirm the update.
*/

document.cookie = `user=Alice`
console.log(document.cookie);

/*
3. Use CookieUtil
 - Use CookieUtil.set() to create a cookie called language with value "English" that expires in 5 days.
 - Use CookieUtil.get('language') to retrieve and display it in the console.
 - Use CookieUtil.unset('language') to delete the cookie, and verify it is gone.
*/

CookieUtil.set('language', 'English', new Date(Date.now() + 5 * 24 * 60 * 60 * 1000))  //Date works with milisecond
console.log(CookieUtil.get('language'));

/*
Part 2: Working with Local Storage
4. Set and Get Data
 - Store your favorite color in localStorage using the key "favColor".
 - Retrieve and log it.
*/

localStorage.setItem('favColor','pink')
let fcolor = localStorage.getItem('favColor')
console.log(fcolor);

/*
5. Counter Example
 - Create a counter that increases by 1 every time you reload the page.
 - Use localStorage to remember the last count.
 - Display the count in an alert() or in the HTML.
*/

let counter = localStorage.getItem('count')
if (counter === null) localStorage.setItem('count', 1)
else localStorage.setItem('count', ++counter)
alert(counter)

/*
6. Clear Data
 - Remove the key "favColor" from localStorage.
 - Try logging it again — what happens?
*/

localStorage.removeItem('favColor')
console.log(counter);

/*
Part 3: Working with Session Storage
7. Session-based Counter
 - Create a counter (like above) but store it in sessionStorage.
 - Observe the difference when you close and reopen the browser.
*/

let counter2 = sessionStorage.getItem('count')
if (counter2 === null) sessionStorage.setItem('count', 1)
else sessionStorage.setItem('count', ++counter2)
alert(counter2)

/*
8. Temporary Login Simulation
 - When a user types their name into an <input> field and clicks a button:
   - Save it to sessionStorage under "username".
   - Display “Welcome, [username]!” below the input.
 - When the tab is closed, and you reopen it, the message should disappear.
*/

let userInput = document.querySelector('input#username')
let display = document.querySelector('p#display')
let submitButton = document.querySelector('button[type="button"]')
submitButton.addEventListener('click', () => {
    if (userInput.value) {
      sessionStorage.setItem('username', userInput.value)

      let username = sessionStorage.getItem('username')
      display.textContent = `Welcome, ${username}`
    }
    else display.textContent = 'invalid input'
})