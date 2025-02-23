import { DownOutlined, UpOutlined } from '@ant-design/icons'

// eslint-disable-next-line react/prop-types
const DropdownInfo = ({ name, title, content, isActive, onToggle }) => {
  return (
    <div className="transition-all ease-linear w-full">
      {/* Input checkbox để sử dụng peer (vẫn có mặt để hỗ trợ hiệu ứng CSS, nhưng trạng thái được điều khiển bởi isActive) */}
      <input
        type="checkbox"
        id={name}
        className="peer hidden"
        checked={isActive}
        readOnly
      />

      {/* Label điều khiển dropdown */}
      <label
        htmlFor={name}
        onClick={onToggle}
        className="font-semibold w-full flex items-center justify-between xl:py-4 xl:px-8 cursor-pointer text-white bg-secondary hover:bg-primary peer-checked:bg-primary peer-checked:hover:bg-secondary xl:text-base lg:text-sm md:text-base sm:text-sm text-xs transition-all ease-linear"
      >
        <span>{title}</span>
        <span className="relative w-4 h-4 flex items-center justify-center">
          {isActive ? <UpOutlined className="transition-all duration-300" /> : <DownOutlined className="transition-all duration-300" />}
        </span>
      </label>

      {/* Dropdown menu chính */}
      <div
        className={`text-white transition-all duration-300 ease-in-out overflow-hidden ${
          isActive ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        } overflow-y-auto scrollbar-thin scrollbar-thumb-blue-primary scrollbar-track-gray-100`}
      >
        <p className="xl:text-base xl:py-8 xl:px-16 lg:text-sm md:text-base sm:text-sm text-xs text-text">{content}</p>
      </div>
    </div>
  )
}

export default DropdownInfo
