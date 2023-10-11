// `app/page.tsx` is the UI for the `/` URL
import About from "@/components/About"
import Contact from "@/components/Contact"
import Main from "@/components/Main"
import Navbar from "@/components/Navbar"
import Projects from "@/components/Projects"
import Skills from "@/components/Skills"
import Head from "next/head"
export default function Page() {
  return (
    <div>
      <Head>
        <title>Alex Hughes | Fullstack Developer</title>
      </Head>

    <Navbar />
    <Main />
    <About />
    <Skills />
    <Projects />
    <Contact />
    </div>
  )
}