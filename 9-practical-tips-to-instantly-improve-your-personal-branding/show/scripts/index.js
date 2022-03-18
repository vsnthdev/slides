/*
 *  Entry JavaScript file for this presentation.
 *  Created On 18 March 2022
 */

import './reveal.js'
import './tailwind.web.js'
import getDescription from '../../../introduction-to-progressive-web-apps-pwa/show/assets/scripts/description.js'

window.addEventListener('load', async () => await getDescription(document.querySelector('#bio')))
