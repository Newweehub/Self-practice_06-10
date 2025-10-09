const createButton = document.querySelector('button#submit')
const display = document.querySelector('p')

createButton.addEventListener('click', (event) => {
    event.preventDefault()

    const username = document.querySelector('#username').value.trim()
    const email = document.querySelector('#email').value.trim()
    const passwd = document.querySelector('#password').value.trim()
    const confirmPasswd = document.querySelector('#confirm-password').value.trim()

    if (!username || !email || !passwd || !confirmPasswd) {
        display.textContent = "missing some values, please try again"
        display.style.color = 'red'
        return
    }

    if (passwd !== confirmPasswd) {
        display.textContent = "password and confirm do not match, check again"
        display.style.color = 'red'
        return
    }

    display.textContent = "your data completed"
    display.style.color = 'green'
})