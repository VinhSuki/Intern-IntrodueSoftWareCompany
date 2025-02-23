import { Link } from "react-router-dom"

// eslint-disable-next-line react/prop-types
const BannerBreadCrumb = ({ title = '',page = title }) => {
  return (
    <div className='xl:mt-[100px] lg:mt-[90px] md:mt-[80px] sm:mt-[70px] mt-[60px] bg-transparent xl:h-[400px] lg:h-[350px] md:h-[300px] sm:h-[250px] h-[200px] relative z-20 flex items-center flex-col justify-center font-blinker gap-6'>
      <h1 className='xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl text-3xl text-white font-semibold'>{title}</h1>
      <p className="xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs font-bold text-white"><Link to={'/'} className="text-third hover:text-hover transition">Home</Link><span> / </span><span>{page}</span></p>
    </div>
  )
}

export default BannerBreadCrumb
