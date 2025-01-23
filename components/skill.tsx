import React from 'react'

const Skill = ({ title }: { title: string }) => {
  return (
    <div className='p-1 bg-custom-blue-badge text-custom-blue-badge-text'>{title}</div>
  )
}

export default Skill
