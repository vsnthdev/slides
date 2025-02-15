/*
 *  Immersive background composition with organic circular shapes.
 *  Created On 13 February 2024
 */

'use client'

import { useEffect, useRef } from 'react'

export const Background = () => {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const circles = [
            // massive background circles for base gradient
            {
                size: 900,
                blur: 80,
                color: '#7B28D9', // darker vivid purple
                opacity: 0.3,
                x: 10,
                y: 20
            },
            {
                size: 850,
                blur: 75,
                color: '#5B21B6', // darker electric purple
                opacity: 0.35,
                x: 85,
                y: 15
            },

            // large overlapping circles
            {
                size: 700,
                blur: 65,
                color: '#9333EA', // vivid purple
                opacity: 0.4,
                x: 75,
                y: 80
            },
            {
                size: 650,
                blur: 60,
                color: '#6D28D9', // deep purple
                opacity: 0.35,
                x: 25,
                y: 75
            },

            // medium accent circles
            {
                size: 550,
                blur: 55,
                color: '#4C1D95', // darkest purple
                opacity: 0.3,
                x: 50,
                y: 45
            },
            {
                size: 500,
                blur: 50,
                color: '#8B5CF6', // medium purple
                opacity: 0.25,
                x: 15,
                y: 60
            }
        ]

        if (!containerRef.current) return

        circles.forEach(circle => {
            const element = document.createElement('div')

            element.style.position = 'absolute'
            element.style.width = `${circle.size}px`
            element.style.height = `${circle.size}px`
            element.style.borderRadius = '50%'
            element.style.filter = `blur(${circle.blur}px)`
            element.style.opacity = circle.opacity.toString()
            element.style.left = `${circle.x}%`
            element.style.top = `${circle.y}%`
            element.style.transform = 'translate(-50%, -50%)'
            element.style.background = `radial-gradient(circle at center, ${circle.color}, ${circle.color}88 40%, ${circle.color}00 80%)`
            element.style.transition = 'all 300ms ease-in-out'

            containerRef.current?.appendChild(element)
        })

        return () => {
            if (containerRef.current) {
                containerRef.current.innerHTML = ''
            }
        }
    }, [])

    return (
        <div
            ref={containerRef}
            className='fixed inset-0 -z-10 overflow-hidden pointer-events-none'
            aria-hidden='true'
        />
    )
}