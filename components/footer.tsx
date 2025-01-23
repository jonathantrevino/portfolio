import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='text-text-body flex justify-between px-8 py-4'>
      <p>Made by Jonathan Trevino</p>
      <ul className='flex gap-6 text-text-body leading-160'>
        <li><Link href='/projects'>Projects</Link></li>
        <li><Link href='/articles'>Articles</Link></li>
        <li><Link href='/creatives'>Creatives</Link></li>
      </ul>
      <Link href='https://github.com/jonathantrevino/portfolio' className='inline-block underline'>
        View website code
      </Link>
    </footer>
  )
}

export default Footer
