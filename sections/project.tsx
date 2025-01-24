import Card from '@/components/project/card'
import Image from 'next/image'
import React from 'react'

const projects = [
  {
    badge: true,
    image: '/icons/webportfolios.svg',
    title: 'webportfolios.dev',
    description: 'A directory of developer portfolios, browse for inspiration or upload your own to start building your online presence.',
    skills: ['Next.js', 'TypeScript', 'Tailwind', 'Firebase', 'AWS'],
    slug: '/projects/webportfolios.dev',
    live_link: 'https://webportfolios.dev?ref=jonathantrevino.com'

  }
]



const Project = () => {
  return (
    <section className='mx-15 px-6 space-y-6'>
      <div className='flex items-center gap-4'><Image src='/icons/folder.svg' width={57} height={50} alt='folder icon' /><h2 className='pt-3'>Projects</h2></div>
      {projects.map((project, index) =>
        <Card key={index} badge={project.badge} image={project.image} title={project.title} description={project.description} skills={project.skills} slug={project.slug} live_link={project.live_link} />

      )}
    </section>
  )
}

export default Project
