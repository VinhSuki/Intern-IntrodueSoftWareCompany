import { IMAGES } from '@/constant'
import { Button, Input } from 'antd'

const Banner = () => {
  return (
    <div className='relative z-20 bg-secondary h-screen'>
      <div className='absolute inset-0'>
        <img
          src={IMAGES.MAIN_OVERLAY.url}
          alt={IMAGES.MAIN_OVERLAY.name}
          className='h-full w-full object-cover absolute inset-0'
        />
        <img
          src={IMAGES.MAIN_BACKGROUND.url}
          alt={IMAGES.MAIN_BACKGROUND.name}
          className='h-full w-full object-cover absolute inset-0'
        />
      </div>
      <div className='absolute xl:px-48 lg:px-24 md:px-12 sm:px-8 px-4 top-1/2 transform -translate-y-1/2 w-full grid md:grid-cols-2 grid-cols-1 md:text-left text-center'>
        <div className='xl:space-y-8 lg:space-y-6 md:space-y-4 sm:space-y-6 space-y-4'>
          <h4 className='text-third font-bold xl:text-2xl lg:text-xl md:text-lg sm:text-xl text-lg'>
            Customised tech service
          </h4>
          <h1 className='text-white font-bold xl:text-7xl lg:text-6xl md:text-5xl sm:text-6xl text-3xl'>
            Innovative future of digital world
          </h1>
          <p className='text-white xl:text-base lg:text-sm md:text-xs sm:text-sm text-xs'>
            Nulla quis feugiat mi. Mauris tincidunt dui massa, non feugiat ex blandit vel. Nam lacinia dapibus nisi, ac
            convallis est tempor ac.{' '}
          </p>
          <div className='flex sm:flex-row flex-col xl:space-x-8 lg:space-x-7 md:space-x-6 sm:space-x-5 space-x-0 sm:space-y-0 space-y-4' >
            <Input placeholder='Your Email Address' className='sm:py-0 py-2'/>
            <Button size='large' type='primary'>
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
