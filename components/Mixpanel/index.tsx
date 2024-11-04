'use client'
/*
 *  Mixpanel tracking code component.
 *  Created On 05 November 2024
 */

import mixpanel from "mixpanel-browser"
import { useEffect } from "react"

export function Mixpanel() {
    // HOOKS
    useEffect(() => {
        mixpanel.init(
            '43229caf3ce6296117cdaf01998a340f',
            {
                ignore_dnt: true,
                persistence: 'localStorage',
                track_pageview: 'url-with-path-and-query-string',
            }
        )
    }, [])

    return <></>
}
