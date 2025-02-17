import { IMAGES } from '@/constant'

const Overlay = () => {
  return (
    <div className='h-screen w-screen fixed inset-0 z-10 bg-secondary'>
      <img src={IMAGES.MAIN_OVERLAY.url} alt={IMAGES.MAIN_OVERLAY.name} className='w-full h-full object-cover absolute z-10' />
      <img src={IMAGES.LEFT_OVERLAY.url} alt={IMAGES.LEFT_OVERLAY.name} className='w-full h-full object-cover absolute z-10 opacity-70' />
      <img src={IMAGES.RIGHT_OVERLAY.url} alt={IMAGES.RIGHT_OVERLAY.name} className='w-full h-full object-cover absolute z-10 opacity-70' />
    </div>
  )
}

export default Overlay
