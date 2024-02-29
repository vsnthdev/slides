/*
 *  List of my coding practice trails.
 *  Created On 13 May 2023
 */

import Link from 'next/link'
import { EyeIcon } from 'lucide-react'
import { getSlides } from '../utils/notion';

export const revalidate = 60

export default async function Page() {
    const slides = await getSlides()

    return <>
        <main className='h-full flex flex-col justify-center items-center'>
            <div className='w-full max-w-5xl flex flex-col px-8'>
                {/* page header */}
                <div className='select-none relative mb-10 px-3 md:py-14 lg:py-14 xl:py-10'>
                    <h1 className='leading-normal text-center text-3xl font-medium sm:text-4xl sm:leading-normal xl:text-5xl xl:leading-normal'>
                        <span className='text-stone-400 xl:text-4xl'>Presentations I have created </span><br className='hidden md:inline' />
                        <span className='text-stone-100'>for 🥳 events and 👨‍💻 sessions </span><br className='hidden lg:inline' />
                        <span className='text-stone-400 xl:text-4xl '>where I'm the speaker.</span>
                    </h1>
                </div>

                {/* cards for different elements */}
                <div className='flex flex-col space-y-12'>
                    {slides.map(({ link, title, type }) => <article key={title} className='p-8 bg-stone-800 select-none rounded-xl shadow-2xl shadow-black/[0.1] border border-stone-600 transition-colors hover:border-stone-400'>
                        <div className='flex flex-col space-y-8 md:space-y-0 md:flex-row'>
                            <div className='flex flex-col space-y-2 md:flex-grow md:mr-4 xl:mr-8'>
                                <span className='text-sm font-black uppercase tracking-widest opacity-30'>{type}</span>
                                <h3 className='font-medium text-2xl text-stone-100'>{title}</h3>
                            </div>

                            <div className='flex md:flex-col md:justify-center'>
                                <div className='flex w-full space-x-3 md:justify-center'>
                                    <Link href={link} target='_blank' className='flex w-full justify-center font-medium items-center space-x-1 px-3 py-3 bg-stone-700 text-stone-200 rounded-md transition-all hover:text-white hover:bg-stone-600 active:scale-95 active:transform-gpu'>
                                        <EyeIcon className='h-5 w-5 md:h-5 md:w-5' />
                                        <span className='text-sm md:hidden'>Preview</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </article>)}
                </div>
            </div>
        </main>
    </>
}
