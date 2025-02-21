import Card from '@/components/common/Card'
import {
    CloudSyncOutlined
} from '@ant-design/icons'
import ProjectSection from './components/ProjectSection'
import ReputeSection from '@/components/common/ReputeSection'
import RateSection from '@/components/common/RateSection'
import GetInTouch from '@/components/common/GetInTouch'

const Service = () => {
  return (
    <div>
      <div className='xl:px-48 lg:px-24 md:px-12 sm:px-8 px-4 xl:py-28 lg:py-24 md:py-20 sm:py-16 py-12 bg-white relative z-30'>
        <div className='font-blinker h-full  xl:space-y-6 lg:space-y-5 md:space-y-6 sm:space-y-5 space-y-4 text-center mb-16'>
          <h4 className='text-primary font-semibold xl:text-2xl lg:text-xl md:text-2xl sm:text-xl text-lg'>
            We gave the best
          </h4>
          <h1 className='text-secondary font-bold xl:text-6xl lg:text-5xl md:text-6xl sm:text-5xl text-4xl'>
            What we offer
          </h1>
          <p className='text-text xl:text-base lg:text-xs md:text-sm sm:text-xs text-2xs w-4/5 mx-auto'>
            Integer luctus maximus massa ac elementum. Donec blandit vestibulum varius. Mauris vel euismod velit. Sed
            congue eu nisl sed egestas. Quisque diam est, luctus a semper in, semper nec risus.{' '}
          </p>
        </div>
        <div className='w-full grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 xl:gap-6 lg:gap-5 md:gap-6 sm:gap-5 gap-4'>
          <div data-aos='zoom-in' data-aos-delay={100}>
            <Card
              fade='right'
              title='Data Driven'
              content='We bring the right people together to challenge established thinking and drive transform in 2020'
              Icon={CloudSyncOutlined}
              bgColor='white'
              textColor='text-secondary'
              textHoverColor='text-white'
              bgHoverColor='bg-primary'
              isShowIcon={true}
            />
          </div>
          <div data-aos='zoom-in' data-aos-delay={200}>
            <Card
              fade='right'
              title='Data Driven'
              content='We bring the right people together to challenge established thinking and drive transform in 2020'
              Icon={CloudSyncOutlined}
              bgColor='white'
              textColor='text-secondary'
              textHoverColor='text-white'
              bgHoverColor='bg-primary'
              isShowIcon={true}
            />
          </div>
          <div data-aos='zoom-in' data-aos-delay={300}>
            <Card
              fade='right'
              title='Data Driven'
              content='We bring the right people together to challenge established thinking and drive transform in 2020'
              Icon={CloudSyncOutlined}
              bgColor='white'
              textColor='text-secondary'
              textHoverColor='text-white'
              bgHoverColor='bg-primary'
              isShowIcon={true}
            />
          </div>
          <div data-aos='zoom-in' data-aos-delay={400}>
            <Card
              fade='right'
              title='Data Driven'
              content='We bring the right people together to challenge established thinking and drive transform in 2020'
              Icon={CloudSyncOutlined}
              bgColor='white'
              textColor='text-secondary'
              textHoverColor='text-white'
              bgHoverColor='bg-primary'
              isShowIcon={true}
            />
          </div>
        </div>
      </div>
      <ProjectSection/>
      <ReputeSection className='h-auto bg-white relative z-30 xl:py-28 lg:py-24 md:py-20 sm:py-16 py-12' />
      <RateSection />
      <GetInTouch />
    </div>
  )
}

export default Service
