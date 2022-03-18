/*
 *  Loads description to the given selector.
 *  Created On 18 March 2022
 */

import axios from 'https://cdn.skypack.dev/axios'

export default async selector => {
    const { data } = await axios({
        method: 'GET',
        url: 'https://api.vsnth.dev'
    })

    selector.textContent = data.bio
}
