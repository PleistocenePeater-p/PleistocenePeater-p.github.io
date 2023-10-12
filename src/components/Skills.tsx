import Image from 'next/image'
import React from 'react'
import aws from '../../public/skills/aws.png'
import css from '../../public/skills/css.png'
import django from '../../public/skills/django.png'
import express from '../../public/skills/express.png'
import figma from '../../public/skills/figma.png'
import github from '../../public/skills/github1.png'
import html from '../../public/skills/html.png'
import js from '../../public/skills/javascript.png'
import mongo from '../../public/skills/mongo.png'
import next from '../../public/skills/nextjs.png'
import node from '../../public/skills/node.png'
import pgsql from '../../public/skills/postgresql.png'
import prisma from '../../public/skills/prisma.png'
import python from '../../public/skills/python.png'
import react from '../../public/skills/react.png'
import tailwind from '../../public/skills/tailwind.png'

const Skills = () => {
  return (
    <div className='w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='text-xl tracking-widest uppercase text-[#31bab1]'>Skills</p>
            <h2 className='py-4'>What I Use</h2>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
{/* Next */}
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={next} width={64} height={64} alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Next.js</h3>
                        </div>
                    </div>
                </div>
{/* Tailwind */}
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={tailwind} width={64} height={64} alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Tailwind CSS</h3>
                        </div>
                    </div>
                </div>
{/* Prisma */}
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={prisma} width={64} height={64} alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Prisma</h3>
                        </div>
                    </div>
                </div>
{/* Figma */}
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={figma} width={64} height={64} alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Figma</h3>
                        </div>
                    </div>
                </div>
{/* Javascript */}
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={js} width={64} height={64} alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>JavaScript</h3>
                        </div>
                    </div>
                </div>
{/* html */}
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={html} width={64} height={64} alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>HTML 5</h3>
                        </div>
                    </div>
                </div>
{/* CSS */}
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={css} width={64} height={64} alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>CSS 3</h3>
                        </div>
                    </div>
                </div>
{/* github */}
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={github} width={64} height={64} alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>GitHub</h3>
                        </div>
                    </div>
                </div>
{/* Mongo */}
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={mongo} width={64} height={64} alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>MongoDB</h3>
                        </div>
                    </div>
                </div>
{/* Express */}
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={express} width={64} height={64} alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Express</h3>
                        </div>
                    </div>
                </div>
{/* React */}
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={react} width={64} height={64} alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>React</h3>
                        </div>
                    </div>
                </div>
{/* Node */}
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={node} width={64} height={64} alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Node.js</h3>
                        </div>
                    </div>
                </div>
{/* Python */}
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={python} width={64} height={64} alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Python</h3>
                        </div>
                    </div>
                </div>
{/* Django */}
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={django} width={64} height={64} alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Django</h3>
                        </div>
                    </div>
                </div>
{/* PostgreSQL */}
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={pgsql} width={64} height={64} alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>PostgreSQL</h3>
                        </div>
                    </div>
                </div>
{/* AWS */}
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={aws} width={64} height={64} alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Amazon Web Services</h3>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Skills