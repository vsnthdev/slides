/*
 *  Fetches my slides from Notion doc.
 *  Created On 29 February 2024
 */

import { Client } from '@notionhq/client'
import { camelCase } from 'change-case'
import { parseDate } from './date'

const notion = new Client({
    auth: process.env.NOTION_TOKEN
})

export interface Slide {
    for?: string
    title?: string
    duration?: string
    imageUrl?: string
    videoLink?: string
    presentedOn?: Date
    photosLink?: string
    description?: string
    audianceSize?: string
    presentationLink?: string
    sessionType?: 'Virtual' | 'Physical'
}

export async function getSlides() {
    const databaseId = 'aea5a41eade94a39a259c371c84e5bdf'

    const { results } = await notion.databases.query({
        database_id: databaseId,
    })

    const slides: Slide[] = []
    const props = results.map((res: any) => res.properties)

    for (const prop of props) {
        const slide: any = {}

        for (const key in prop) {
            const value = prop[key]

            if (value.type == 'title') {
                slide[camelCase(key)] = value.title[0].plain_text
                continue
            }

            if (value.type == 'url') {
                slide[camelCase(key)] = value.url
                continue
            }

            if (value.type == 'rich_text') {
                if (value.rich_text.length == 0) continue
                slide[camelCase(key)] = value.rich_text[0].plain_text
                continue
            }

            if (value.type == 'select') {
                slide[camelCase(key)] = value.select.name
                continue
            }

            if (value.type == 'date') {
                slide[camelCase(key)] = parseDate(value.date.start)
                continue
            }

            if (value.type == 'number') {
                slide[camelCase(key)] = value.number
                continue
            }

            throw new Error(`Type "${value.type}" not implemented by getSlides() function.`)
        }

        slides.push(slide)
    }

    return slides.sort((a, b) => b.presentedOn.valueOf() - a.presentedOn.valueOf())
}
