import React from 'react'

// eslint-disable-next-line react/prop-types
const ShortDescription = ({ Icon, title, content }) => {
  return (
    <div className='flex gap-x-4 items-start'>
      <Icon className='text-start text-primary  xl:text-3xl lg:text-2xl md:text-3xl sm:text-2xl text-xl ' />
      <div className='flex-1 items-center'>
        <h4 className='font-semibold text-primary xl:text-xl lg:text-lg md:text-xl sm:text-base text-sm'>{title}</h4>
        <p className='text-text xl:text-base lg:text-sm md:text-base sm:text-sm text-xs'>{content}</p>
      </div>
    </div>
  )
}

export default ShortDescription
