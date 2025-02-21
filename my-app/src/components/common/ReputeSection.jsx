import { IMAGES } from '@/constant'
import { useCountUp } from '@/hooks'
import { Tag } from 'antd'

const ReputeSection = ({
  // eslint-disable-next-line react/prop-types
  className = '',isShowTag = true,title = '',shortContent = '',description = '',children
}) => {
  const { counterRef: countProjectRefs, sectionRef: sectionProjectRefs } = useCountUp(0, 427, 1)
  const { counterRef: countCustomerRefs, sectionRef: sectionCustomerRefs } = useCountUp(0, 862, 1)
  return (
    <section className={className}>
      <div className='xl:px-48 lg:px-24 md:px-12 sm:px-8 px-4 h-full'>
        <div className='h-full grid grid-cols-1 lg:grid-cols-2 xl:space-x-6 lg:space-x-5 space-x-0 lg:space-y-0 md:space-y-5 space-y-4'>
          <div className='relative flex justify-center items-center'>
            <img
              src={IMAGES.REPUTE.url}
              alt={IMAGES.REPUTE.name}
              className='object-cover w-auto h-auto'
              loading='lazy'
            />
            {isShowTag && (
              <>
                {' '}
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
              </>
            )}
          </div>
          <div data-aos='fade-left' data-aos-anchor-placement='top-center'>
            <div className='font-blinker h-full  flex flex-col justify-center xl:space-y-6 lg:space-y-5 md:space-y-6 sm:space-y-5 space-y-4'>
              <h4 className='text-primary font-semibold xl:text-xl lg:text-lg md:text-xl sm:text-lg text-base'>
                {title}
              </h4>
              <h1 className='text-secondary font-bold xl:text-5xl lg:text-4xl md:text-5xl sm:text-4xl text-3xl'>
                {shortContent}
              </h1>
              <p className='text-text xl:text-base lg:text-sm md:text-base sm:text-sm text-xs'>{description}</p>
              {children}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ReputeSection
