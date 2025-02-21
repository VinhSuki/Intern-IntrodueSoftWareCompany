import { IMAGES } from '@/constant'
import { Carousel } from 'antd'

const RateSection = () => {
  return (
    <section className='bg-transparent xl:py-28 lg:py-24 md:py-20 sm:py-16 py-12 relative z-40'>
      <div className='xl:px-48 lg:px-24 md:px-12 sm:px-8 px-4 w-full grid grid-cols-1 lg:grid-cols-2 xl:gap-12 lg:gap-10 md:gap-12 sm:gap-10 gap-8'>
        <div
          className='xl:space-y-8 lg:space-y-7 md:space-y-8 sm:space-y-7 space-y-6'
          data-aos='fade-right'
          data-aos-anchor-placement='top-center'
        >
          <h4 className='text-third font-bold xl:text-xl lg:text-lg md:text-xl sm:text-lg text-base font-blinker'>
            Testimonial
          </h4>
          <h1 className='text-white font-bold xl:text-7xl lg:text-6xl md:text-7xl sm:text-6xl text-5xl font-blinker'>
            What our client say
          </h1>
          <Carousel dots={false} autoplay infinite slidesToScroll={1} className='xl:my-12 lg:my-10 md:my-12 sm:my-10 my-8'>
            {IMAGES.CAROUSEL_CLIENT.map((image, i) => (
              <div key={i} className='xl:px-4 lg:px-3 md:px-4 sm:px-3 px-2 space-y-4 shadow-2xl'>
                <em className='text-white xl:text-base lg:text-sm md:text-base sm:text-sm text-xs'>{image.content}</em>
                <div className='flex items-center gap-x-4'>
                  <img
                    src={image.url}
                    alt={image.name}
                    className='xl:w-16 xl:h-16 lg:w-14 lg:h-14 md:w-16 md:h-16 sm:w-14 sm:h-14 w-12 h-12 object-cover rounded-full'
                    loading='lazy'
                  />
                  <div className='font-blinker'>
                    <strong className='xl:text-base lg:text-sm md:text-base sm:text-sm text-xs text-third'>
                      {image.fullName}
                    </strong>
                    <p className='xl:text-sm lg:text-xs md:text-sm sm:text-xs text-2xs text-text'>{image.job}</p>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
          <p className='text-white xl:text-base lg:text-sm md:text-base sm:text-sm text-xs'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis,
            pulvinar dapibus leo.
          </p>
        </div>
        <div className='w-full'>
          <div className='lg:relative relative xl:h-[160%] xl:-top-[30%] lg:h-[150%] lg:-top-[25%]'>
            <img
              src={IMAGES.OUTSTANDING_CLIENT.url}
              alt={IMAGES.OUTSTANDING_CLIENT.name}
              loading='lazy'
              className='lg:absolute static w-full h-full left-0 top-0 object-cover rounded-md'
            />
            <div className='absolute xl:top-20 lg:top-16 md:top-20 sm:top-16 top-12 space-y-4 px-6'>
              <em className='text-white xl:text-base lg:text-sm md:text-base sm:text-sm text-xs'>
                ” Etiam eget eros ac enim iaculis sagittis. Maecenas eget sapien purus. Phasellus gravida viverra
                convallis “
              </em>
              <div className='font-blinker'>
                    <strong className='xl:text-3xl lg:text-2xl md:text-3xl sm:text-2xl text-xl text-third'>
                    Elsa Verina
                    </strong>
                    <p className='xl:text-base lg:text-sm md:text-base sm:text-sm text-xs text-text'>Designer</p>
                  </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RateSection
