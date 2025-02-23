import BackgroundContainer from '@/components/common/BackgroundContainer'
import GetInTouchForm from '@/components/common/GetInTouchForm'
import ReputeSection from '@/components/common/ReputeSection'

const Contact = () => {
  return (
    <div>
      <BackgroundContainer hasBackground={false} className='xl:h-[600px] lg:h-[550px] h-full'>
        <GetInTouchForm
          title='Get in touch'
          shortContent='Dont hesitate to ask a question'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
        />
      </BackgroundContainer>
      <BackgroundContainer className='xl:h-[600px] lg:h-[550px] h-full pb-40'>
        <ReputeSection
          isShowTag={false}
          title='Experiance by your own'
          shortContent='Free trial for 30 day'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
        >
          <div>
            <span className='relative inline-block z-10'>
              <button
                className='rounded-l-md xl:text-lg lg:text-base md:text-lg sm:text-base text-sm xl:w-36 xl:py-2 lg:w-32 lg:py-1.5 md:w-36 md:py-2 sm:w-32 sm:py-1.5 w-28 py-1 bg-primary text-white hover:bg-secondary transition'
                type='primary'
              >
                Our Service
              </button>
              <button
                className='rounded-r-md xl:text-lg lg:text-base md:text-lg sm:text-base text-sm xl:w-36 xl:py-2 lg:w-32 lg:py-1.5 md:w-36 md:py-2 sm:w-32 sm:py-1.5 w-28 py-1 bg-secondary text-white hover:bg-primary transition'
                type='primary'
              >
                Join Virtu
              </button>
              <div className='flex items-center justify-center absolute z-30 left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 xl:w-10 xl:h-10 lg:w-9 lg:h-9 md:w-10 md:h-10 sm:h-9 sm:w-9 w-8 h-8 bg-white rounded-full xl:text-lg lg:text-base md:text-lg sm:text-base text-sm'>
                Or
              </div>
            </span>
          </div>
        </ReputeSection>
      </BackgroundContainer>
    </div>
  )
}

export default Contact
