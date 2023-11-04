import * as elements from './elements.js'
import * as actions from './actions.js'
import state from './state.js'
import * as timer from './timer.js'

export const registerCountrolsEvents = () => {
    elements.controls.addEventListener('click', (event) => {
        const action = event.target.dataset.action
        if (typeof actions[action] !== "function") {
            return
        }
        actions[action]()
    }
    )   
}

export const setMinutes = () => {
    elements.minutesValue.addEventListener('focus', () => {
        elements.minutesValue.textContent = ""
    })
    elements.minutesValue.onkeypress = (event) => /\d/.test(event.key) ? true : false
    elements.minutesValue.addEventListener('blur', () => {
        let time = event.target.textContent
        time = time > 60 ? 60 : time

        state.minutes = time
        state.seconds = 0
        timer.updateDisplay()
        elements.minutesValue.setAttribute('contenteditable', false)
    })
}