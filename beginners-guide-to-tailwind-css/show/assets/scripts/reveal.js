import Reveal from 'https://cdn.skypack.dev/reveal.js'
import Markdown from 'https://cdn.skypack.dev/reveal.js/plugin/markdown/markdown.esm.js'

const deck = new Reveal({
    plugins: [
        Markdown
    ]
})

deck.initialize()