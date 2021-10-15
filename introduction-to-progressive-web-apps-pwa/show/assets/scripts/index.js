import './twind.js'
import './reveal.js'
import axios from 'https://cdn.skypack.dev/axios'

window.addEventListener('load', async () => {
    const { data } = await axios({
        method: 'GET',
        url: 'https://api.vsnth.dev'
    })

    document.querySelector('#bio').textContent = data.bio
})