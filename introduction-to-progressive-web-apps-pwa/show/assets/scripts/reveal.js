import Reveal from 'https://cdn.skypack.dev/reveal.js'
import Markdown from 'https://cdn.skypack.dev/reveal.js/plugin/markdown/markdown.esm.js'

const deck = new Reveal({
    center: false,
    hash: true,
    progress: true,
    transition: 'convex',
    plugins: [
        Markdown
    ]
})

deck.initialize()