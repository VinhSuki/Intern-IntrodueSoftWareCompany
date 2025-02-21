import ClientSection from '@/components/common/ClientSection'
import BusinessSection from './components/BusinessSection'
import BackgroundContainer from '@/components/common/BackgroundContainer'
import GetInTouchForm from '@/components/common/GetInTouchForm'

const ServiceDetail = () => {
  return (
    <div>
      <BusinessSection className='h-auto bg-white relative z-30 xl:pt-28 lg:pt-24 md:pt-20 sm:pt-16 pt-12 xl:pb-56 lg:pb-48 md:pb-40 sm:pb-32 pb-24 ' />
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

export default ServiceDetail
