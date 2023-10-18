import React from 'react'
import Navbar from "@/components/Navbar"
import Image from 'next/image'
import nnImg from 'public/assets/projects/novelnest.png'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'

const page = () => {
  return (
    <>
        <Navbar />
        <div className='w-full'>
            <div className='w-screen h-[50vh] relative'>
                <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
                <Image className='absolute z-1' layout='fill' objectFit='cover' src={nnImg} alt='/' />
                <div className='absolute top-[50%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[50%] text-white z-10 p-2'>
                    <h2 className='py-2'>Novel Nest</h2>
                    <h3>Python | Django | PostgreSQL</h3>
                </div>
            </div>

            <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
                <div className='col-span-4'>
                    <p>Project</p>
                    <h2>Overview</h2>
                    <p className='mt-2'>Kavorka was designed for remote strength and conditioning coaches to assign their clients to custom, individual workouts.
                        This was an early project in my exposure to JavaScript, Express and Node, and CRUD principles. This is also where I first learned how to use Google OAuth to authenticate users and conditionally render objects on a page.
                        Kavorka was a fun opportunity to explore Google Fonts and CSS keyframes, which prompted an enduring interest in (and respect for) good styling and UX.
                    </p>
                    <Link href='https://mauve-piranha-fez.cyclic.app/'><button className='px-8 py-2 mt-4 mr-8'>App</button></Link>
                    <Link href='https://github.com/PleistocenePeater-p/SEI-Project-2'><button className='px-8 py-2 mt-4 '>GitHub</button></Link>
                </div>
                <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                    <div className='p-2'>
                        <p className='text-center font-bold pb-2'>Technologies</p>
                        <div className='grid grid-cols-3 md:grid-cols-1'>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1'/> MongoDB
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1'/> Express
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1'/> Node.js
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1'/> JavaScript
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1'/> HTML5
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1'/> CSS3
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1'/> Google OAuth
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