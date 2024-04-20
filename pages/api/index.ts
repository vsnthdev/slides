/*
 *  Returns all the sessions in a JSON format.
 *  Created On 21 April 2024
 */

import { func } from 'serverless-utilities'
import { getSlides } from '../../utils/notion'

export default func({
    cors: {
        allowCredentials: false,
        allowedOrigin: '*',
        allowedMethods: ['get', 'head'],
    },
    caching: {
        sharedCacheSeconds: 10
    },
    methods: {
        get: {
            async handler(req, res) {
                return res.status(200).json(await getSlides())
            },
        }
    }
})
