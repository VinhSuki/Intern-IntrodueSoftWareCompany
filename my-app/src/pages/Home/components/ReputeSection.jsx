import { IMAGES } from '@/constant'
import { useCountUp } from '@/hooks'
import { CheckCircleFilled } from '@ant-design/icons'
import { Tag } from 'antd'

// eslint-disable-next-line react/prop-types
const ReputeSection = ({ className = '' }) => {
  const { counterRef: countProjectRefs, sectionRef: sectionProjectRefs } = useCountUp(0, 427, 1)
  const { counterRef: countCustomerRefs, sectionRef: sectionCustomerRefs } = useCountUp(0, 862, 1)
  return (
    <section className={className}>
      <div className='xl:px-48 lg:px-24 md:px-12 sm:px-8 px-4 h-full'>
        <div className='h-full grid grid-cols-1 lg:grid-cols-2 xl:space-x-6 lg:space-x-5 space-x-0 lg:space-y-0 md:space-y-5 space-y-4'>
          <div className='relative flex justify-center items-center'>
            <img src={IMAGES.REPUTE.url} alt={IMAGES.REPUTE.name} className='object-cover w-auto h-auto' loading="lazy"/>
            <Tag
              ref={sectionProjectRefs}
              className='text-center font-bold left-0 z-50 absolute top-0 xl:p-2 lg:p-1.5 md:p-1 sm:p-1.5 p-1 font-blinker xl:space-y-2 lg:space-y-1.5 md:space-y-2 sm:space-y-1.5 space-y-1'
              color='blue'
            >
              <p className='xl:text-5xl lg:text-4xl md:text-5xl sm:text-4xl text-3xl' ref={countProjectRefs}>
                0
              </p>
              <p className='xl:text-base lg:text-sm md:text-base sm:text-sm text-xs'>Projects Completed</p>
            </Tag>
            <Tag
              ref={sectionCustomerRefs}
              className='text-center font-bold right-0 z-50 absolute bottom-0 xl:p-2 lg:p-1.5 md:p-1 sm:p-1.5 p-1 font-blinker xl:space-y-2 lg:space-y-1.5 md:space-y-2 sm:space-y-1.5 space-y-1'
              color='geekblue'
            >
              <p className='xl:text-5xl lg:text-4xl md:text-5xl sm:text-4xl text-3xl' ref={countCustomerRefs}>
                0
              </p>
              <p className='xl:text-base lg:text-sm md:text-base sm:text-sm text-xs'>Worldwide Customer</p>
            </Tag>
          </div>
          <div data-aos='fade-left' data-aos-anchor-placement='top-center'>
            <div className='font-blinker h-full  flex flex-col justify-center xl:space-y-6 lg:space-y-5 md:space-y-6 sm:space-y-5 space-y-4'>
              <h4 className='text-primary font-semibold xl:text-xl lg:text-lg md:text-xl sm:text-lg text-base'>
                Industries we serve
              </h4>
              <h1 className='text-secondary font-bold xl:text-5xl lg:text-4xl md:text-5xl sm:text-4xl text-3xl'>
                Why us ?
              </h1>
              <p className='text-text xl:text-base lg:text-sm md:text-base sm:text-sm text-xs'>
                Morbi lacinia sed diam vel varius. Phasellus non erat in elit mattis ultrices. Aenean nulla libero,
                vulputate vitae sem quis, dictum aliquam eros. Sed congue metus ac felis scelerisque, ac finibus neque
                tincidunt.
              </p>
              <div className='w-full grid grid-cols-2 gap-4'>
            <div className='space-x-3 xl:text-base lg:text-sm md:text-base sm:text-sm text-xs'>
              <CheckCircleFilled className='text-primary hover:text-secondary' />
              <span className='text-text'>Customer Funnel Booster</span>
            </div>
            <div className='space-x-3 xl:text-base lg:text-sm md:text-base sm:text-sm text-xs'>
              <CheckCircleFilled className='text-primary hover:text-secondary' />
              <span className='text-text'>Vulputate massa</span>
            </div>
            <div className='space-x-3 xl:text-base lg:text-sm md:text-base sm:text-sm text-xs'>
              <CheckCircleFilled className='text-primary hover:text-secondary' />
              <span className='text-text'>Remarketing Blueprint</span>
            </div>
            <div className='space-x-3 xl:text-base lg:text-sm md:text-base sm:text-sm text-xs'>
              <CheckCircleFilled className='text-primary hover:text-secondary' />
              <span className='text-text'>Phasellus odio dolor</span>
            </div>
            <div className='space-x-3 xl:text-base lg:text-sm md:text-base sm:text-sm text-xs'>
              <CheckCircleFilled className='text-primary hover:text-secondary' />
              <span className='text-text'>Lead Nurturing Scheme</span>
            </div>
            <div className='space-x-3 xl:text-base lg:text-sm md:text-base sm:text-sm text-xs'>
              <CheckCircleFilled className='text-primary hover:text-secondary' />
              <span className='text-text'>Aliquam sed finibus</span>
            </div>
          </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ReputeSection
