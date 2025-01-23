import React from 'react'
import Badge from '../badge'
import Image from 'next/image'
import Skill from '../skill';
import Link from 'next/link';

const skills = ['Next.js', 'TypeScript', 'Tailwind', 'Firebase', 'AWS'];

const Card = () => {
  return (
    <div className='border border-card-stroke px-8 py-6 rounded-lg space-y-5'>
      <div className='space-y-8'>
        <Badge title={'MOST POPULAR'} />
        <div className='space-y-2'>
          <span className='flex items-center gap-2'>
            <Image src='/icons/webportfolios.svg' width={28} height={28} alt='webportfolios.dev icon' />
            <h5>webportfolios.dev</h5>
          </span>
          <p className='text-text-body leading-160'>A directory of developer portfolios, browse for inspiration or upload your own to start building your online presence.</p>
          <div className='flex flex-wrap gap-2'>{
            skills.map((skill, index) =>
              <Skill key={index} title={skill} />
            )
          }</div>
        </div>
      </div>
      <div className='flex gap-4 items-center'>
        <button className='bg-custom-blue-button text-custom-blue-button-text p-2 rounded-[4px]'>Read More</button>
        <Link href='https://webportfolios.dev?ref=jonathantrevino.com' target='_blank' rel='noreferrer'>
          <Image src='/icons/external.svg' width={24} height={24} alt='exteral icon' />
        </Link>
      </div>
    </div>
  )
}

export default Card
