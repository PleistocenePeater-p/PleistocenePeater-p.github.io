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

            <div className='mb-8 max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
                <div className='col-span-4'>
                    <p>Project</p>
                    <h2>Overview</h2>
                    <p className='mt-2'>Novel Nest is an app for e-book readers in need of a follow-up book. Users sign up and subscribe to a genre of their choice by submitting credit card info.
                        Novel Nest was a collaboration by three remote developers, employing Python, Django, and PostgreSQL. I enjoyed using <span className='underline'><Link href='https://materializecss.com/'>Materialize CSS</Link></span> for front-end styling and coordinated Django migrations into our PostgreSQL database.
                        Google Books API makes this app possible, allowing for much functionality and potential refactoring.
                        Our team maintained clear communication throughout the development life cycle and completed this project ahead of schedule.
                    </p>
                    <Link href='https://novelnest.fly.dev/'><button className='px-8 py-2 mt-4 mr-8'>App</button></Link>
                    <Link href='https://github.com/egwilborn/project-4-novel-nest'><button className='px-8 py-2 mt-4 '>GitHub</button></Link>
                </div>
                <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                    <div className='p-2'>
                        <p className='text-center font-bold pb-2'>Technologies</p>
                        <div className='grid grid-cols-3 md:grid-cols-1'>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1'/> Python
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1'/> Django
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1'/> PostgreSQL
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1'/> HTML5
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1'/> CSS3
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1'/> Materialize CSS
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