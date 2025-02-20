import Card from '@/components/common/Card'
import {
  CheckCircleFilled,
  CloudSyncOutlined,
  CloudUploadOutlined,
  DeleteColumnOutlined,
  RiseOutlined
} from '@ant-design/icons'

const ReasonSection = () => {
  return (
    <section className='bg-transparent lg:py-0 md:py-20 sm:py-16 py-12 lg:h-screen h-full relative z-30 flex items-center'>
      <div className='xl:px-48 lg:px-24 md:px-12 sm:px-8 px-4 w-full grid grid-cols-1 lg:grid-cols-2 gap-12'>
        <div
          className='xl:space-y-8 lg:space-y-7 md:space-y-8 sm:space-y-7 space-y-6 flex flex-col justify-center'
          data-aos='fade-right'
          data-aos-anchor-placement='top-center'
        >
          <h4 className='text-third font-bold xl:text-xl lg:text-lg md:text-xl sm:text-lg text-base font-blinker'>
            Why Choose us
          </h4>
          <h1 className='text-white font-bold xl:text-7xl lg:text-6xl md:text-7xl sm:text-6xl text-5xl font-blinker'>
            What we do ?
          </h1>
          <p className='text-white xl:text-base lg:text-sm md:text-base sm:text-sm text-xs'>
            Nulla ac eros vel neque mattis maximus. In et feugiat neque, vel porta ante. Morbi at justo justo. Etiam
            eget eros ac enim iaculis sagittis. Maecenas eget sapien purus. Phasellus gravida viverra convallis. Ut
            vitae mauris tincidunt, pharetra turpis condimentum, eleifend ipsum. Proin mollis bibendum odio, eu
            scelerisque lacus fermentum in.
          </p>
          <div className='w-full grid grid-cols-2 gap-4'>
            <div className='space-x-3 xl:text-base lg:text-sm md:text-base sm:text-sm text-xs'>
              <CheckCircleFilled className='text-third hover:text-white' />
              <span className='text-white'>Customer Funnel Booster</span>
            </div>
            <div className='space-x-3 xl:text-base lg:text-sm md:text-base sm:text-sm text-xs'>
              <CheckCircleFilled className='text-third hover:text-white' />
              <span className='text-white'>Vulputate massa</span>
            </div>
            <div className='space-x-3 xl:text-base lg:text-sm md:text-base sm:text-sm text-xs'>
              <CheckCircleFilled className='text-third hover:text-white' />
              <span className='text-white'>Remarketing Blueprint</span>
            </div>
            <div className='space-x-3 xl:text-base lg:text-sm md:text-base sm:text-sm text-xs'>
              <CheckCircleFilled className='text-third hover:text-white' />
              <span className='text-white'>Phasellus odio dolor</span>
            </div>
            <div className='space-x-3 xl:text-base lg:text-sm md:text-base sm:text-sm text-xs'>
              <CheckCircleFilled className='text-third hover:text-white' />
              <span className='text-white'>Lead Nurturing Scheme</span>
            </div>
            <div className='space-x-3 xl:text-base lg:text-sm md:text-base sm:text-sm text-xs'>
              <CheckCircleFilled className='text-third hover:text-white' />
              <span className='text-white'>Aliquam sed finibus</span>
            </div>
          </div>
        </div>
        <div className='w-full grid grid-cols-2 xl:gap-x-6 lg:gap-x-5 md:gap-x-6 sm:gap-x-5 gap-x-4'>
          <div data-aos='zoom-in' data-aos-delay={100} data-aos-anchor-placement='center-center'>
            <Card
              title='Data Driven'
              content='We bring the right people together to challenge established thinking and drive transform in 2020'
              Icon={CloudSyncOutlined}
            />
          </div>
          <div className='xl:mt-10 lg:mt-8 md:mt-10 sm:mt-8 mt-6' data-aos='zoom-in' data-aos-delay={200} data-aos-anchor-placement='center-center'>
            <Card
              fade='right'
              title='Market Analysis'
              content='We bring the right people together to challenge established thinking and drive transform in 2020'
              bgColor='bg-third'
              textColor='text-secondary'
              bgHoverColor='bg-hover'
              textHoverColor='text-white'
              Icon={RiseOutlined}
            />
          </div>
          <div data-aos='zoom-in' data-aos-delay={300} data-aos-anchor-placement='bottom-bottom'>
            <Card
              fade='left'
              title='Tech Support'
              content='We bring the right people together to challenge established thinking and drive transform in 2020'
              bgColor='bg-third'
              textColor='text-secondary'
              bgHoverColor='bg-hover'
              textHoverColor='text-white'
              Icon={CloudUploadOutlined}
            />{' '}
          </div>
          <div className='xl:mt-10 lg:mt-8 md:mt-10 sm:mt-8 mt-6' data-aos='zoom-in' data-aos-delay={400} data-aos-anchor-placement='bottom-bottom'>
            <Card
              fade='bottom'
              title='Data Secure'
              content='We bring the right people together to challenge established thinking and drive transform in 2020'
              bgColor='bg-third'
              textColor='text-secondary'
              bgHoverColor='bg-hover'
              textHoverColor='text-white'
              Icon={DeleteColumnOutlined}
            />{' '}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ReasonSection
