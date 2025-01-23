import Image from 'next/image'
import React from 'react'

const Project = () => {
  return (
    <section className='mx-15 px-6 py-30'>
      <div className='flex items-center gap-4'><Image src='/icons/folder.svg' width={57} height={50} alt='folder icon' /><h2 className='pt-3'>Projects</h2></div>
    </section>
  )
}

export default Project
