import { IMAGES } from '@/constant'
import { Button } from 'antd'

const GetInTouch = () => {
  return (
    <div className='relative z-30 xl:h-[600px] lg:h-[550px] md:h-[500px] sm:h-[450px] h-[400px]'>
      <img
        src={IMAGES.GET_IN_TOUCH.url}
        alt={IMAGES.GET_IN_TOUCH.name}
        className='h-full w-full object-cover bg-center absolute left-0 top-0'
        loading='lazy'
      />
      <div className='h-full w-full bg-white/90 absolute left-0 top-0'></div>
      <div className='h-full w-full absolute left-0 top-0 text-black bg-transparent flex flex-col items-center justify-center font-blinker'>
        <h4 className='text-primary font-semibold xl:text-2xl lg:text-xl md:text-2xl sm:text-xl text-lg lg:mb-4 sm:mb-3 mb-2'>
        Like what you’ve seen? Get in touch to learn more
        </h4>
        <h1 className='text-secondary font-bold xl:text-8xl lg:text-7xl md:text-6xl sm:text-5xl text-4xl lg:mb-16 sm:mb-14 mb-12'>Interesting with us ?</h1>
        <Button
                className='lg:px-6 lg:py-5 sm:px-5 sm:py-4 px-4 py-3 font-semibold xl:text-lg lg:text-base '
                type='primary'
              >
               Get in touch now
              </Button>
      </div>
    </div>
  )
}

export default GetInTouch
