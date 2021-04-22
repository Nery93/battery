'use strict'

const sons = {
    'A': 'boom.wav',
    'D': 'clap.wav',
    'S': 'hihat.wav',
    'F': 'kick.wav',
    'G': 'openhat.wav',
    'H': 'ride.wav',
    'J': 'snare.wav',
    'K': 'tink.wav',
    'L': 'tom.wav'   
}

const createDiv = (texto) => {
    const div = document.createElement('div')
    div.classList.add('key')
    div.textContent = texto
    div.id = texto
    document.querySelector('#container').appendChild(div)
}

const view = (sons) => Object.keys(sons).forEach(createDiv)

const playSound = (letter) => {
    const audio = new Audio(`./sounds/${sons[letter]}`)
    audio.play()
}
const addEffect = (letter) => document.getElementById(letter)
                                      .classList.add('active')

const removeEffect = (letter) => {
    const div = document.getElementById(letter)
    const removeActive = () => div.classList.remove('active')
    div.addEventListener('transitionend',removeActive)
}                                     

const effect = (evento) => {
    let letter = ''
    if(evento.type === 'click'){
        letter = evento.target.id    
    }else{
        letter = evento.key.toUpperCase()
    }

    const allowedLetter = sons.hasOwnProperty(letter)
    if (allowedLetter){
        addEffect(letter)
        playSound(letter)
        removeEffect(letter)    
    }
    playSound(letter)
}

view(sons)
document.querySelector('#container').addEventListener('click',effect)

window.addEventListener('keydown',effect)