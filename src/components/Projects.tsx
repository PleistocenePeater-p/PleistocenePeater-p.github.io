import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ProjectItem from './ProjectItem'
import novelnest from 'public/assets/projects/novelnest.png'
import kavorka from 'public/assets/projects/kavorka.png'

function Projects() {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#31bab1]">
          Projects
        </p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title='Novel Nest'
            backgroundImg={novelnest}
            builtWith='Python | Django | PostgreSQL'
            projectUrl="/novelnest"
          />
          <ProjectItem
            title='Kavorka'
            backgroundImg={kavorka}
            builtWith='MongoDB | Express | React | Node'
            projectUrl="/kavorka"
          />
        </div>
      </div>
    </div>
  );
}

export default Projects