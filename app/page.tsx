/*
 *  List of my coding practice trails.
 *  Created On 13 May 2023
 */

import { getSlides } from '../utils/notion'
import { Slide } from '../components/Slide/index'
import { Mixpanel } from '../components/Mixpanel'

export const revalidate = 60

export default async function Page() {
    const slides = await getSlides()

    return <>
        <main className='h-full flex flex-col justify-center items-center'>
            <div className='w-full max-w-6xl flex flex-col px-8'>
                {/* page header */}
                <div className='select-none relative mb-10 px-3 pt-14 lg:py-14 xl:py-10'>
                    <h1 className='leading-normal text-center text-3xl font-medium sm:text-4xl sm:leading-normal xl:text-5xl xl:leading-normal'>
                        <span className='text-stone-400 xl:text-4xl'>Presentations I have created </span><br className='hidden md:inline' />
                        <span className='text-stone-100'>for 🥳 events and 👨‍💻 sessions </span><br className='hidden lg:inline' />
                        <span className='text-stone-400 xl:text-4xl '>where I'm the speaker.</span>
                    </h1>
                </div>

                <div className='flex flex-col space-y-12 relative md:space-y-20'>
                    {slides.map((slide, index) => <Slide index={index} key={slide.title} slide={slide} />)}
                </div>
            </div>
        </main>

        <Mixpanel />
    </>
}
