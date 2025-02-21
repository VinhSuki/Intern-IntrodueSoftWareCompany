import './Loader.css'
// eslint-disable-next-line react/prop-types
const Loader = ({ type = 'full' }) => {
  return (
    <div
      className={`${
        type === 'full'
          ? 'fixed inset-0' // Chiếm toàn bộ màn hình
          : 'absolute top-0 bottom-0 left-0 right-0' // Đè trong một container
      } flex items-center justify-center bg-transparent bg-opacity-50 backdrop-blur-sm z-40`}
    >
      <div className='spinner'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default Loader
