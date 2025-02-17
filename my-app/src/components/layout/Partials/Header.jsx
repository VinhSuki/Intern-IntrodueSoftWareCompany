import { useState, useEffect } from 'react'
import { IMAGES } from '@/constant'
import { UpOutlined } from '@ant-design/icons'
import { Dropdown, Space } from 'antd'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true) // State để theo dõi header
  const [lastScrollY, setLastScrollY] = useState(0) // Vị trí cuộn trang cuối cùng

  const serviceItems = [
    {
      key: '1',
      label: (
        <NavLink to={'/service'} className='xl:text-sm lg:text-xs md:text-2xs sm:text-3xs text-4xs uppercase'>
          Service
        </NavLink>
      )
    },
    {
      key: '2',
      label: (
        <NavLink to={'/service-detail'} className='xl:text-sm lg:text-xs md:text-2xs sm:text-3xs text-4xs uppercase'>
          Service Detail
        </NavLink>
      )
    }
  ]

  const pageItems = [
    {
      key: '1',
      label: (
        <NavLink to={'/faq'} className='xl:text-sm lg:text-xs md:text-2xs sm:text-3xs text-4xs uppercase'>
          faq
        </NavLink>
      )
    },
    {
      key: '2',
      label: (
        <NavLink to={'/404'} className='xl:text-sm lg:text-xs md:text-2xs sm:text-3xs text-4xs uppercase'>
          404
        </NavLink>
      )
    },
    {
      key: '3',
      label: (
        <NavLink to={'/career'} className='xl:text-sm lg:text-xs md:text-2xs sm:text-3xs text-4xs uppercase'>
          career
        </NavLink>
      )
    },
    {
      key: '4',
      label: (
        <NavLink to={'/career-detail'} className='xl:text-sm lg:text-xs md:text-2xs sm:text-3xs text-4xs uppercase'>
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
        setIsHeaderVisible(false);
      } else {
        // Nếu cuộn lên
        setIsHeaderVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll); // Thêm sự kiện cuộn

    return () => {
      window.removeEventListener('scroll', handleScroll); // Dọn dẹp sự kiện khi component unmount
    };
  }, [lastScrollY]);

  return (
    <div
      className={`px-48 flex items-center justify-between text-white h-[100px] py-2 fixed top-0 inset-x-0 z-50 transition-transform duration-300 bg-secondary ${
        isHeaderVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <Link to={'/'} className='h-full'>
        <img src={IMAGES.MAIN_LOGO.url} alt={IMAGES.MAIN_LOGO.name} className='h-full object-cover' />
      </Link>
      <div className='flex items-center'>
        <NavLink
          to={'/'}
          className={({ isActive }) =>
            `xl:text-sm lg:text-xs md:text-2xs sm:text-3xs text-4xs uppercase lg:px-4 h-full flex items-center justify-center hover:text-hover ease-linear transition-all duration-100 font-medium ${
              isActive ? 'text-hover' : 'text-white'
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to={'/about-us'}
          className={({ isActive }) =>
            `xl:text-sm lg:text-xs md:text-2xs sm:text-3xs text-4xs uppercase lg:px-4 h-full flex items-center justify-center hover:text-hover ease-linear transition-all duration-100 font-medium ${
              isActive ? 'text-hover' : 'text-white'
            }`
          }
        >
          About Us
        </NavLink>
        {/* Service */}
        <Dropdown
          menu={{ items: serviceItems }}
          className='group xl:text-sm lg:text-xs md:text-2xs sm:text-3xs text-4xs uppercase lg:px-4 h-full flex items-center justify-center hover:text-hover ease-linear transition-all duration-100 font-medium'
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              Service
              <UpOutlined className='transform transition duration-200 group-hover:rotate-180' />
            </Space>
          </a>
        </Dropdown>
        {/* Page */}
        <Dropdown
          menu={{ items: pageItems }}
          className='group xl:text-sm lg:text-xs md:text-2xs sm:text-3xs text-4xs uppercase lg:px-4 h-full flex items-center justify-center hover:text-hover ease-linear transition-all duration-100 font-medium'
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              Page
              <UpOutlined className='transform transition duration-200 group-hover:rotate-180' />
            </Space>
          </a>
        </Dropdown>
        <NavLink
          to={'/contact'}
          className={({ isActive }) =>
            `xl:text-sm lg:text-xs md:text-2xs sm:text-3xs text-4xs uppercase lg:px-4 h-full flex items-center justify-center hover:text-hover ease-linear transition-all duration-100 font-medium ${
              isActive ? 'text-hover' : 'text-white'
            }`
          }
        >
          Contact
        </NavLink>
      </div>
    </div>
  )
}

export default Header
