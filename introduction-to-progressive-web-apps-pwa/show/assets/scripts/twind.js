import { setup } from 'https://cdn.skypack.dev/twind/shim'
import * as colors from 'https://cdn.skypack.dev/twind/colors'

setup({
    hash: false,
    darkMode: false,
    theme: {
        fontFamily: {
            body: ['Basically A Sans Serif', 'sans-serif'],
        },
        container: {
            center: true
        },
        colors: {
            white: '#FFF'
        }
    }
})