import React from 'react'
import img1 from '../images/img1.png'
import bgimg from '../images/bgimg.png'

export default function Introduction() {


    return (
        <section className=''>

            {/* <div className="absolute inset-0 bg-[url('./images/bgimg.png')] bg-[length:100%_100%] bg-no-repeat blur-xs scale-110"></div> */}
       

            <section className="items-center md:flex md:flex-row md:gap-10 relative z-10">
                <article>
                    <h2 className='text-amber-600 font-semibold'>PASSION-STRENGTH-RESILIENCE</h2>
                    <h1 className='text-white'>
                        <p className='text-2xl'>Hi! I'm</p>
                        <p className='text-[#F2B95E] text-2xl font-semibold'> Manali Jadhav</p>
                        <p className='text-white hidden md:flex'>A dedicated wrestling athlete representing strength,
                            discipline and determination on and off the mat.</p>
                    </h1>
                </article>

                <article className='hidden md:flex w-1/2 flex justify-end'>
                    <img src={img1} className='h-1/2 w-1/2'></img>
                </article>
            </section>

            <section className='md:hidden mt-5 '>
                <article className=''>
                    <p className='text-white'>A dedicated wrestling athlete representing strength,
                        discipline and determination on and off the mat.</p>

                </article>
                <article className='md:m-0 flex justify-end items-end overflow-hidden'>
                    <img src={img1} className=' h-[250px] w-xl  drop-shadow-lg border border-r-red-600 border-l-blue-900'></img>
                </article>
            </section>
        </section>
    )
}
