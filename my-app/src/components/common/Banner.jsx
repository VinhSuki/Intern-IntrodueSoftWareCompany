import { IMAGES } from '@/constant'
import { Button, Input } from 'antd'
import { Link } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
const Banner = ({ type = 'banner' }) => {
  return (
    <div className='relative z-20 bg-secondary md:h-screen h-svh'>
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
        {type === '404' && (
          <div className='absolute inset-0 xl:space-y-8 lg:space-y-7 md:space-y-6 sm:space-y-5 space-y-4 flex items-center justify-center flex-col text-white'>
            <h1 className='uppercase font-bold xl:text-[200px] lg:text-[190px] md:text-[180px] sm:text-[170px] text-[160px] leading-none'>
              404
            </h1>
            <p className=' xl:text-base xl:max-w-[500px] lg:max-w-[450px] md:max-w-[400px] sm:max-w-[350px] max-w-[300px] text-center'>
              The page you are looking for might have been removed had its name changed or is temporarily unavailable
            </p>
            <Link to={'/'}>
              <Button size='large' type='primary'>
                Back to Home Page
              </Button>
            </Link>
          </div>
        )}
      </div>
      {type === 'banner' && (
        <div className='absolute xl:px-48 lg:px-24 md:px-12 sm:px-8 px-4 top-1/2 transform -translate-y-1/2 w-full grid md:grid-cols-2 grid-cols-1 md:text-left text-center'>
          <div className='xl:space-y-8 lg:space-y-6 md:space-y-4 sm:space-y-6 space-y-4'>
            <h4 className='text-third font-bold xl:text-2xl lg:text-xl md:text-lg sm:text-xl text-lg'>
              Customised tech service
            </h4>
            <h1 className='text-white font-bold xl:text-7xl lg:text-6xl md:text-5xl sm:text-6xl text-3xl'>
              Innovative future of digital world
            </h1>
            <p className='text-white xl:text-base lg:text-sm md:text-xs sm:text-sm text-xs'>
              Nulla quis feugiat mi. Mauris tincidunt dui massa, non feugiat ex blandit vel. Nam lacinia dapibus nisi,
              ac convallis est tempor ac.{' '}
            </p>
            <div className='flex sm:flex-row flex-col xl:space-x-8 lg:space-x-7 md:space-x-6 sm:space-x-5 space-x-0 sm:space-y-0 space-y-4'>
              <Input placeholder='Your Email Address' className='sm:py-0 py-2' />
              <Button size='large' type='primary'>
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Banner
