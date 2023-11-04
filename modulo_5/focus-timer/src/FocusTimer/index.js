import state from './state.js'
import * as events from './events.js'
import * as timer from './timer.js'

export const start = (min, sec) => {
    state.minutes = min
    state.seconds = sec

    timer.updateDisplay()
    events.registerCountrolsEvents()
    events.setMinutes()

}

