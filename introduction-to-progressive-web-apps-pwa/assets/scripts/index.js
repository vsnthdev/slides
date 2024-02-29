import './twind.js'
import './reveal.js'
import getDescription from './description.js'

window.addEventListener('load', async () => await getDescription(document.querySelector('#bio')))
