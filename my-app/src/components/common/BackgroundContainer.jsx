import clsx from 'clsx'

// eslint-disable-next-line react/prop-types
const BackgroundContainer = ({ children, hasBackground = true ,className = ''}) => {
  return (
    <div className={clsx('relative bg-background-container lg:pt-50% pt-0 z-30 bg-no-repeat bg-cover',className)}>
      <div className={`h-full w-full ${hasBackground ? 'bg-white/90' : 'bg-white'} absolute left-0 top-0`}></div>
      <div className='h-full w-full lg:absolute static left-0 top-0 text-black bg-transparent'>{children}</div>
    </div>
  )
}

export default BackgroundContainer
