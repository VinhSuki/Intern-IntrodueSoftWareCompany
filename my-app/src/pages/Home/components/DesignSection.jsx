import { IMAGES } from '@/constant'
import { CloudSyncOutlined } from '@ant-design/icons'
import { Tag } from 'antd'

// eslint-disable-next-line react/prop-types
const DesignSection = ({ className = '' }) => {
  return (
    <section className={className}>
      <div className='xl:px-48 lg:px-24 md:px-12 sm:px-8 px-4 h-full'>
        <div className='h-full grid grid-cols-1 lg:grid-cols-2 xl:space-x-6 lg:space-x-5 space-x-0 lg:space-y-0 md:space-y-5 space-y-4'>
          <div className='relative'>
            <img
              src={IMAGES.DESIGN_LAPTOP.url}
              alt={IMAGES.DESIGN_LAPTOP.name}
              className='object-cover w-auto h-auto'
            />
            <Tag
              className='text-center uppercase font-bold right-0 xl:text-2xl lg:text-xl md:text-2xl sm:text-xl text-lg z-50 absolute top-0 xl:p-2 lg:p-1.5 md:p-1 sm:p-1.5 p-1 font-blinker'
              color='blue'
              data-aos='zoom-in'
              data-aos-delay='200'
              data-aos-anchor-placement='top-bottom'
            >
              <p>Cool</p>
              <p>Design</p>
            </Tag>
            <Tag
              className='text-center uppercase font-bold left-0 xl:text-2xl lg:text-xl md:text-2xl sm:text-xl text-lg z-50 absolute bottom-0 xl:p-2 lg:p-1.5 md:p-1 sm:p-1.5 p-1 font-blinker'
              color='geekblue'
              data-aos='zoom-in'
              data-aos-delay='200'
              data-aos-anchor-placement='top-bottom'
            >
              <p>UI/UX</p>
              <p>Design</p>
            </Tag>
          </div>
          <div data-aos='fade-left' data-aos-anchor-placement='top-center'>
            <div className='font-blinker h-full  flex flex-col justify-center xl:space-y-6 lg:space-y-5 md:space-y-6 sm:space-y-5 space-y-4'>
              <h4 className='text-primary font-semibold xl:text-xl lg:text-lg md:text-xl sm:text-lg text-base'>
                Our vision
              </h4>
              <h1 className='text-secondary font-bold xl:text-5xl lg:text-4xl md:text-5xl sm:text-4xl text-3xl'>
                We craft bright future
              </h1>
              <p className='text-text xl:text-base lg:text-sm md:text-base sm:text-sm text-xs'>
                In et feugiat neque, vel porta ante. Morbi at justo justo. Etiam eget eros ac enim iaculis sagittis.
                Maecenas eget sapien purus.
              </p>
              <div className='grid sm:grid-cols-2 grid-cols-1 lg:gap-x-2 sm:gap-x-1 lg:gap-y-4 gap-y-3 gap-x-0 align-top'>
                <div className='flex gap-x-4 items-start'>
                  <CloudSyncOutlined className='text-start text-primary  xl:text-3xl lg:text-2xl md:text-3xl sm:text-2xl text-xl '/>
                  <div className='flex-1 items-center'>
                    <h4 className='font-semibold text-primary xl:text-xl lg:text-lg md:text-xl sm:text-base text-sm'>Managed it service</h4>
                    <p className='text-text xl:text-base lg:text-sm md:text-base sm:text-sm text-xs'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                </div>
                <div className='flex gap-x-4 items-start'>
                  <CloudSyncOutlined className='text-start text-primary  xl:text-3xl lg:text-2xl md:text-3xl sm:text-2xl text-xl '/>
                  <div className='flex-1 items-center'>
                    <h4 className='font-semibold text-primary xl:text-xl lg:text-lg md:text-xl sm:text-base text-sm'>Managed it service</h4>
                    <p className='text-text xl:text-base lg:text-sm md:text-base sm:text-sm text-xs'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                </div>
                <div className='flex gap-x-4 items-start'>
                  <CloudSyncOutlined className='text-start text-primary  xl:text-3xl lg:text-2xl md:text-3xl sm:text-2xl text-xl '/>
                  <div className='flex-1 items-center'>
                    <h4 className='font-semibold text-primary xl:text-xl lg:text-lg md:text-xl sm:text-base text-sm'>Managed it service</h4>
                    <p className='text-text xl:text-base lg:text-sm md:text-base sm:text-sm text-xs'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                </div>
                <div className='flex gap-x-4 items-start'>
                  <CloudSyncOutlined className='text-start text-primary  xl:text-3xl lg:text-2xl md:text-3xl sm:text-2xl text-xl '/>
                  <div className='flex-1 items-center'>
                    <h4 className='font-semibold text-primary xl:text-xl lg:text-lg md:text-xl sm:text-base text-sm'>Managed it service</h4>
                    <p className='text-text xl:text-base lg:text-sm md:text-base sm:text-sm text-xs'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DesignSection
