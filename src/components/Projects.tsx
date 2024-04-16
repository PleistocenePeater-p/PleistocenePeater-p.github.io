import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ProjectItem from './ProjectItem'
import novelnest from '../../public/assets/projects/novelnest.png'
import kavorka from '../../public/assets/projects/kavorka.png'
import scoopers from '../../public/assets/projects/scoopers.png'
import sparrow from '../../public/assets/projects/sparrow.png'

function Projects() {
  return (
    <div id='projects' className="w-full">
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
            builtWith='MongoDB | Express | Node'
            projectUrl="/kavorka"
          />
          <ProjectItem
            title='Scooper Mcquades'
            backgroundImg={scoopers}
            builtWith='Next.js | React | Tailwind CSS'
            projectUrl="/scoopers"
          />
          <ProjectItem
            title='Sparrow Detector 1.0'
            backgroundImg={sparrow}
            builtWith='Python | YOLOv8 | Ultralytics | Streamlit'
            projectUrl="/sparrowdetector"
          />
        </div>
      </div>
    </div>
  );
}

export default Projects