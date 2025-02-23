import { ArrowRightOutlined } from '@ant-design/icons'
import clsx from 'clsx'
import { Link } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
const Card = ({
  isShowIcon = false,
  title = '',
  content = '',
  bgColor = 'bg-primary',
  textColor = 'text-white',
  Icon,
  fade = '',
  bgHoverColor = '',
  textHoverColor = '',
  className = '',
  tag = '',
  linkTitle = '',
  link = ''
}) => {
  return (
    <div
      className={clsx(
        'group shadow-lg relative group overflow-hidden rounded-md xl:px-8 xl:py-12 lg:px-6 lg:py-10 md:px-8 md:py-12 sm:px-6 sm:py-10 px-4 py-8 w-full transition-all duration-500 ease-in-out block',
        bgColor,
        textColor,
        textHoverColor && `hover:${textHoverColor}`,
        isShowIcon && 'text-center',
        className
      )}
    >
      {/* Icon */}
      {tag && (
        <div className='absolute z-10 xl:text-base lg:text-sm md:text-base sm:text-sm text-xs top-0 left-0 bg-secondary xl:px-4 xl:py-2 lg:px-3 lg:py-1.5 md:px-4 md:py-2 sm:px-3 sm:py-1.5 px-2 py-1 rounded-b-md'>
          {tag}
        </div>
      )}
      {/* Icon */}
      {Icon && (
        <Icon className='absolute z-10 xl:text-7xl lg:text-6xl md:text-7xl sm:text-6xl text-5xl transition-all duration-500 ease-in-out -bottom-24 group-hover:bottom-2 right-2 text-white/50' />
      )}
      {isShowIcon && <Icon className='relative z-10 xl:text-5xl lg:text-4xl md:text-5xl sm:text-4xl text-3xl' />}
      {/* Nội dung */}
      <h4 className='xl:text-xl lg:text-lg md:text-xl sm:text-lg text-base font-semibold mb-4 relative z-10'>
        {title}
      </h4>
      <p className='relative z-10 xl:text-base lg:text-sm md:text-base sm:text-sm text-xs'>{content}</p>
      {link && linkTitle && (
        <Link to={link} className='relative z-10 flex items-center justify-center xl:mt-8 lg:mt-7 md:mt-8 sm:mt-7 mt-6 font-semibold'>
          <span>{linkTitle}</span>
          <ArrowRightOutlined />
        </Link>
      )}
      {/* Layer hiệu ứng fade */}
      <div
        className={clsx(
          'absolute inset-0 opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100',
          bgHoverColor,
          fade === 'right' && 'translate-x-full group-hover:translate-x-0',
          fade === 'left' && '-translate-x-full group-hover:translate-x-0',
          fade === 'top' && '-translate-y-full group-hover:translate-y-0',
          fade === 'bottom' && 'translate-y-full group-hover:translate-y-0'
        )}
      ></div>
    </div>
  )
}

export default Card
