'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export function Title() {
    const ref = useRef(null)
    const isInView = useInView(ref)

    const parentVariants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        }
    }

    const childVariants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
        }
    }

    return <div className='select-none relative mb-10 px-3 pt-14 lg:py-14 xl:py-10'>
        <motion.h1
            ref={ref}
            variants={parentVariants}
            initial='hidden'
            animate={isInView ? 'visible' : 'hidden'}
            className='leading-normal text-center text-3xl font-medium sm:text-4xl sm:leading-normal xl:text-5xl xl:leading-normal'>
            <motion.span
                variants={childVariants}
                className='text-stone-400 xl:text-4xl'>Presentations I have created </motion.span><br className='hidden md:inline' />
            <motion.span
                variants={childVariants}
                className='text-stone-100'>for 🥳 events and 👨‍💻 sessions </motion.span><br className='hidden lg:inline' />
            <motion.span
                variants={childVariants}
                className='text-stone-400 xl:text-4xl '>where I'm the speaker.</motion.span>
        </motion.h1>
    </div>
}