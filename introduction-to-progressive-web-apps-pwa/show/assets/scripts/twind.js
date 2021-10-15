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
        extend: {
            colors: {
                gray: colors.blueGray,
                white: '#FFF',
                background: '#FFFFFF',
                'g-blue': '#4285f4',
                'g-green': '#34a853',
                'g-yellow': '#fbbc05',
                'g-red': '#ea4335'
            }
        }
    }
})