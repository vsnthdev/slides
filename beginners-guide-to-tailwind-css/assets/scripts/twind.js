import { setup } from 'https://cdn.skypack.dev/twind/shim'
import * as colors from 'https://cdn.skypack.dev/twind/colors'

setup({
    hash: false,
    darkMode: false,
    theme: {
        fontFamily: {
            body: ['Manrope', 'sans-serif'],
            display: ['Sen', 'sans-serif'],
            code: ['DM Mono', 'monospace'],
        },
        container: {
            center: true
        },
        colors: {
            gray: colors.blueGray,
            primary: '#63D2FF',
            secondary: '#FF99B9',
            white: '#FFF'
        }
    }
})