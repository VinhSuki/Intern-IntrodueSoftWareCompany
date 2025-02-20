import { IMAGES } from '@/constant'
import { FacebookOutlined, InstagramOutlined, MailOutlined, PhoneOutlined, YoutubeOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='bg-transparent xl:pt-14 lg:pt-12 md:pt-10 sm:pt-8 pt-6  xl:pb-20 lg:pb-16 md:pb-12 sm:pb-8 pb-4 relative z-40 text-white hidden lg:block'>
      <div className='xl:px-48 lg:px-24 md:px-12 sm:px-8 px-4 mx-auto flex flex-col items-center justify-between'>
        <div className='py-5 grid grid-cols-5 w-full border-b'>
          <img className='object-cover w-full' src={IMAGES.MAIN_LOGO.url} alt={IMAGES.MAIN_LOGO.name} />
          <div></div>
          <div className='flex items-center justify-center'>
            <div className='flex flex-col items-start justify-center gap-3'>
              <div className='flex items-center gap-4'>
                <PhoneOutlined className='xl:text-3xl text-2xl' />
                <div className='flex flex-col justify-between xl:text-base text-sm'>
                  <span>Hotline</span>
                  <span className='font-semibold'>0869610949</span>
                </div>
              </div>
              <div className='flex items-center gap-4'>
                <MailOutlined className='xl:text-3xl text-2xl' />
                <div className='flex flex-col justify-between xl:text-base text-sm'>
                  <span>Email</span>
                  <span className='font-semibold'>dinhquangvinh2804@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
          <div></div>
          <div className='flex items-center justify-center gap-10'>
            <a target='_blank' href={'https://www.facebook.com/inhquangvinh.553653'}>
              <FacebookOutlined className='xl:text-5xl text-4xl' />
            </a>
            <a target='_blank' href={'https://www.youtube.com/@inhquangvinh1007'}>
              <YoutubeOutlined className='xl:text-5xl text-4xl' />
            </a>
            <a target='_blank' href={'https://www.instagram.com/_dqvjnk.284_/'}>
              <InstagramOutlined className='xl:text-5xl text-4xl' />
            </a>
          </div>
        </div>

        <div className='py-10 flex justify-between xl:gap-10 lg:gap-5 w-full'>
          <div className='xl:max-w-80 max-w-64 '>
            <h3 className='mb-3 xl:text-xl text-lg'>Virtu</h3>
            <div>
              <p className='xl:text-base lg:text-sm'>
              Virtu Financial is a leading financial services company that leverages advanced technology to provide liquidity to global markets and deliver transparent, innovative trading solutions for clients.
              </p>
            </div>
          </div>
          <div>
            <h3 className='mb-3 xl:text-xl text-lg'>Quick Pages</h3>
            <div>
              <ul className='flex flex-col gap-1'>
                <li>
                  <Link to={'/'} className='xl:text-base lg:text-sm hover:text-hover transition'>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to={'/about-us'} className='xl:text-base lg:text-sm hover:text-hover transition'>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to={'/service'} className='xl:text-base lg:text-sm hover:text-hover transition'>
                    Service
                  </Link>
                </li>
                <li>
                  <Link to={'/contact'} className='xl:text-base lg:text-sm hover:text-hover transition'>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h3 className='mb-3 xl:text-xl text-lg'>Vision</h3>
            <div>
              <ul className='flex flex-col gap-1'>
                <li>
                  <span className='xl:text-base lg:text-sm'>Managed it service</span>
                </li>
                <li>
                  <span className='xl:text-base lg:text-sm'>Cloud security</span>
                </li>
                <li>
                  <span className='xl:text-base lg:text-sm'>Cloud data</span>
                </li>
                <li>
                  <span className='xl:text-base lg:text-sm'>Connectivity</span>
                </li>
              </ul>
            </div>
          </div>
          <div className='xl:max-w-80 max-w-64'>
            <h3 className='mb-3 xl:text-xl text-lg'>Address</h3>
            <div>
              <ul className='flex flex-col gap-1'>
                <li>
                  <p className='xl:text-base lg:text-sm'>
                    <span className='font-bold'>Headquarters (USA): </span>1633 Broadway, 41st Floor, New York, NY 10019
                  </p>
                </li>
                <li>
                  <p className='xl:text-base lg:text-sm'>
                    <span className='font-bold'>Chicago Office: </span>233 S Wacker Dr, Suite 4020, Chicago, IL 60606
                  </p>
                </li>
                <li>
                  <p className='xl:text-base lg:text-sm'>
                    <span className='font-bold'>Ireland Office: </span>North Dock One, 5th Floor, 91-92 North Wall Quay, Dublin 1, Ireland, D01 H7V7
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
