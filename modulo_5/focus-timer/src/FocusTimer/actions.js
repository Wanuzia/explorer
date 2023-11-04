import state from './state.js'
import * as timer from './timer.js'
import * as elements from './elements.js'

export const toggleRunning = () => {
    state.isRunning = document.documentElement.classList.toggle('running')
    timer.countdown()
}

export const toggleMusic = () => {
    document.documentElement.classList.toggle('music-on')
    state.hasMusic = !state.hasMusic
}

export const setTimer = () => {
elements.minutesValue.setAttribute('contenteditable', true)
elements.minutesValue.focus()
}

export const resetTimer = () => {    
    state.isRunning = false
    document.documentElement.classList.remove('running')
    timer.updateDisplay()
}