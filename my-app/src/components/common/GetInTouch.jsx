import BackgroundContainer from '@/components/common/BackgroundContainer'
import { Button } from 'antd'

const GetInTouch = () => {
  return (
    <BackgroundContainer className='lg:py-0 md:py-20 sm:py-16 py-12'>
      <div className='flex flex-col items-center justify-center h-full font-blinker'>
        <h4 className='text-primary font-semibold xl:text-2xl lg:text-xl md:text-2xl sm:text-xl text-lg lg:mb-4 sm:mb-3 mb-2'>
          Like what you’ve seen? Get in touch to learn more
        </h4>
        <h1 className='text-secondary font-bold xl:text-8xl lg:text-7xl md:text-6xl sm:text-5xl text-4xl lg:mb-16 sm:mb-14 mb-12'>
          Interesting with us ?
        </h1>
        <Button
          className='lg:px-6 lg:py-5 sm:px-5 sm:py-4 px-4 py-3 font-semibold lg:text-lg sm:text-base text-sm'
          type='primary'
        >
          Get in touch now
        </Button>
      </div>
    </BackgroundContainer>
  )
}

export default GetInTouch
