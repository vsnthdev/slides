import Reveal from 'https://cdn.skypack.dev/reveal.js'

const deck = new Reveal({
    center: false,
    hash: true,
    progress: true,
    transition: 'fade',
    transitionSpeed: 'fast',
    hideCursorTime: 500,
    controlsTutorial: false
})

deck.initialize()
