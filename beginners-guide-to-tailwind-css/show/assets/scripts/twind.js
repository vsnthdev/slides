import { setup } from 'https://cdn.skypack.dev/twind/shim'
import * as colors from 'https://cdn.skypack.dev/twind/colors'

setup({
    hash: false,
    darkMode: false,
    theme: {
        fontFamily: {
            body: ['Manrope', 'sans-serif'],
            display: ['DM Sans', 'sans-serif'],
            code: ['DM Mono', 'monospace'],
        },
        container: {
            center: true
        },
        colors: {
            gray: colors.blueGray,
            primary: colors.indigo,
            secondary: colors.orange,
        }
    }
})