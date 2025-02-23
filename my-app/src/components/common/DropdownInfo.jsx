import { DownOutlined, UpOutlined } from '@ant-design/icons'

// eslint-disable-next-line react/prop-types
const DropdownInfo = ({ name, title, content, isActive, onToggle }) => {
  return (
    <div className='transition-all ease-linear w-full'>
      {/* Input checkbox để kiểm soát dropdown */}
      <input
        type='checkbox' // Sử dụng checkbox thay vì radio để cho phép đóng mở chính nó
        id={name}
        className='peer hidden'
        checked={isActive}
        onChange={onToggle} // Cập nhật state ở component cha
      />

      {/* Label điều khiển dropdown */}
      <label
        htmlFor={name}
        className='font-semibold w-full flex items-center justify-between xl:py-4 xl:px-8 lg:py-3 lg:px-6 md:py-4 md:px-8 sm:py-3 sm:px-6 py-2 px-4 cursor-pointer text-white bg-secondary hover:bg-primary peer-checked:bg-primary peer-checked:hover:bg-secondary xl:text-base lg:text-sm md:text-base sm:text-sm text-xs transition-all ease-linear'
      >
        <span>{title}</span>
        {isActive ? <UpOutlined /> : <DownOutlined />}
      </label>

      {/* Dropdown menu chính */}
      <div className='text-white transition-all duration-300 ease-in-out overflow-hidden max-h-0 peer-checked:max-h-[600px] peer-checked:opacity-100 opacity-0 overflow-y-auto scrollbar-thin scrollbar-thumb-blue-primary scrollbar-track-gray-100'>
        <p className='xl:text-base lg:text-sm md:text-base sm:text-sm text-xs xl:py-8 xl:px-16 lg:py-6 lg:px-12 md:py-8 md:px-16 sm:py-6 sm:px-12 py-4 px-8 text-text'>{content}</p>
      </div>
    </div>
  )
}

export default DropdownInfo
