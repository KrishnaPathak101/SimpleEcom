import React from 'react'

const categories = [
  'Ayurvedic Medicine',
  'Foods',
  'Nutraceuticals',
  'Personal care',
  'Health Care',
  'Paridhan',
  'About Us',
  'Credit Card',
]

const Categories = () => (
  <div className='bg-green-500 flex items-center justify-between p-5'>
    <button className='bg-white w-[170px] flex items-center justify-between px-5 py-1 rounded-md'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className='size-6'
      >
        <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5' />
      </svg>
      All Categories
    </button>
    <ul className='flex gap-3'>
      {categories.map((category) => (
        <li key={category} className='text-white'>{category}</li>
      ))}
    </ul>
  </div>
)

export default Categories
