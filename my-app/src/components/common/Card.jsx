import clsx from 'clsx'
import { Link } from 'react-router-dom'

const Card = ({
  title = '',
  content = '',
  bgColor = 'bg-primary',
  textColor = 'text-white',
  Icon,
  fade = '',
  bgHoverColor = '',
  textHoverColor = '',
}) => {
  return (
    <Link
      to={'/'}
      className={clsx(
        'relative group overflow-hidden rounded-md px-8 py-12 w-full transition-all duration-500 ease-in-out block',
        bgColor,
        textColor,
        textHoverColor && `hover:${textHoverColor}`
      )}
    >
      {/* Icon */}
      {Icon && (
        <Icon className="absolute text-7xl transition-all duration-500 ease-in-out -bottom-24 group-hover:bottom-2 right-2 text-white/50" />
      )}

      {/* Nội dung */}
      <h4 className="xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs font-semibold mb-4 relative z-10">
        {title}
      </h4>
      <p className="relative z-10">{content}</p>

      {/* Layer hiệu ứng fade */}
      <div
        className={clsx(
          'absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100',
          bgHoverColor,
          fade === 'right' && 'before:absolute before:inset-0 before:bg-black/20 before:translate-x-full group-hover:before:translate-x-0 before:transition-transform before:duration-500 before:ease-in-out',
          fade === 'left' && 'before:absolute before:inset-0 before:bg-black/20 before:-translate-x-full group-hover:before:translate-x-0 before:transition-transform before:duration-500 before:ease-in-out',
          fade === 'top' && 'before:absolute before:inset-0 before:bg-black/20 before:-translate-y-full group-hover:before:translate-y-0 before:transition-transform before:duration-500 before:ease-in-out',
          fade === 'bottom' && 'before:absolute before:inset-0 before:bg-black/20 before:translate-y-full group-hover:before:translate-y-0 before:transition-transform before:duration-500 before:ease-in-out'
        )}
      ></div>
    </Link>
  )
}

export default Card
