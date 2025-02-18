import { Outlet } from 'react-router-dom'
import Footer from './Partials/Footer'
import Header from './Partials/Header'
import Overlay from './Partials/Overlay'

const DefaultLayout = () => {
  return (
    <>
      <Overlay />
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default DefaultLayout
