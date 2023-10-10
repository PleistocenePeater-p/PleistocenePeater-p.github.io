import Image from 'next/image'
import React from 'react'
import novelnest from 'public/assets/projects/novelnest.png'
import kavorka from 'public/assets/projects/kavorka.png'

function Projects() {
  return (
    <div className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#31bab1]'>Projects</p>
            <h2 className='py-4'>What I've Built</h2>
            <div className='grid md:grid-cols-2 gap-8'>
                <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-300 rounded-xl p-4 group hover:bg-gradient-to-r from-[#31bab1] to-[#34ebdb]'>
                    <Image src={novelnest} alt='/' />
                </div>
                <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-300 rounded-xl p-4 group hover:bg-gradient-to-r from-[#31bab1] to-[#34ebdb]'>
                    <Image src={kavorka} alt='/' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects