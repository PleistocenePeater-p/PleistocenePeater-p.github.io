import Link from 'next/link'
import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
// import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

export default function Main() {
  return (
    <div id='home' className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div className='mx-8'>
                <p className='uppercase text-sm tracking-widest text-gray-600'>Let's build.</p>
                <h1 className='py-4 text-gray-700'>My name is Alex Hughes.</h1>
                <p className='mx-8'>I'm a freelance developer with a passion for efficiency and clean design. I use Next.js and Tailwind CSS to bring ideas to life, while constantly acquiring new skills to create better products.</p>
                <div className='flex items-center justify-center space-x-6 max-w-[330px] m-auto mt-4 py-4'>
                    <Link href='https://www.linkedin.com/in/alex-hughes-ah77/'>
                        <div className='rounded-full shadow-lg shadow-gray-300 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaLinkedinIn />
                        </div>
                    </Link>
                    <Link href='https://github.com/PleistocenePeater-p'>
                        <div className='rounded-full shadow-lg shadow-gray-300 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaGithub />
                        </div>
                    </Link>
                    <Link href='mailto:alexhughesresume@gmail.com'>
                        <div className='rounded-full shadow-lg shadow-gray-300 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <AiOutlineMail />
                        </div>
                    </Link>
                    {/* <div className='rounded-full shadow-lg shadow-gray-300 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <BsFillPersonLinesFill />
                    </div> */}
                </div>
            </div>
        </div>
    </div>
  )
}