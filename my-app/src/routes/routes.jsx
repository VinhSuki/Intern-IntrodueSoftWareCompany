import { lazy, Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import PageTitle from '../components/common/PageTitle'
import DefaultLayout from '../components/layout/DefaultLayout'
import Home from '@/pages/Home'
import Banner from '@/components/common/Banner'

// eslint-disable-next-line react/display-name
const Loadable = (Component) => (props) =>
  (
    <Suspense fallback={<div>Loading</div>}>
      <Component {...props} />
    </Suspense>
  )

// const Profile = Loadable(lazy(() => import('@/pages/Profile/Profile')))

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
              <PageTitle title='Trang chủ' />
              <Banner/>
              <Home />
            </>
          )
        },
      ]
    }
  ])
}

export default AppRouter
