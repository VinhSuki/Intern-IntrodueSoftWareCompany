import Card from '@/components/common/Card'
import { CheckCircleFilled, CloudSyncOutlined } from '@ant-design/icons'

const ReasonSection = () => {
  return (
    <div className='bg-transparent py-36 relative z-30'>
      <div className='px-48 w-full grid grid-cols-1 md:grid-cols-2 gap-12'>
        <div className='space-y-8'>
          <h4 className='text-third font-bold text-xl'>Why Choose us</h4>
          <h1 className='text-white font-bold text-7xl'>What we do ?</h1>
          <p className='text-white'>
            Nulla ac eros vel neque mattis maximus. In et feugiat neque, vel porta ante. Morbi at justo justo. Etiam
            eget eros ac enim iaculis sagittis. Maecenas eget sapien purus. Phasellus gravida viverra convallis. Ut
            vitae mauris tincidunt, pharetra turpis condimentum, eleifend ipsum. Proin mollis bibendum odio, eu
            scelerisque lacus fermentum in.
          </p>
          <div className='w-full grid grid-cols-2 gap-4'>
            <div className='space-x-3 text-lg'>
              <CheckCircleFilled className='text-third hover:text-white' />
              <span className='text-white'>Customer Funnel Booster</span>
            </div>
            <div className='space-x-3 text-lg'>
              <CheckCircleFilled className='text-third hover:text-white' />
              <span className='text-white'>Vulputate massa</span>
            </div>
            <div className='space-x-3 text-lg'>
              <CheckCircleFilled className='text-third hover:text-white' />
              <span className='text-white'>Remarketing Blueprint</span>
            </div>
            <div className='space-x-3 text-lg'>
              <CheckCircleFilled className='text-third hover:text-white' />
              <span className='text-white'>Phasellus odio dolor</span>
            </div>
            <div className='space-x-3 text-lg'>
              <CheckCircleFilled className='text-third hover:text-white' />
              <span className='text-white'>Lead Nurturing Scheme</span>
            </div>
            <div className='space-x-3 text-lg'>
              <CheckCircleFilled className='text-third hover:text-white' />
              <span className='text-white'>Aliquam sed finibus</span>
            </div>
          </div>
        </div>
        <div className='w-full grid grid-cols-2 gap-x-6'> 
          <div><Card  fade='bottom' title='Data Driven' content='We bring the right people together to challenge established thinking and drive transform in 2020' Icon={CloudSyncOutlined}/></div>
          <div className='mt-10'><Card title='Data Driven' content='We bring the right people together to challenge established thinking and drive transform in 2020' bgColor='bg-third' textColor='text-secondary' bgHoverColor='bg-hover' textHoverColor='text-white' />  </div>
          <div><Card title='Data Driven' content='We bring the right people together to challenge established thinking and drive transform in 2020' /></div>
          <div className='mt-10'><Card title='Data Driven' content='We bring the right people together to challenge established thinking and drive transform in 2020' />  </div>
        </div>
      </div>
    </div>
  )
}

export default ReasonSection
