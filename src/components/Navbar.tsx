"use client"
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import logo from '../../public/assets/logo2.png'
import Link from 'next/link'
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'

export default function Navbar() {
  const [nav, setNav] = useState(false)
  const [shadow, setShadow] = useState(false)
  const [navBg, setNavBg] = useState('#ffffff');
  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true)
      } else {
        setShadow(false)
      }
    }
    window.addEventListener('scroll', handleShadow)
  }, [])

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href='/'>
          <Image src={logo} alt="logo" width="150" height="62" />
        </Link>
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="/resume">
              <li className="ml-10 text-sm uppercase hover:border-b">Resume</li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Projects
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

{/* Mobile Menu */}
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ffffff] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href='/'>
                <Image src={logo} width="125" height="50" alt="/" />
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-300 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4 uppercase">Let's build.</p>
            </div>
          </div>
          <div className="py-4 flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li onClick={()=> setNav(false)} className="py-4 text-sm">Home</li>
              </Link>
              <Link href="/#about">
                <li onClick={()=> setNav(false)} className="py-4 text-sm">About</li>
              </Link>
              <Link href="/resume">
                <li onClick={()=> setNav(false)} className="py-4 text-sm">Resume</li>
              </Link>
              <Link href="/#skills">
                <li onClick={()=> setNav(false)} className="py-4 text-sm">Skills</li>
              </Link>
              <Link href="/#projects">
                <li onClick={()=> setNav(false)} className="py-4 text-sm">Projects</li>
              </Link>
              <Link href="/#contact">
                <li onClick={()=> setNav(false)} className="py-4 text-sm">Contact</li>
              </Link>
            </ul>
            <div className="pt-10">
              <p className="uppercase tracking-widest text-[#31bab1]">
                Connect
              </p>
              <div className="flex items-center justify-center space-x-8 my-4 w-full sm:w-[80%]">
                <Link href='https://www.linkedin.com/in/alex-hughes-ah77/'>
                  <div className="rounded-full shadow-lg shadow-gray-300 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                </Link>
                <Link href='https://github.com/PleistocenePeater-p'>
                  <div className="rounded-full shadow-lg shadow-gray-300 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaGithub />
                  </div>
                </Link>
                <Link href='mailto:alexhughesresume@gmail.com'>
                  <div className="rounded-full shadow-lg shadow-gray-300 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                    <AiOutlineMail />
                  </div>
                </Link>
                {/* <div className="rounded-full shadow-lg shadow-gray-300 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                  <BsFillPersonLinesFill />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}