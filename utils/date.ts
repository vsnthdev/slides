/*
 *  Contains utility functions related to date parsing/stringifying.
 *  Created On 20 April 2024
 */

export function parseDate(dateString: string) {
    // split the string by "-" delimiter
    // check for valid format (YYYY-MM-DD) and parts length
    const parts = dateString.split("-")
    if (parts.length !== 3 || !/^\d{4}$/.test(parts[0]) || !/^\d{2}$/.test(parts[1]) || !/^\d{2}$/.test(parts[2])) {
        return null
    }

    // convert year, month (0-indexed), and day to numbers
    const year = parseInt(parts[0], 10)
    const month = parseInt(parts[1], 10) - 1
    const day = parseInt(parts[2], 10)

    // create a Date object and return it
    return new Date(year, month, day)
}

