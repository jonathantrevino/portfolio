import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className='px-15 py-30 flex justify-center'>
      <div className='mx-6 max-w-[528px] space-y-6'>
        <span className='space-y-4'>
          <span className='space-y-1'>
            <h1 className=''>Jonathan Trevino</h1>
            <p className='title'>A software engineer in web development</p>
          </span>
          <p className='text-text-body leading-160'>UTSA graduate, 2+ years of experience building apps that solve real problems, currently building</p>
        </span>
        <ul className="flex gap-2 text-text-body leading-100">
          <li><Link href="https://github.com/jonathantrevino" target='_blank' rel='noreferrer'><Image src='/icons/github.svg' width={40} height={40} alt='github icon' /></Link></li>
          <li><Link href="https://linkedin.com/in/jonathan-trevino" rel='noreferrer'><Image src='/icons/linkedin.svg' width={40} height={40} alt='linkedin icon' /></Link></li>
          <li><Link href="https://x.com/jtrevdev" rel='noreferrer'><Image src='/icons/x.svg' width={40} height={40} alt='x icon' /></Link></li>

        </ul>
      </div>
    </section>
  )
}

export default Hero
