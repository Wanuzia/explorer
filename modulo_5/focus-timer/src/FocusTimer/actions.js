import state from './state.js'
import * as timer from './timer.js'
import * as elements from './elements.js'
import * as sound from './sounds.js'

export const toggleRunning = () => {
    state.isRunning = document.documentElement.classList.toggle('running')
    timer.countdown()
    sound.buttonPressAudio.play()
}

export const toggleMusic = () => {
    document.documentElement.classList.toggle('music-on')
    state.hasMusic = !state.hasMusic
    
    if(state.hasMusic) {
        sound.bgAudio.play()
        return
    }
    sound.bgAudio.pause()
}

export const setTimer = () => {
elements.minutesValue.setAttribute('contenteditable', true)
elements.minutesValue.focus()
}


export const resetTimer = () => {    
    state.isRunning = false
    document.documentElement.classList.remove('running')
    timer.updateDisplay()
    sound.buttonPressAudio.play()

}

//FocusTimer v2
export const setTimerLess = () => {
    const minutes = Number(elements.minutesValue.textContent)
    const newMinutes = minutes - 5
    
    if (newMinutes < 5) {
        return
    }

    elements.minutesValue.textContent = newMinutes.toString().padStart(2, '0')
    timer.updateDisplay(newMinutes)

    sound.buttonPressAudio.play()
}

export const setTimerPlus = () => {
    const minutes = Number(elements.minutesValue.textContent)
    const newMinutes = minutes + 5
    
    if (newMinutes > 60) {
        return
    }

    elements.minutesValue.textContent = newMinutes.toString().padStart(2, '0')
    timer.updateDisplay(newMinutes)

    sound.buttonPressAudio.play()
}
