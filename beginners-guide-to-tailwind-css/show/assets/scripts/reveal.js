import Reveal from 'https://cdn.skypack.dev/reveal.js'
import Markdown from 'https://cdn.skypack.dev/reveal.js/plugin/markdown/markdown.esm.js'

const deck = new Reveal({
    progress: true,
    transition: 'convex',
    plugins: [
        Markdown
    ]
})

deck.initialize()