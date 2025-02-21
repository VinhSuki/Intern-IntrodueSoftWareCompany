import { IMAGES } from '@/constant'
import { PlayCircleOutlined } from '@ant-design/icons'

const HistorySection = () => {
  return (
    <section className='bg-transparent xl:py-28 lg:py-24 md:py-20 sm:py-16 py-12 relative z-40'>
      <div className='xl:px-48 lg:px-24 md:px-12 sm:px-8 px-4 w-full grid grid-cols-1 lg:grid-cols-2 xl:gap-12 lg:gap-10 md:gap-12 sm:gap-10 gap-8'>
        <div
          className='xl:space-y-8 lg:space-y-7 md:space-y-8 sm:space-y-7 space-y-6'
          data-aos='fade-right'
          data-aos-anchor-placement='top-center'
        >
          <h4 className='text-third font-bold xl:text-xl lg:text-lg md:text-xl sm:text-lg text-base font-blinker'>
            Why we do this ?
          </h4>
          <h1 className='text-white font-bold xl:text-6xl lg:text-5xl md:text-6xl sm:text-5xl text-4xl font-blinker'>
            History
          </h1>
          <p className='text-white xl:text-base lg:text-sm md:text-base sm:text-sm text-xs'>
            Nulla auctor augue nec sapien blandit, in malesuada turpis venenatis. Fusce faucibus, massa at laoreet
            facilisis, est nibh tempor ante, et scelerisque eros tellus id orci. Aliquam tempus rutrum luctus. Mauris ac
            leo nibh. Nullam porta lorem massa, ac porttitor velit ullamcorper a.
          </p>
          <div className='relative z-30 xl:w-14 xl:h-14 lg:w-12 lg:h-12 md:w-10 md:h-10 sm:w-12 sm:h-12 w-10 h-10'>
            <button className='z-30 absolute rounded-full w-full h-full bg-third text-white text-lg'>
              <PlayCircleOutlined />
            </button>
            <span className='absolute z-10 xl:inset-[8px] lg:inset-[6px] md:inset-[4px] sm:inset-[6px] inset-[4px] bg-primary animate-ping rounded-full'></span>
          </div>
        </div>
        <div className='w-full'>
          <div className='lg:relative static xl:h-[180%] xl:-top-[40%] lg:h-[170%] lg:-top-[35%] h-full'>
            <img
              src={IMAGES.HISTORY_1.url}
              alt={IMAGES.HISTORY_1.name}
              loading='lazy'
              className='lg:absolute static lg:w-[95%] lg:h-3/5 w-full right-0 top-0 object-cover rounded-md'
            />
            <img
              src={IMAGES.HISTORY_2.url}
              alt={IMAGES.HISTORY_2.name}
              loading='lazy'
              className='lg:absolute static lg:w-[95%] lg:h-3/5 w-full  left-0 bottom-0 object-cover rounded-md z-10'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HistorySection
