'use client'
/*
 *  A component that represents a session.
 *  Created On 31 March 2024
 */

import Link from 'next/link'
import Image from 'next/image'
import { type Slide } from '../../utils/notion'
import { ClapperboardIcon, ClockIcon, HandshakeIcon, ImageIcon, PlayIcon, PresentationIcon, UsersRoundIcon, YoutubeIcon } from 'lucide-react'
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react'
import { isMobile } from 'react-device-detect'

function DynamicallyLink({ link, children }: { children: React.ReactNode, link?: string }) {
    if (link) {
        return <Link href={link}>
            {children}
        </Link>
    } else {
        return children
    }
}

export function Slide({ slide, index }: { slide: Slide, index: number }) {
    // HOOKS
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const imageBefore = isMobile ? {
        x: 0,
        y: 0,
        opacity: 0,
    } : {
        x: -30,
        y: -10,
        opacity: 0,
    }

    const imageAfter = isMobile ? {
        x: 0,
        y: 0,
        opacity: 1,
    } : {
        x: 0,
        y: 0,
        opacity: 1,
    }

    const cardBefore = isMobile ? {
        x: 0,
        y: 0,
        opacity: 0,
    } : {
        x: 30,
        y: 10,
        opacity: 0,
    }

    const cardAfter = isMobile ? {
        x: 0,
        y: 0,
        opacity: 1,
    } : {
        x: 0,
        y: 0,
        opacity: 1,
    }

    return <div
        className="w-full relative overflow-visible space-y-32">
        <article className='relative flex flex-col'>
            <DynamicallyLink link={slide.videoLink}>
                <div className='relative flex -z-20'>
                    <div className='absolute inset-0 flex items-center justify-center md:hidden'>
                        {slide.videoLink && <motion.div
                            initial={{
                                opacity: 0,
                            }}
                            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{
                                duration: 0.3,
                                delay: 0.6,
                            }}
                            className='size-14 rounded-full text-black bg-white flex items-center justify-center shadow-xl'>
                            <PlayIcon />
                        </motion.div>}
                    </div>
                    <motion.div
                        initial={imageBefore}
                        animate={isInView ? imageAfter : imageBefore}
                        transition={{
                            duration: 0.3,
                            delay: 0.5,
                        }}>
                        <Image priority={index <= 2} src={slide.imageUrl} alt={slide.title} width={1280} height={720} className='rounded-md md:max-w-lg' />
                    </motion.div>
                </div>
            </DynamicallyLink>
            <motion.div
                ref={ref}
                initial={cardBefore}
                animate={isInView ? cardAfter : cardBefore}
                transition={{
                    duration: 0.3,
                    delay: 0.6,
                }}
                className='py-6 flex flex-col space-y-4 md:rounded-xl md:-mt-14 md:ml-24 md:px-8 md:py-8 lg:px-10 lg:py-10 special-border z-10 md:bg-undertone-950/60 md:backdrop-blur-2xl md:shadow-[0_8px_32px_rgba(0,0,0,0.3)] md:border md:border-undertone-200/20 md:hover:border-undertone-500 md:transition-colors'
            >
                {/* event & session title */}
                <div className='flex flex-col space-y-1'>
                    {slide.for && <p className='font-medium opacity-70 md:text-lg'>{slide.for}</p>}
                    {slide.title && <h3 className='font-medium text-xl md:text-2xl lg:text-3xl'>{slide.title}</h3>}
                </div>
                {/* description */}
                {slide.description && <div className='flex flex-col font-content'>
                    <p>{slide.description}</p>
                </div>}
                {/* stats */}
                <div className='flex items-center justify-between max-w-md md:justify-start md:space-x-8'>
                    {slide.duration && <div className='flex items-center space-y-2 space-x-3'>
                        <ClockIcon className='size-5 md:size-6' />
                        <div className='flex flex-col justify-center'>
                            <span className='text-sm md:text-base font-semibold uppercase'>{slide.duration.split(' ')[0]}</span>
                            <span className='text-xs md:text-sm font-semibold uppercase opacity-70'>{slide.duration.split(' ').slice(1).join(' ')}</span>
                        </div>
                    </div>}
                    {slide.audianceSize && <div className='flex items-center space-y-2 space-x-3'>
                        <UsersRoundIcon className='size-5 md:size-6' />
                        <div className='flex flex-col justify-center'>
                            <span className='text-sm md:text-base font-semibold uppercase'>{slide.audianceSize.split(' ')[0]}</span>
                            <span className='text-xs md:text-sm font-semibold uppercase opacity-70'>{slide.audianceSize.split(' ').slice(1).join(' ')}</span>
                        </div>
                    </div>}
                    {slide.sessionType && <div className='flex items-center justify-center space-y-2 space-x-3'>
                        {slide.sessionType == 'Physical' ? <HandshakeIcon className='size-5 md:size-6' /> : <ClapperboardIcon className='size-5 md:size-6' />}
                        <div className='flex flex-col justify-center'>
                            <span className='text-sm md:text-base font-semibold uppercase'>{slide.sessionType}</span>
                            <span className='text-xs md:text-sm font-semibold uppercase opacity-70'>session</span>
                        </div>
                    </div>}
                </div>
                {/* desktop actions */}
                <div className='space-x-4 hidden md:flex'>
                    {slide.presentationLink && <Link href={slide.presentationLink} target='_blank' className='px-3.5 py-2 select-none flex justify-center space-x-2 items-center rounded-md font-sans font-medium transition-all text-black bg-white hover:bg-stone-200 transform-gpu active:scale-95'>
                        <PresentationIcon className='size-5' />
                        <span>Present now</span>
                    </Link>}
                    {slide.videoLink && <Link href={slide.videoLink} className='px-3.5 py-2 select-none flex justify-center space-x-2 items-center rounded-md font-sans font-medium transition-all bg-red-500 hover:bg-red-600 transform-gpu active:scale-95'>
                        <YoutubeIcon className='size-5' />
                        <span>Watch now</span>
                    </Link>}
                    {slide.photosLink && <Link href={slide.photosLink} target='_blank' className='px-3.5 py-2 select-none flex justify-center space-x-2 items-center rounded-md font-sans font-medium transition-all bg-blue-500 hover:bg-blue-600 transform-gpu active:scale-95'>
                        <ImageIcon className='size-5' />
                        <span>See photos</span>
                    </Link>}
                </div>
            </motion.div>

            {/* mobile actions */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{
                    duration: 0.3,
                    delay: 0.6,
                }} className='flex flex-col gap-y-4 md:hidden'>
                {slide.presentationLink && <Link href={slide.presentationLink} target='_blank' className='px-3.5 py-2 select-none flex justify-center space-x-2 items-center rounded-md font-sans font-medium transition-all text-black bg-white hover:bg-stone-200 transform-gpu active:scale-95'>
                    <PresentationIcon className='size-5' />
                    <span>Present now</span>
                </Link>}
                {slide.photosLink && <Link href={slide.photosLink} target='_blank' className='px-3.5 py-2 select-none flex justify-center space-x-2 items-center rounded-md font-sans font-medium transition-all bg-blue-500 hover:bg-blue-600 transform-gpu active:scale-95'>
                    <PresentationIcon className='size-5' />
                    <span>See photos</span>
                </Link>}
            </motion.div>
        </article>
    </div>
}
