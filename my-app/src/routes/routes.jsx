import Banner from '@/components/common/Banner'
import BannerBreadCrumb from '@/components/common/BannerBreadCrumb'
import AboutUs from '@/pages/About-Us'
import Contact from '@/pages/Contact'
import Home from '@/pages/Home'
import Service from '@/pages/Service'
import ServiceDetail from '@/pages/ServiceDetail'
import { useRoutes } from 'react-router-dom'
import PageTitle from '../components/common/PageTitle'
import DefaultLayout from '../components/layout/DefaultLayout'

const AppRouter = () => {
  return useRoutes([
    {
      path: '/',
      element: <DefaultLayout />,
      children: [
        {
          index: true,
          path: '',
          element: (
            <>
              <PageTitle title='Home' />
              <Banner />
              <Home />
            </>
          )
        },
        {
          path: '/about-us',
          element: (
            <>
              <PageTitle title='About Us' />
              <BannerBreadCrumb title='About Us' />
              <AboutUs />
            </>
          )
        },
        {
          path: '/service',
          element: (
            <>
              <PageTitle title='Service' />
              <BannerBreadCrumb title='Service' />
              <Service />
            </>
          )
        },
        {
          path: '/service-detail',
          element: (
            <>
              <PageTitle title='Service Detail' />
              <BannerBreadCrumb title='Service Detail' />
              <ServiceDetail />
            </>
          )
        },
        {
          path: '/contact',
          element: (
            <>
              <PageTitle title='Contact' />
              <BannerBreadCrumb title='Contact' />
              <Contact />
            </>
          )
        }
      ]
    }
  ])
}

export default AppRouter
