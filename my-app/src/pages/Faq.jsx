import DropdownInfo from '@/components/common/DropdownInfo'
import { IMAGES } from '@/constant'
import { useState } from 'react'

const Faq = () => {
  const [activeVirtu, setActiveVirtu] = useState('1')
  const [activeFunction, setActiveFunction] = useState('4')
  const [activeRedesign, setActiveRedesign] = useState('7')

  const handleToggle = (name, active, setActive) => {
    if (active === name) {
      // Nếu đã mở, click lại để đóng ngay
      setActive(null)
    } else {
      // Nếu đang có dropdown khác mở, đóng nó trước
      if (active !== null) {
        setActive(null)
        setTimeout(() => {
          setActive(name)
        }, 200) 
      } else {
        setActive(name)
      }
    }
  }
  return (
    <div className='bg-white relative z-30 xl:py-28 lg:py-24 md:py-20 sm:py-16 py-12 xl:px-48 lg:px-24 md:px-12 sm:px-8 px-4'>
      <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-8 sm:gap-6 gap-4'>
        <div className='lg:space-y-4 sm:space-y-3 space-y-2'>
          <h3 className='xl:text-3xl lg:text-2xl md:text-3xl sm:text-2xl text-xl text-secondary font-bold font-blinker'>
            The Most Question we had{' '}
          </h3>
          <p className='text-text xl:text-base lg:text-sm md:text-base sm:text-sm text-xs'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis,
            pulvinar dapibus leo.
          </p>
          <img src={IMAGES.FAQ.url} alt={IMAGES.FAQ.name} className='object-cover w-full' />
        </div>
        <div className='h-full flex flex-col justify-center lg:gap-y-4 sm:gap-y-3 gap-y-2'>
          <h4 className='text-secondary font-blinker xl:text-2xl lg:text-xl md:text-2xl sm:text-xl text-lg'>
            What is virtu ?
          </h4>
          <DropdownInfo
            isActive={activeVirtu === '1'}
            onToggle={() => handleToggle('1', activeVirtu, setActiveVirtu)}
            name='1'
            title='How to Change my Photo from Admin Dashboard?'
            content='Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast.'
          />
          <DropdownInfo
            isActive={activeVirtu === '2'}
            onToggle={() => handleToggle('2', activeVirtu, setActiveVirtu)}
            name='2'
            title='How to Change my Password easily?'
            content='Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast.'
          />
          <DropdownInfo
            isActive={activeVirtu === '3'}
            onToggle={() => handleToggle('3', activeVirtu, setActiveVirtu)}
            name='3'
            title='How to Change my Subscription Plan using PayPal?'
            content='Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast.'
          />
        </div>
        <div className='h-full flex flex-col lg:gap-y-4 sm:gap-y-3 gap-y-2'>
          <h4 className='text-secondary font-blinker xl:text-2xl lg:text-xl md:text-2xl sm:text-xl text-lg'>
            How do we change function ?
          </h4>
          <DropdownInfo
            isActive={activeFunction === '4'}
            onToggle={() => handleToggle('4', activeFunction, setActiveFunction)}
            name='4'
            title='How to Change my Photo from Admin Dashboard?'
            content='Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast'
          />
          <DropdownInfo
            isActive={activeFunction === '5'}
            onToggle={() => handleToggle('5', activeFunction, setActiveFunction)}
            name='5'
            title='How to Change my Password easily?'
            content='Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast'
          />
          <DropdownInfo
            isActive={activeFunction === '6'}
            onToggle={() => handleToggle('6', activeFunction, setActiveFunction)}
            name='6'
            title='How to Change my Subscription Plan using PayPal'
            content='Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast'
          />
        </div>
        <div className='h-full flex flex-col lg:gap-y-4 sm:gap-y-3 gap-y-2'>
          <h4 className='text-secondary font-blinker xl:text-2xl lg:text-xl md:text-2xl sm:text-xl text-lg'>
            Can we redesign UI/UX ?
          </h4>
          <DropdownInfo
            isActive={activeRedesign === '7'}
            onToggle={() => handleToggle('7', activeRedesign, setActiveRedesign)}
            name='7'
            title='How to Change my Photo from Admin Dashboard?'
            content='Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast'
          />
          <DropdownInfo
            isActive={activeRedesign === '8'}
            onToggle={() => handleToggle('8', activeRedesign, setActiveRedesign)}
            name='8'
            title='How to Change my Password easily?'
            content='Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast'
          />
          <DropdownInfo
            isActive={activeRedesign === '9'}
            onToggle={() => handleToggle('9', activeRedesign, setActiveRedesign)}
            name='9'
            title='How to Change my Subscription Plan using PayPal'
            content='Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast'
          />
        </div>
      </div>
    </div>
  )
}

export default Faq
