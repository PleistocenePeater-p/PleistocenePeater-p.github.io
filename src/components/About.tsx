import React from 'react'
import Image from 'next/image'
import pfp from '../../public/assets/pfp.jpeg'
import Link from 'next/link'

export default function About() {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#31bab1]'>About</p>
                <h2 className='py-4'>Who I Am</h2>
                <p className='py-2 text-gray-600'>Raised on sci-fi, I grew up with an enthusiasm for technology, and later an admiration for computer science. My recent role as the Business Development Director for my local Chamber of Commerce affirmed the value of "automating the boring stuff". It was there I found the crucial link between my lifelong passion for impressive engineering feats and real-world business challenges I confronted with business owners.</p>
                <Link href='/resume'>
                  <p className='py-2 text-gray-600 text-decoration-line: underline'>
                    <Link href='/resume'>
                      Click here to see my resume.
                    </Link>
                  </p>
                </Link>
            </div>
            <div className=' h-auto m-auto shadow-l shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <Image src={pfp} alt='' className='rounded-xl'/>
            </div>
        </div>
    </div>
  )
}