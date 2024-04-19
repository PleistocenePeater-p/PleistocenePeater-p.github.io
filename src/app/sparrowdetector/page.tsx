import React from 'react'
import Navbar from "@/components/Navbar"
import Image from 'next/image'
import sparrow0Img from '../../../public/assets/projects/sparrow0.png'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'

const page = () => {
  return (
    <>
        <Navbar />
        <div className='w-full'>
            <div className='w-screen h-[50vh] relative'>
                <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/30 z-10' />
                <Image className='absolute z-1' layout='fill' objectFit='cover' src={sparrow0Img} alt='/' />
                <div className='absolute top-[50%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[50%] text-white z-10 p-2'>
                    <h2 className='py-2'>Sparrow Detector 1.0</h2>
                    <h3>YOLOv8 | Ultralytics | Streamlit</h3>
                </div>
            </div>

            <div className='mb-8 max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
                <div className='col-span-4'>
                    <p>Project</p>
                    <h2>Overview</h2>
                    <p className='my-8 mx-16'>
                        <p>
                        This is a proof of concept using two white label technologies for performing object detection. 
                        This project is to be combined with a later one, featuring an ESP32-CAM and servos.
                        </p><br/>
                        <p>
                        English House Sparrows (EHS) are a nuisance, thriving year-round in the variety of climates of North America. 
                        Like other invasives, they peck and destroy local bird eggs, impacting biodiversity, conservation efforts, and chicken egg-laying operations.
                        Area denial, involving netting and fencing, can be unfeasible. 
                        Deterring congregation by removing food sources tends to be the easiest and most rapid solution. 
                        However, in the case of attracting native populations and passively feeding livestock, where food is intentionally made available, or available to non-specific/similar species, this method is inapplicable.
                        </p><br/>
                        <p>
                        A tongue-in-cheek solution may be to involve automated deterrence via object recognition.
                        </p><br/>
                        <p>
                        Minimum viable product was to detect English House Sparrows and to do so expeditiously.
                        Ideally, I could quickly achieve MVP with white label platforms, with exposure to their inner workings: computer vision concepts, libraries, terminology, ML engineering principles, and any recent developments in these circles.
                        </p><br/>
                        <p>
                        After surveying available technologies, I aspirationally chose the recent YOLOv8 as the base computer vision model for its ease of use, Ultralytics for swiftly training and exporting a model, Flask for the Python backend, and Next.js as the frontend to deploy to Vercel.
                        <br /><br />
                        I trained (comically abbreviated) and exported an MVP model, then attempted to integrate Flask with Next.js.
                        Unfortunately, Next.js presently integrates with Python 3.9 and below.
                        Given the number of dependencies and in the interest of time, I dropped Flask and Next.js to search for a suitable web host for deployment.
                        Streamlit was a great fit as the platform specializes in hosting data apps and possesses built-in styling for quickly creating an upload interface.
                        </p><br/>
                        <p>
                        Much time was spent debugging, eavesdropping on StackOverflow, reading Flask, Next.js, Ultralytics, and OpenCV forums on Github, and absorbing the respective Docs and more to complete this project.
                        </p>
                    </p>
                    <Link href='https://sparrow-detector.streamlit.app/'><button className='px-8 py-2 mt-4 mr-8'>Site</button></Link>
                    {/* <Link href=''><button className='px-8 py-2 mt-4 '>GitHub</button></Link> */}
                </div>
                <div className='col-span-4 md:col-span-1'>
                    <div className='p-4 shadow-xl shadow-gray-400 rounded-xl'>
                        <p className='text-center font-bold pb-2'>Technologies</p>
                        <div className='grid grid-cols-3 md:grid-cols-1'>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1'/> YOLOv8
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1'/> Ultralytics
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1'/> Streamlit
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1'/> Python
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