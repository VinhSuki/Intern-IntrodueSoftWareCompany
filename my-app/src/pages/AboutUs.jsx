import Introduce from '@/components/common/Introduce'
import { DropboxOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import HistorySection from '@/components/common/HistorySection'
import DesignSection from '@/components/common/DesignSection'
import ClientSection from '@/components/common/ClientSection'
import BackgroundContainer from '@/components/common/BackgroundContainer'
import GetInTouchForm from '@/components/common/GetInTouchForm'

const AboutUs = () => {
  return (
    <div>
      <div className='xl:py-28 lg:py-24 md:py-20 sm:py-16 py-12 space-y-6 bg-white relative z-30'>
        <Introduce
          className='h-auto'
          tag='The best tech company in the year'
          title='Welcome to Virtu company'
          shortContent='The best tech company'
          description='Phasellus odio dolor, tincidunt sed rutrum at, condimentum ac ipsum. Nullam congue pretium nisl. Curabitur at sem et leo dictum pretium. Morbi in rutrum tellus. Donec interdum ut felis et rutrum. Proin vitae venenatis sem. Aenean mattis malesuada dolor eget aliquam.'
        >
          <div>
            <Button
              className='xl:px-6 xl:py-5 lg:px-5 lg:py-4 md:px-4 md:py-3 sm:px-5 sm:py-4 px-4 py-3'
              type='primary'
            >
              Our Service
            </Button>
          </div>
        </Introduce>
        <div className='grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-2 gap-1 align-top xl:px-48 lg:px-24 md:px-12 sm:px-8 px-4'>
          <div className='flex lg:gap-x-4 sm:gap-x-3 gap-x-2 items-start hover:shadow-lg lg:p-4 sm:p-3 p-2 transition-all ease-linear'>
            <DropboxOutlined className='text-start text-primary  xl:text-3xl lg:text-2xl md:text-3xl sm:text-2xl text-xl ' />
            <div className='flex-1 items-center lg:space-y-4 sm:space-y-3 space-y-2'>
              <h4 className='font-semibold text-secondary xl:text-xl lg:text-lg md:text-xl sm:text-base text-sm'>
                427 Project Completed
              </h4>
              <p className='text-text xl:text-base lg:text-sm md:text-base sm:text-sm text-xs'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
          <div className='flex lg:gap-x-4 sm:gap-x-3 gap-x-2 items-start hover:shadow-lg lg:p-4 sm:p-3 p-2 transition-all ease-linear'>
            <DropboxOutlined className='text-start text-primary  xl:text-3xl lg:text-2xl md:text-3xl sm:text-2xl text-xl ' />
            <div className='flex-1 items-center lg:space-y-4 sm:space-y-3 space-y-2'>
              <h4 className='font-semibold text-secondary xl:text-xl lg:text-lg md:text-xl sm:text-base text-sm'>
                427 Project Completed
              </h4>
              <p className='text-text xl:text-base lg:text-sm md:text-base sm:text-sm text-xs'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
          <div className='flex lg:gap-x-4 sm:gap-x-3 gap-x-2 items-start hover:shadow-lg lg:p-4 sm:p-3 p-2 transition-all ease-linear'>
            <DropboxOutlined className='text-start text-primary  xl:text-3xl lg:text-2xl md:text-3xl sm:text-2xl text-xl ' />
            <div className='flex-1 items-center lg:space-y-4 sm:space-y-3 space-y-2'>
              <h4 className='font-semibold text-secondary xl:text-xl lg:text-lg md:text-xl sm:text-base text-sm'>
                427 Project Completed
              </h4>
              <p className='text-text xl:text-base lg:text-sm md:text-base sm:text-sm text-xs'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
          <div className='flex lg:gap-x-4 sm:gap-x-3 gap-x-2 items-start hover:shadow-lg lg:p-4 sm:p-3 p-2 transition-all ease-linear'>
            <DropboxOutlined className='text-start text-primary  xl:text-3xl lg:text-2xl md:text-3xl sm:text-2xl text-xl ' />
            <div className='flex-1 items-center lg:space-y-4 sm:space-y-3 space-y-2'>
              <h4 className='font-semibold text-secondary xl:text-xl lg:text-lg md:text-xl sm:text-base text-sm'>
                427 Project Completed
              </h4>
              <p className='text-text xl:text-base lg:text-sm md:text-base sm:text-sm text-xs'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
      <HistorySection />
      <DesignSection className='h-auto bg-white relative z-30 xl:pt-28 lg:pt-24 md:pt-20 sm:pt-16 pt-12 xl:pb-56 lg:pb-48 md:pb-40 sm:pb-32 pb-24 ' />
      <ClientSection />
      <BackgroundContainer className='xl:h-[600px] lg:h-[550px] h-full'>
        <GetInTouchForm
          title='Get in touch'
          shortContent='Dont hesitate to ask a question'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
        />
      </BackgroundContainer>
    </div>
  )
}

export default AboutUs
