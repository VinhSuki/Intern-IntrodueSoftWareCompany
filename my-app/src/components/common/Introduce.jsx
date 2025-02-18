import { IMAGES } from '@/constant'
import { Tag } from 'antd'

// eslint-disable-next-line react/prop-types
const Introduce = ({ className = '', title = '', shortContent = '', description = '', children, tag = '' }) => {
  return (
    <section className={className}>
      <div className='xl:px-48 lg:px-24 md:px-12 sm:px-8 px-4 lg:py-0 md:py-20 sm:py-16 py-12 h-full'>
        <div className='h-full grid grid-cols-1 md:grid-cols-2 xl:space-x-6 lg:space-x-5 md:space-x-4 space-x-0 md:space-y-0 sm:space-y-5 space-y-4'>
          <div className='relative lg:h-1/2 md:h-full sm:h-[200px] h-[150px] top-1/2 transform -translate-y-1/2'>
            <img
              src={IMAGES.INTRODUCE_1.url}
              alt={IMAGES.INTRODUCE_1.name}
              className='absolute right-0 object-cover top-0 md:h-3/4 md:w-3/4 h-full w-full'
            />
            <img
              src={IMAGES.INTRODUCE_2.url}
              alt={IMAGES.INTRODUCE_2.name}
              className='absolute left-0 object-cover bottom-0 h-3/4 w-3/4 md:block hidden'
            />
            {tag && (
              <Tag
                className='xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs font-semibold z-50 absolute xl:top-5 lg:top-4 md:top-3 sm:top-4 top-3 xl:p-2 lg:p-1.5 md:p-1 sm:p-1.5 p-1 font-blinker'
                color='blue'
                data-aos='fade-right'
              >
                {tag}
              </Tag>
            )}
          </div>
          <div data-aos='fade-left'>
            <div className='font-blinker h-full  flex flex-col justify-center xl:space-y-6 lg:space-y-5 md:space-y-4 sm:space-y-5 space-y-4'>
              <h4 className='text-primary font-semibold xl:text-xl lg:text-lg md:text-base sm:text-lg text-base'>{title}</h4>
              <h1 className='text-secondary font-bold xl:text-5xl lg:text-4xl md:text-3xl sm:text-4xl text-3xl'>{shortContent}</h1>
              <p className='text-text xl:text-base lg:text-sm md:text-xs sm:text-sm text-xs'>{description}</p>
              {children}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Introduce
