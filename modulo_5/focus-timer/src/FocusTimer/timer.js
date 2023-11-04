import state from './state.js'
import * as elements from "./elements.js"
import * as actions from "./actions.js"

export const countdown = () => {
    if (!state.isRunning) {
        return
    }
    let minutes = Number(elements.minutesValue.textContent)
     let seconds = Number(elements.secondsValue.textContent)
 
     seconds--

     if (seconds < 0) {
         seconds = 59
         minutes--
     }

     if (minutes < 0) {
        actions.resetTimer()
         return
     }

     updateDisplay(minutes, seconds)
     setTimeout(() => countdown(), 1000)



}

export function updateDisplay(minutes, seconds) {
    minutes = minutes ?? state.minutes
    seconds = seconds ?? state.seconds

    elements.minutesValue.textContent = minutes.toString().padStart(2, '0')
    elements.secondsValue.textContent = seconds.toString().padStart(2, '0')
}

