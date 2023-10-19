import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <>
      <Navbar />
      {/* <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'> */}
        <div className='pdf-container'>
          <iframe className='pdf-iframe mt-2' src='assets/pdfs/resume.pdf'/>
        </div>
      {/* </div> */}
      
    </>
  )
}

export default page

{/* <Document file={resumePdf}>
  <Page pageNumber={0}/>
</Document> */}
{/* <Link href='assets/pdfs/resume.pdf' locale={false} target='_blank' rel='noopener noreferrer'>Check</Link> */}
{/* <Viewer fileUrl='/assets/pdfs/resume.pdf'></Viewer> */}