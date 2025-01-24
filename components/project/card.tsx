import React from 'react'
import Badge from '../badge'
import Image from 'next/image'
import Skill from '../skill';
import Link from 'next/link';


const Card = ({ badge, image, title, description, skills, slug, live_link }: { badge: boolean, image: string, title: string, description: string, skills: string[], slug: string, live_link: string }) => {
  return (
    <div className='border border-card-stroke px-8 py-6 rounded-lg space-y-5'>
      <div className='space-y-8'>
        {badge &&
          <Badge title={'MOST POPULAR'} />
        }
        <div className='space-y-2'>
          <span className='flex items-center gap-2'>
            <Image src={image} width={28} height={28} alt={`${title} icon`} />
            <h5>{title}</h5>
          </span>
          <p className='text-text-body leading-160'>{description}</p>
          <div className='flex flex-wrap gap-2'>{
            skills.map((skill, index) =>
              <Skill key={index} title={skill} />
            )
          }</div>
        </div>
      </div>
      <div className='flex gap-4 items-center'>
        <Link href={slug} className='bg-custom-blue-button text-custom-blue-button-text p-2 rounded-[4px]'>Read More</Link>
        <Link href={live_link} target='_blank' rel='noreferrer'>
          <Image src='/icons/external.svg' width={24} height={24} alt='exteral icon' />
        </Link>
      </div>
    </div>
  )
}

export default Card
