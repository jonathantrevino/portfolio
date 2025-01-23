import React from 'react'

const Badge = ({ title }: { title: string }) => {
  return (
    <div className='bg-custom-blue-badge !text-custom-blue-badge-text px-2 py-1 w-fit rounded-[4px] caption font-bold'>{title}</div>
  )
}

export default Badge
