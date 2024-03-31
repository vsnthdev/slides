/*
 *  List of my coding practice trails.
 *  Created On 13 May 2023
 */

import Link from 'next/link'
import { BadgeInfoIcon, ClapperboardIcon, ClockIcon, HandshakeIcon, PlayIcon, UsersRoundIcon, YoutubeIcon } from 'lucide-react'
import { getSlides } from '../utils/notion'
import Image from 'next/image'

export const revalidate = 60

export default async function Page() {
    const slides = await getSlides()

    return <>
        <main className='h-full flex flex-col justify-center items-center'>
            <div className='w-full max-w-6xl flex flex-col px-8'>
                {/* page header */}
                <div className='select-none relative mb-10 px-3 md:py-14 lg:py-14 xl:py-10'>
                    <h1 className='leading-normal text-center text-3xl font-medium sm:text-4xl sm:leading-normal xl:text-5xl xl:leading-normal'>
                        <span className='text-stone-400 xl:text-4xl'>Presentations I have created </span><br className='hidden md:inline' />
                        <span className='text-stone-100'>for 🥳 events and 👨‍💻 sessions </span><br className='hidden lg:inline' />
                        <span className='text-stone-400 xl:text-4xl '>where I'm the speaker.</span>
                    </h1>
                </div>

                <div className='flex flex-col space-y-12 md:space-y-20'>
                    {slides.map(slide => <article key={slide.title} className='flex flex-col'>
                        <Link href={slide.videoLink}>
                            <div className='relative flex -z-20'>
                                <div className='absolute inset-0 flex items-center justify-center md:hidden'>
                                    <div className='size-14 rounded-full text-black bg-white flex items-center justify-center shadow-xl'>
                                        <PlayIcon />
                                    </div>
                                </div>

                                <Image src={slide.imageUrl} alt={slide.title} width={1280} height={720} className='rounded-md md:max-w-lg' />
                            </div>
                        </Link>

                        <div className='py-6 px-4 flex flex-col space-y-4 md:rounded-xl md:bg-stone-800 md:border md:border-stone-700 md:-mt-14 md:ml-24 md:px-8 md:py-8 lg:px-10 lg:py-10'>
                            {/* event & session title */}
                            <div className='flex flex-col space-y-1'>
                                <p className='text-lg font-medium opacity-70'>{slide.for}</p>
                                <h3 className='font-medium text-2xl lg:text-3xl'>{slide.title}</h3>
                            </div>

                            {/* description */}
                            <div className='flex flex-col text-lg font-content'>
                                <p>{slide.description}</p>
                            </div>

                            {/* stats */}
                            <div className='flex items-center justify-between max-w-md md:justify-start md:space-x-8'>
                                <div className='flex items-center space-y-2 space-x-3'>
                                    <ClockIcon className='size-6' />
                                    <div className='flex flex-col justify-center'>
                                        <span className='font-semibold uppercase text-base'>{slide.duration.split(' ')[0]}</span>
                                        <span className='text-sm font-semibold uppercase opacity-70'>{slide.duration.split(' ').slice(1).join(' ')}</span>
                                    </div>
                                </div>
                                <div className='flex items-center space-y-2 space-x-3'>
                                    <UsersRoundIcon className='size-6' />
                                    <div className='flex flex-col justify-center'>
                                        <span className='font-semibold uppercase text-base'>{slide.audianceSize.split(' ')[0]}</span>
                                        <span className='text-sm font-semibold uppercase opacity-70'>{slide.audianceSize.split(' ').slice(1).join(' ')}</span>
                                    </div>
                                </div>
                                <div className='flex items-center justify-center space-y-2 space-x-3'>
                                    {slide.sessionType == 'Physical' ? <HandshakeIcon className='size-6' /> : <ClapperboardIcon className='size-6' />}
                                    <div className='flex flex-col justify-center'>
                                        <span className='font-semibold uppercase text-base'>{slide.sessionType}</span>
                                        <span className='text-sm font-semibold uppercase opacity-70'>session</span>
                                    </div>
                                </div>
                            </div>

                            {/* desktop actions */}
                            <div className='space-x-4 hidden md:flex'>
                                <button className='px-3.5 py-2 select-none flex justify-center space-x-2 items-center rounded-md font-sans font-medium transition-all text-black bg-white hover:bg-stone-200 transform-gpu active:scale-95'>
                                    <BadgeInfoIcon className='size-5' />
                                    <span>Know more</span>
                                </button>
                                <Link href={slide.videoLink} className='px-3.5 py-2 select-none flex justify-center space-x-2 items-center rounded-md font-sans font-medium transition-all bg-red-500 hover:bg-red-600 transform-gpu active:scale-95'>
                                    <YoutubeIcon className='size-5' />
                                    <span>Watch now</span>
                                </Link>
                            </div>
                        </div>

                        {/* mobile actions */}
                        <div className='flex flex-col md:hidden'>
                            <button className='px-3.5 py-2 select-none flex justify-center space-x-2 items-center rounded-md font-sans font-medium transition-all text-black bg-white hover:bg-stone-200 transform-gpu active:scale-95'>
                                <BadgeInfoIcon className='size-5' />
                                <span>Know more</span>
                            </button>
                        </div>
                    </article>)}
                </div>
            </div>
        </main>
    </>
}
