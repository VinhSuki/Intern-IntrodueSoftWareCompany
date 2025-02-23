import clsx from 'clsx'
import getInTouch from '@/assets/images/get_in_touch.jpg'
// eslint-disable-next-line react/prop-types
const BackgroundContainer = ({ children, hasBackground = true, className = '' }) => {
  return (
    <div
      className={clsx('relative lg:pt-[50%] pt-0 z-20 bg-no-repeat bg-cover', className)}
      style={{ backgroundImage: `url(${getInTouch})` }}
    >
      <div className={`h-full w-full ${hasBackground ? 'bg-white/90' : 'bg-white'} absolute left-0 top-0`}></div>
      <div className='h-full w-full lg:absolute static left-0 top-0 text-black bg-transparent'>{children}</div>
    </div>
  )
}

export default BackgroundContainer
