/*
 *  List of my coding practice trails.
 *  Created On 13 May 2023
 */

import { getSlides } from '../utils/notion'
import { Slide } from '../components/Slide/index'
import { Mixpanel } from '../components/Mixpanel'
import { Title } from './title'

export const revalidate = 60

export default async function Page() {
    const slides = await getSlides()

    return <>
        <main className='h-full flex flex-col justify-center items-center'>
            <div className='w-full max-w-6xl flex flex-col px-8'>
                <Title />

                <div className='flex flex-col space-y-12 relative md:space-y-20'>
                    {slides.map((slide, index) => <Slide index={index} key={slide.title} slide={slide} />)}
                </div>
            </div>
        </main>

        <Mixpanel />
    </>
}
