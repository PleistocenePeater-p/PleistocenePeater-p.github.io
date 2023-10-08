// `app/page.tsx` is the UI for the `/` URL
import About from "@/components/About"
import Main from "@/components/Main"
import Navbar from "@/components/Navbar"
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
    </div>
  )
}