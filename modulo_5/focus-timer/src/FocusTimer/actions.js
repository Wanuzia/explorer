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

export const toggleRainMusic = () => {
    document.documentElement.classList.toggle('rain-music-on')
    state.hasRainMusic = !state.hasRainMusic
    
    if(state.hasRainMusic) {
        state.hasCoffeeMusic = false
        state.hasFireMusic = false
        state.hasForestMusic = false
        document.documentElement.classList.remove('coffee-music-on')
        document.documentElement.classList.remove('forest-music-on')
        document.documentElement.classList.remove('fire-music-on')
        sound.coffeeShopAudio.pause()
        sound.FlameAudio.pause()
        sound.ForestAudio.pause()
        sound.RainAudio.play()
        return
    }
    sound.RainAudio.pause()
}

export const toggleForestMusic = () => {
    document.documentElement.classList.toggle('forest-music-on')
    state.hasForestMusic = !state.hasForestMusic
    
    if(state.hasForestMusic) {
        state.hasRainMusic = false
        state.hasCoffeeMusic = false
        state.hasFireMusic = false
        document.documentElement.classList.remove('coffee-music-on')
        document.documentElement.classList.remove('rain-music-on')
        document.documentElement.classList.remove('fire-music-on')
        sound.coffeeShopAudio.pause()
        sound.FlameAudio.pause()
        sound.RainAudio.pause()
        sound.ForestAudio.play()
        return
    }
    sound.ForestAudio.pause()
}

export const toggleFlameMusic = () => {
    document.documentElement.classList.toggle('fire-music-on')
    state.hasFireMusic = !state.hasFireMusic
    
    if(state.hasFireMusic) {
        state.hasForestMusic = false
        state.hasRainMusic = false
        state.hasCoffeeMusic = false
        document.documentElement.classList.remove('rain-music-on')
        document.documentElement.classList.remove('forest-music-on')
        document.documentElement.classList.remove('coffee-music-on')
        sound.coffeeShopAudio.pause()
        sound.ForestAudio.pause()
        sound.RainAudio.pause()
        sound.FlameAudio.play()
        return
    }
    sound.FlameAudio.pause()
}

export const toggleCoffeeMusic = () => {
    document.documentElement.classList.toggle('coffee-music-on')
    state.hasCoffeeMusic = !state.hasCoffeeMusic
    
    if(state.hasCoffeeMusic) {
        state.hasFireMusic = false
        state.hasForestMusic = false
        state.hasRainMusic = false
        document.documentElement.classList.remove('rain-music-on')
        document.documentElement.classList.remove('forest-music-on')
        document.documentElement.classList.remove('fire-music-on')
        sound.FlameAudio.pause()
        sound.ForestAudio.pause()
        sound.RainAudio.pause()
        sound.coffeeShopAudio.play()
        return
    }
    sound.coffeeShopAudio.pause()
}
