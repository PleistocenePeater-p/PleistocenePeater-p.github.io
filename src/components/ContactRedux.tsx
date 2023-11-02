import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { AiOutlineMail } from "react-icons/ai";

export default function ContactRedux() {
  return (
    <div id="contact" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#31bab1]">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>

        <div className="w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4 flex items-center">
          <div className="lg:p-4 h-full mx-auto">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <img
                  className="rounded-xl max-h-[400px]"
                  src="https://images.unsplash.com/photo-1529336953128-a85760f58cb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
                  alt="/"
                />
              </div>

              <div className="mt-8">
                <h2 className="py-2">Alex Hughes</h2>
                <p className="text-xl">Freelance Next.js Developer</p>
                <p className="mt-6 py-2">
                  Whether you're seeking a full-time team member or require
                  contract-based support, I can help you achieve your goals with
                  efficient and responsive solutions.
                </p>
                <p className="py-2">
                  Whether you're looking to build a new project from scratch or
                  enhance an existing one, I'm ready to bring your ideas to
                  life.
                </p>
              </div>
            </div>

            <div>
              <p className="uppercase pt-8 text-center text-xl">Connect</p>
              <div className="flex items-center justify-center space-x-6 py-4">
                <Link href="https://www.linkedin.com/in/alex-hughes-ah77/">
                  <div className="rounded-full shadow-lg shadow-gray-300 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                </Link>
                <Link href="https://github.com/PleistocenePeater-p">
                  <div className="rounded-full shadow-lg shadow-gray-300 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <FaGithub />
                  </div>
                </Link>
                <Link href="mailto:alexhughesresume@gmail.com">
                  <div className="rounded-full shadow-lg shadow-gray-300 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <AiOutlineMail />
                  </div>
                </Link>

                {/* <div className="rounded-full shadow-lg shadow-gray-300 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                  <BsFillPersonLinesFill />
                </div> */}
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-300 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-[#31bab1]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
