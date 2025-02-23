import { IMAGES } from '@/constant'
import { MacCommandOutlined } from '@ant-design/icons'
import { Carousel } from 'antd'

// eslint-disable-next-line react/prop-types
const BusinessSection = ({ className = '' }) => {
  return (
    <section className={className}>
      <div className='xl:px-48 lg:px-24 md:px-12 sm:px-8 px-4 h-full xl:space-y-16 lg:space-y-14 md:space-y-16 sm:space-y-14 space-y-12'>
        <div className='gap-2 h-full grid grid-cols-1 lg:grid-cols-10 xl:space-x-6 lg:space-x-5 space-x-0 lg:space-y-0 md:space-y-5 space-y-4'>
          <div className='col-span-3'>
            <div className='font-blinker h-full  flex flex-col justify-center xl:space-y-6 lg:space-y-5 md:space-y-6 sm:space-y-5 space-y-4'>
              <h4 className='text-primary font-semibold xl:text-2xl lg:text-xl md:text-2xl sm:text-xl text-lg'>
                We do the best for you
              </h4>
              <h1 className='text-secondary font-bold xl:text-6xl lg:text-5xl md:text-6xl sm:text-5xl text-4xl'>
                Your business is our concern
              </h1>
            </div>
          </div>
          <div className='col-span-7 flex items-end'>
            <p className='text-text xl:text-base lg:text-sm md:text-base sm:text-sm text-xs'>
              Donec vulputate, enim a scelerisque laoreet, nunc libero tincidunt est, at vehicula odio metus non tortor.
              Proin laoreet aliquam augue consectetur pharetra. Donec eleifend quam id porta condimentum. Aenean
              vehicula sit amet erat in tempus. Morbi eget consequat erat. Donec convallis felis eu elit pellentesque
              sagittis vitae a ipsum.
            </p>
          </div>
        </div>
        <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-4 sm:gap-3 gap-2'>
          <div data-aos='fade-right'>
            <div className='flex lg:gap-x-6 sm:gap-x-5 gap-x-4 items-center lg:p-4 sm:p-3 p-2 transition-all ease-linear'>
              <MacCommandOutlined className='text-start text-primary  xl:text-4xl lg:text-3xl md:text-4xl sm:text-3xl text-2xl ' />
              <div className='flex-1 items-center lg:space-y-4 sm:space-y-3 space-y-2'>
                <h4 className='font-semibold text-secondary xl:text-xl lg:text-lg md:text-xl sm:text-base text-sm'>
                  427 Project Completed
                </h4>
                <p className='text-text xl:text-base lg:text-sm md:text-base sm:text-sm text-xs'>
                  Nam ac mi ac eros luctus laoreet. In lorem dui, tempor quis turpis vitae, blandit fringilla nisl.
                  Aenean sagittis tempus sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                  posuere cubilia curae.
                </p>
              </div>
            </div>
            <div className='flex lg:gap-x-6 sm:gap-x-5 gap-x-4 items-center lg:p-4 sm:p-3 p-2 transition-all ease-linear'>
              <MacCommandOutlined className='text-start text-primary  xl:text-4xl lg:text-3xl md:text-4xl sm:text-3xl text-2xl ' />
              <div className='flex-1 items-center lg:space-y-4 sm:space-y-3 space-y-2'>
                <h4 className='font-semibold text-secondary xl:text-xl lg:text-lg md:text-xl sm:text-base text-sm'>
                  427 Project Completed
                </h4>
                <p className='text-text xl:text-base lg:text-sm md:text-base sm:text-sm text-xs'>
                  Nam ac mi ac eros luctus laoreet. In lorem dui, tempor quis turpis vitae, blandit fringilla nisl.
                  Aenean sagittis tempus sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                  posuere cubilia curae.
                </p>
              </div>
            </div>
            <div className='flex lg:gap-x-6 sm:gap-x-5 gap-x-4 items-center lg:p-4 sm:p-3 p-2 transition-all ease-linear'>
              <MacCommandOutlined className='text-start text-primary  xl:text-4xl lg:text-3xl md:text-4xl sm:text-3xl text-2xl ' />
              <div className='flex-1 items-center lg:space-y-4 sm:space-y-3 space-y-2'>
                <h4 className='font-semibold text-secondary xl:text-xl lg:text-lg md:text-xl sm:text-base text-sm'>
                  427 Project Completed
                </h4>
                <p className='text-text xl:text-base lg:text-sm md:text-base sm:text-sm text-xs'>
                  Nam ac mi ac eros luctus laoreet. In lorem dui, tempor quis turpis vitae, blandit fringilla nisl.
                  Aenean sagittis tempus sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                  posuere cubilia curae.
                </p>
              </div>
            </div>
            <div className='flex lg:gap-x-6 sm:gap-x-5 gap-x-4 items-center lg:p-4 sm:p-3 p-2 transition-all ease-linear'>
              <MacCommandOutlined className='text-start text-primary  xl:text-4xl lg:text-3xl md:text-4xl sm:text-3xl text-2xl ' />
              <div className='flex-1 items-center lg:space-y-4 sm:space-y-3 space-y-2'>
                <h4 className='font-semibold text-secondary xl:text-xl lg:text-lg md:text-xl sm:text-base text-sm'>
                  427 Project Completed
                </h4>
                <p className='text-text xl:text-base lg:text-sm md:text-base sm:text-sm text-xs'>
                  Nam ac mi ac eros luctus laoreet. In lorem dui, tempor quis turpis vitae, blandit fringilla nisl.
                  Aenean sagittis tempus sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                  posuere cubilia curae.
                </p>
              </div>
            </div>
          </div>
          <div className='xl:space-y-6 lg:space-y-5 md:space-y-6 sm:space-y-5 space-y-4' data-aos='fade-left'>
            <h1 className='text-secondary font-bold xl:text-6xl lg:text-5xl md:text-6xl sm:text-5xl text-4xl'>
              Our project
            </h1>
            <p className='text-text xl:text-base lg:text-sm md:text-base sm:text-sm text-xs'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis,
              pulvinar dapibus leo.
            </p>
            <Carousel
              dots={false}
              autoplay
              infinite
              slidesToScroll={1}
              className='xl:my-12 lg:my-10 md:my-12 sm:my-10 my-8'
            >
              {IMAGES.CAROUSEL_PROJECT.map((image, i) => (
                <div key={i} className='shadow-2xl'>
                  <img src={image.url} alt={image.name} className='object-cover w-full h-full rounded-md' />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BusinessSection
