import Banner from '@/components/common/Banner'
import BannerBreadCrumb from '@/components/common/BannerBreadCrumb'
import AboutUs from '@/pages/AboutUs'
import Contact from '@/pages/Contact'
import Home from '@/pages/Home'
import Service from '@/pages/Service'
import ServiceDetail from '@/pages/ServiceDetail'
import { useRoutes } from 'react-router-dom'
import PageTitle from '../components/common/PageTitle'
import DefaultLayout from '../components/layout/DefaultLayout'
import Faq from '@/pages/Faq'
import Career from '@/pages/Career'
import CareerDetail from '@/pages/CareerDetail'

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
        },
        {
          path: '/faq',
          element: (
            <>
              <PageTitle title='FAQ' />
              <BannerBreadCrumb title='FAQ' />
              <Faq />
            </>
          )
        },
        {
          path: '/404',
          element: (
            <>
              <PageTitle title='404' />
              <Banner type='404'></Banner>
            </>
          )
        },
        {
          path: '/career',
          element: (
            <>
              <PageTitle title='Career' />
              <BannerBreadCrumb title='We are hiring' page={'Career'} />
              <Career />
            </>
          )
        },
        {
          path: '/career-detail',
          element: (
            <>
              <PageTitle title='Career Detail' />
              <BannerBreadCrumb title='Career Detail' />
              <CareerDetail />
            </>
          )
        },
        {
          path: '*',
          element: (
            <>
              <PageTitle title='404' />
              <Banner type='404' />
            </>
          )
        }
      ]
    }
  ])
}

export default AppRouter
