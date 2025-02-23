import ProgressCircle from '@/components/common/ProgressCircle'
import { HomeOutlined } from '@ant-design/icons'
import { Button } from 'antd'

const ProjectSection = () => {
  return (
    <section className='bg-transparent xl:py-28 lg:py-24 md:py-20 sm:py-16 py-12 relative z-30'>
      <div className='xl:px-48 lg:px-24 md:px-12 sm:px-8 px-4 w-full grid grid-cols-1 lg:grid-cols-2 xl:gap-12 lg:gap-10 md:gap-12 sm:gap-10 gap-8'>
        <div
          className='xl:space-y-8 lg:space-y-7 md:space-y-8 sm:space-y-7 space-y-6'
          data-aos='fade-right'
          data-aos-anchor-placement='top-center'
        >
          <h4 className='text-third font-bold xl:text-xl lg:text-lg md:text-xl sm:text-lg text-base font-blinker'>
            The project that completed
          </h4>
          <h1 className='text-white font-bold xl:text-6xl lg:text-5xl md:text-6xl sm:text-5xl text-4xl font-blinker'>
            Our Project have been done
          </h1>
          <p className='text-white xl:text-base lg:text-sm md:text-base sm:text-sm text-xs'>
            Donec blandit vestibulum varius. Mauris vel euismod velit. Sed congue eu nisl sed egestas. Quisque diam est,
            luctus a semper in, semper nec risus. Proin ut tortor non nisi ornare condimentum.
          </p>
          <h5 className='font-semibold xl:text-xl lg:text-lg md:text-xl sm:text-lg text-base font-blinker text-white'>
            Interesting ?
          </h5>
          <Button
            className='lg:px-6 lg:py-5 sm:px-5 sm:py-4 px-4 py-3 font-semibold lg:text-base sm:text-sm text-xs bg-third text-secondary'
            type='primary'
          >
            Hire Us Now
          </Button>
        </div>
        <div className='grid grid-cols-2 gap-4'>
          <div className='space-y-2 flex items-center flex-col'>
            <ProgressCircle icon={HomeOutlined} percentage={80} />
            <h3 className='font-semibold xl:text-2xl lg:text-xl md:text-2xl sm:text-xl text-lg text-white truncate text-center w-full'>
              83 Department Store
            </h3>
          </div>
          <div className='space-y-2 flex items-center flex-col'>
            <ProgressCircle icon={HomeOutlined} percentage={80} />
            <h3 className='font-semibold xl:text-2xl lg:text-xl md:text-2xl sm:text-xl text-lg text-white truncate text-center w-full'>
              137 Industries
            </h3>
          </div>
          <div className='space-y-2 flex items-center flex-col'>
            <ProgressCircle icon={HomeOutlined} percentage={80} />
            <h3 className='font-semibold xl:text-2xl lg:text-xl md:text-2xl sm:text-xl text-lg text-white truncate text-center w-full'>
              213 Restaurant
            </h3>
          </div>
          <div className='space-y-2 flex items-center flex-col'>
            <ProgressCircle icon={HomeOutlined} percentage={80} />
            <h3 className='font-semibold xl:text-2xl lg:text-xl md:text-2xl sm:text-xl text-lg text-white truncate text-center w-full'>
              110 Hospital
            </h3>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectSection
