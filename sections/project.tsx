import Card from '@/components/project/card'
import Image from 'next/image'
import React from 'react'

const Project = () => {
  return (
    <section className='mx-15 px-6 space-y-6'>
      <div className='flex items-center gap-4'><Image src='/icons/folder.svg' width={57} height={50} alt='folder icon' /><h2 className='pt-3'>Projects</h2></div>
      <Card />
    </section>
  )
}

export default Project
