// `app/page.tsx` is the UI for the `/` URL
import About from "@/components/About"
import ContactRedux from "@/components/ContactRedux"
import Main from "@/components/Main"
import Navbar from "@/components/Navbar"
import Projects from "@/components/Projects"
import Skills from "@/components/Skills"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Alex Hughes | Fullstack Developer"
}

export default function Page() {
  return (
    <div>
    <Navbar />
    <Main />
    <About />
    <Skills />
    <Projects />
    <ContactRedux />
    </div>
  )
}