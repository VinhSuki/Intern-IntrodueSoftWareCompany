import Banner from '@/components/common/Banner'
import BannerBreadCrumb from '@/components/common/BannerBreadCrumb'
import Home from '@/pages/Home'
import { useRoutes } from 'react-router-dom'
import PageTitle from '../components/common/PageTitle'
import DefaultLayout from '../components/layout/DefaultLayout'
import AboutUs from '@/pages/About-Us'

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
              <Banner/>
              <Home />
            </>
          )
        },
        {
          path: '/about-us',
          element: (
            <>
              <PageTitle title='About Us' />
              <BannerBreadCrumb title='About Us'/>
              <AboutUs />
            </>
          )
        },
      ]
    }
  ])
}

export default AppRouter
