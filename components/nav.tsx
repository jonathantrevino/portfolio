import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const Nav = () => {
  return (
    <nav className='flex justify-between px-8 py-4'>
      <Link href='/' className='inline-block'>
        <Image src='/icons/icon.svg' width={30} height={25} alt='folder icon' />
      </Link>
      <ul className='flex gap-6 text-text-body leading-160'>
        <li><Link href='/projects'>Projects</Link></li>
        <li><Link href='/articles'>Articles</Link></li>
        <li><Link href='/creatives'>Creatives</Link></li>
      </ul>
    </nav>
  )
}

export default Nav
