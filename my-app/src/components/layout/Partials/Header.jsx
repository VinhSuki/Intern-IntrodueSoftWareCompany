import { useState, useEffect } from 'react'
import { IMAGES } from '@/constant'
import { CloseOutlined, DownOutlined, MenuOutlined, UpOutlined } from '@ant-design/icons'
import { Dropdown, Flex, Space } from 'antd'
import { Link, NavLink } from 'react-router-dom'
import BackgroundOverlay from '@/components/common/BackgroundOverlay'

const Header = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true) // State để theo dõi header
  const [lastScrollY, setLastScrollY] = useState(0) // Vị trí cuộn trang cuối cùng
  const [isShowMenu, setIsShowMenu] = useState(false) // State để theo dõi menu

  const serviceItems = [
    {
      key: '1',
      label: (
        <NavLink to={'/service'} className='sm:text-base text-sm hover:text-hover'>
          Service
        </NavLink>
      )
    },
    {
      key: '2',
      label: (
        <NavLink to={'/service-detail'} className='sm:text-base text-sm hover:text-hover'>
          Service Detail
        </NavLink>
      )
    }
  ]

  const pageItems = [
    {
      key: '1',
      label: (
        <NavLink to={'/faq'} className='xl:text-base lg:text-sm md:text-xs uppercase'>
          faq
        </NavLink>
      )
    },
    {
      key: '2',
      label: (
        <NavLink to={'/404'} className='xl:text-base lg:text-sm md:text-xs uppercase'>
          404
        </NavLink>
      )
    },
    {
      key: '3',
      label: (
        <NavLink to={'/career'} className='xl:text-base lg:text-sm md:text-xs uppercase'>
          career
        </NavLink>
      )
    },
    {
      key: '4',
      label: (
        <NavLink to={'/career-detail'} className='xl:text-base lg:text-sm md:text-xs uppercase'>
          career-detail
        </NavLink>
      )
    }
  ]

  // Hook lắng nghe sự kiện cuộn
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Nếu cuộn xuống
        setIsHeaderVisible(false)
      } else {
        // Nếu cuộn lên
        setIsHeaderVisible(true)
      }
      setLastScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll) // Thêm sự kiện cuộn

    return () => {
      window.removeEventListener('scroll', handleScroll) // Dọn dẹp sự kiện khi component unmount
    }
  }, [lastScrollY])

  return (
    <div
      className={`xl:px-48 lg:px-24 md:px-12 sm:px-8 px-4 flex items-center justify-between text-white xl:h-[100px] lg:h-[90px] md:h-[80px] sm:h-[70px] h-[60px] md:py-2 py-1 fixed top-0 inset-x-0 z-50 transition-transform bg-secondary ${
        isHeaderVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <Link to={'/'} className='h-full'>
        <img src={IMAGES.MAIN_LOGO.url} alt={IMAGES.MAIN_LOGO.name} className='h-full object-cover' />
      </Link>
      {/* Menu MD > */}
      <div className='items-center md:flex hidden font-blinker'>
        <NavLink
          to={'/'}
          className={({ isActive }) =>
            `xl:text-base lg:text-sm md:text-xs uppercase xl:px-4 lg:px-3.5 md:px-3 h-full flex items-center justify-center hover:text-hover ease-linear transition-all font-medium ${
              isActive ? 'text-hover' : 'text-white'
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to={'/about-us'}
          className={({ isActive }) =>
            `xl:text-base lg:text-sm md:text-xs uppercase xl:px-4 lg:px-3.5 md:px-3 h-full flex items-center justify-center hover:text-hover ease-linear transition-all font-medium ${
              isActive ? 'text-hover' : 'text-white'
            }`
          }
        >
          About Us
        </NavLink>
        {/* Service */}
        <Dropdown
          menu={{ items: serviceItems }}
          className='group xl:text-base lg:text-sm md:text-xs uppercase xl:px-4 lg:px-3.5 md:px-3 h-full flex items-center justify-center hover:text-hover ease-linear transition-all font-medium'
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              Service
              <UpOutlined className='transform transition group-hover:rotate-180' />
            </Space>
          </a>
        </Dropdown>
        {/* Page */}
        <Dropdown
          menu={{ items: pageItems }}
          className='group xl:text-base lg:text-sm md:text-xs uppercase xl:px-4 lg:px-3.5 md:px-3 h-full flex items-center justify-center hover:text-hover ease-linear transition-all font-medium'
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              Page
              <UpOutlined className='transform transition group-hover:rotate-180' />
            </Space>
          </a>
        </Dropdown>
        <NavLink
          to={'/contact'}
          className={({ isActive }) =>
            `xl:text-base lg:text-sm md:text-xs uppercase xl:px-4 lg:px-3.5 md:px-3 h-full flex items-center justify-center hover:text-hover ease-linear transition-all font-medium ${
              isActive ? 'text-hover' : 'text-white'
            }`
          }
        >
          Contact
        </NavLink>
      </div>
      {/* Menu MD < */}
      <MenuOutlined onClick={() => setIsShowMenu(true)} className='md:hidden sm:text-2xl text-xl block' />
      {isShowMenu && (
        <>
          <BackgroundOverlay onClose={() => setIsShowMenu(false)} className='z-50 h-screen w-screen' />
          <div
            className='font-blinker absolute left-0 top-0 sm:w-1/2 w-2/3 bg-secondary sm:p-6 p-4 h-screen z-50 shadow-md border-r border-overlay overflow-hidden overflow-y-auto scrollbar-thin scrollbar-thumb-blue-primary scrollbar-track-gray-100'
            data-aos='fade-right'
            data-aos-duration='500'
          >
            <Flex justify='space-between' align='center' className='w-full'>
              <Link to={'/'} className='w-1/2'>
                <img src={IMAGES.MAIN_LOGO.url} alt={IMAGES.MAIN_LOGO.name} className='w-full object-cover ' />
              </Link>
              <button
                className='text-end px-2 py-1 sm:px-3 sm:py-1.5 bg-primary rounded-md hover:bg-hover ease-linear transition-all group'
                onClick={() => setIsShowMenu(false)}
              >
                <CloseOutlined className=' transition group-hover:rotate-180' />
              </button>
            </Flex>
            <div className='text-white mt-4'>
              <Link
                className='w-full inline-block py-2 hover:text-hover transition-all ease-linear md:text-base sm:text-lg text-base'
                to={'/'}
              >
                Home
              </Link>
              <Link
                className='w-full inline-block py-2 hover:text-hover transition-all ease-linear md:text-base sm:text-lg text-base'
                to={'/about-us'}
              >
                About us
              </Link>
              <div className='transition-all ease-linear md:text-base sm:text-sm text-xs'>
                {/* Đặt input ở đầu để peer hoạt động */}
                <input type='checkbox' id='service' className='peer hidden' />

                {/* Label điều khiển dropdown */}
                <label
                  htmlFor='service'
                  className='w-full flex items-center justify-between py-3 cursor-pointer hover:text-hover peer-checked:text-hover sm:text-lg text-base'
                >
                  <span>Service</span>
                  <DownOutlined />
                </label>

                {/* Dropdown menu chính */}
                <div className='text-white transition-all ease-in-out overflow-hidden max-h-0 peer-checked:max-h-[600px] peer-checked:opacity-100 opacity-0 overflow-y-auto scrollbar-thin scrollbar-thumb-blue-primary scrollbar-track-gray-100 space-y-2'>
                  {serviceItems.map((service) => (
                    <div key={service.key} className='sm:pl-4 pl-2'>
                      {service.label}
                    </div>
                  ))}
                </div>
              </div>
              <div className='transition-all ease-linear md:text-base sm:text-sm text-xs'>
                {/* Đặt input ở đầu để peer hoạt động */}
                <input type='checkbox' id='page' className='peer hidden' />

                {/* Label điều khiển dropdown */}
                <label
                  htmlFor='page'
                  className='w-full flex items-center justify-between py-3 cursor-pointer hover:text-hover peer-checked:text-hover sm:text-lg text-base'
                >
                  <span>Page</span>
                  <DownOutlined />
                </label>

                {/* Dropdown menu chính */}
                <div className='text-white transition-all ease-in-out overflow-hidden max-h-0 peer-checked:max-h-[600px] peer-checked:opacity-100 opacity-0 overflow-y-auto scrollbar-thin scrollbar-thumb-blue-primary scrollbar-track-gray-100 space-y-2'>
                  {pageItems.map((page) => (
                    <div key={page.key} className='sm:pl-4 pl-2'>
                      {page.label}
                    </div>
                  ))}
                </div>
              </div>
              <Link
                className='w-full inline-block py-2 hover:text-hover transition-all ease-linear md:text-base sm:text-lg text-base'
                to={'/contact'}
              >
                Contact
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Header
