import { IMAGES } from '@/constant'
import { Button, Carousel } from 'antd'

const ClientSection = () => {
  return (
    <div className='xl:h-[300px] lg:h-[250px] h-full bg-transparent lg:py-0 md:py-12 sm:py-8 py-4 xl:px-48 lg:px-24 md:px-12 sm:px-8 px-4 relative z-30'>
      <div className='relative w-full'>
        <div className='left-0 right-0 lg:absolute static xl:-top-28 lg:-top-24 top-0 grid lg:grid-cols-5 grid-cols-1 xl:h-[300px] lg:h-[250px] h-full xl:gap-4 lg:gap-3 gap-0'>
          <div className='lg:col-span-2 col-span-1 lg:space-y-0 md:space-y-6 sm:space-y-5 space-y-4 flex flex-col justify-between xl:p-8 lg:p-6 md:p-8 sm:p-6 p-4 bg-secondary rounded-md'>
            <h4 className='text-third font-semibold xl:text-xl lg:text-lg md:text-xl sm:text-lg text-base'>
              Our Client
            </h4>
            <h1 className='text-white font-bold xl:text-5xl lg:text-4xl md:text-5xl sm:text-4xl text-3xl'>
              We work with 30 clients
            </h1>
            <p className='text-white xl:text-base lg:text-sm md:text-base sm:text-sm text-xs'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
            </p>
          </div>
          <div className='lg:col-span-3 col-span-1 lg:space-y-0 md:space-y-6 sm:space-y-5 space-y-4 flex flex-col justify-between xl:py-8 xl:px-4 lg:py-6 lg:px-3 md:py-8 md:px-4 sm:py-6 sm:px-3 py-4 px-2  bg-secondary rounded-md'>
            <Carousel dots={false} autoplay infinite slidesToShow={5} slidesToScroll={1} className=''>
              {IMAGES.CAROUSEL_LOGO.map((image, i) => (
                <div key={i} className='xl:px-4 lg:px-3 md:px-4 sm:px-3 px-2'>
                  <img src={image.url} alt={`Image ${image.id}`} className='w-full h-auto object-contain' loading="lazy"/>
                </div>
              ))}
            </Carousel>
            <p className='text-white xl:text-base lg:text-sm md:text-base sm:text-sm text-xs xl:px-4 lg:px-3 md:px-4 sm:px-3 px-2'>
              Pellentesque ullamcorper ipsum eget ultricies ornare. Morbi lacinia sed diam vel varius. Phasellus non
              erat in elit mattis ultrices. Aenean nulla libero, vulputate vitae sem quis, dictum aliquam eros. Sed
              congue metus ac felis scelerisque.
            </p>
            <div className='xl:px-4 lg:px-3 md:px-4 sm:px-3 px-2'>
              {' '}
              <Button
                className='xl:px-6 xl:py-5 lg:px-5 lg:py-4 md:px-4 md:py-3 sm:px-5 sm:py-4 px-4 py-3'
                type='primary'
              >
                Read More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClientSection
