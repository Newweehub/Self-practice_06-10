const keyInput = document.querySelector('input#keyInput')

keyInput.addEventListener('keyup', event => {
    const pressKey = document.createElement('p')
    if (event.key === 'Enter') {
        pressKey.style.color = 'blue'
    }
    pressKey.textContent = `You pressed: ${event.key}`

    const keyLog = document.querySelector('div#keyLog')
    keyLog.appendChild(pressKey)
})