import React from 'react'

function Icons({title,logo}) {
  return (
    <div className='flex p-4 m-4 hover:bg-gray-100 transition-all cursor-pointer'>
        <div>
        <img src={logo} className='h-14' alt="" />
        <p>{title}</p>
        </div>
    </div>
  )
}

export default Icons