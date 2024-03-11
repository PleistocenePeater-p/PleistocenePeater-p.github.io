import React from 'react'
import Navbar from "@/components/Navbar"
import Image from 'next/image'
import scoopersImg from 'public/assets/projects/scoopers.png'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'

const page = () => {
  return (
    <>
        <Navbar />
        <div className='w-full'>
            <div className='w-screen h-[50vh] relative'>
                <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
                <Image className='absolute z-1' layout='fill' objectFit='cover' src={scoopersImg} alt='/' />
                <div className='absolute top-[50%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[50%] text-white z-10 p-2'>
                    <h2 className='py-2'>Scooper Mcquades</h2>
                    <h3>Next.js | Tailwind CSS</h3>
                </div>
            </div>

            <div className='mb-8 max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
                <div className='col-span-4'>
                    <p>Project</p>
                    <h2>Overview</h2>
                    <p className='mt-2'>
                        <p>
                        Scooper McQuades is an ice cream shop, a coffee shop, and a soup and sandwich shop all in one. Carefully cultivating a family-friendly atmosphere, Scoopers sees a cross-section of our town, often hosting birthday parties in the Arcade.
                        Having just opened in 2022, this business relied exclusively on Facebook for web presence. 
                        I offered to create a single-page site, build it with Next.js, and host it for free on Vercel as my first freelance website.
                        </p><br/>
                        <p>
                        Client meetings were conducted frequently to deliver updates, conduct A/B testing, and guage preferences throughout production.
                        React Carousel was chosen as a vehicle for displaying the client's seasonal announcements produced with Canva.
                        Calendly's JavaScript widget was selected for scheduling reservations, interacting directly with the client's email.
                        </p><br/>
                        <p>
                        This project saw more usage of Next's "use client", React's useEffect, and useState hooks - mostly for toggling mobile functionality.
                        Next Image's attributes and Image StaticImageData were important to understand to get the Carousel functioning.
                        </p><br/>
                        <p>
                        This project saw extensive use of CSS image parallaxes, flexboxes, grid columns; Tailwind's media breakpoints, inline styling; and ternaries for mobile-friendly styling.
                        Pexels and Unsplash were extremely useful for obtaining mock-up images currently on the site.
                        </p><br/>
                        <p>
                        I found using a Greenspace component for compartmentalized mock-ups to be fast and effective. 
                        I also learned to habitually bookmark links, as I frequently referenced the tech stack's documentation.
                        </p>
                    </p>
                    <Link href='https://scooper-mcquades.vercel.app/'><button className='px-8 py-2 mt-4 mr-8'>Site</button></Link>
                    {/* <Link href=''><button className='px-8 py-2 mt-4 '>GitHub</button></Link> */}
                </div>
                <div className='col-span-4 md:col-span-1'>
                    <div className='p-4 shadow-xl shadow-gray-400 rounded-xl'>
                        <p className='text-center font-bold pb-2'>Technologies</p>
                        <div className='grid grid-cols-3 md:grid-cols-1'>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1'/> Next.js
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1'/> Tailwind CSS
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1'/> React
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1'/> TypeScript
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1'/> HTML5
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1'/> CSS3
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1'/> Calendly
                            </p>
                        </div>
                    </div>
                </div>
                <Link href='/#projects'>
                    <p className='underline cursor-pointer'>Home</p>
                </Link>
            </div>
        </div>
    </>
  )
}

export default page