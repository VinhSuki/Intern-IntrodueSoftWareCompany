import { CheckCircleFilled } from '@ant-design/icons'
import { Col, Row } from 'antd'

const ReasonSection = () => {
  return (
    <div className='bg-transparent py-36 relative z-30'>
      <Row className='px-48 w-full'>
        <Col span={12} className='space-y-8'>
          <h4 className='text-third font-bold text-xl'>Why Choose us</h4>
          <h1 className='text-white font-bold text-7xl'>What we do ?</h1>
          <p className='text-white'>
            Nulla ac eros vel neque mattis maximus. In et feugiat neque, vel porta ante. Morbi at justo justo. Etiam
            eget eros ac enim iaculis sagittis. Maecenas eget sapien purus. Phasellus gravida viverra convallis. Ut
            vitae mauris tincidunt, pharetra turpis condimentum, eleifend ipsum. Proin mollis bibendum odio, eu
            scelerisque lacus fermentum in.
          </p>
          <Row className='w-full' gutter={[0, 12]}>
            <Col span={12} className='space-x-3 text-lg'>
              <CheckCircleFilled className='text-third hover:text-white' />
              <span className='text-white'>Customer Funnel Booster</span>
            </Col>
            <Col span={12} className='space-x-3 text-lg'>
              <CheckCircleFilled className='text-third hover:text-white' />
              <span className='text-white'>Vulputate massa</span>
            </Col>
            <Col span={12} className='space-x-3 text-lg'>
              <CheckCircleFilled className='text-third hover:text-white' />
              <span className='text-white'>Remarketing Blueprint</span>
            </Col>
            <Col span={12} className='space-x-3 text-lg'>
              <CheckCircleFilled className='text-third hover:text-white' />
              <span className='text-white'>Phasellus odio dolor</span>
            </Col>
            <Col span={12} className='space-x-3 text-lg'>
              <CheckCircleFilled className='text-third hover:text-white' />
              <span className='text-white'>Lead Nurturing Scheme</span>
            </Col>
            <Col span={12} className='space-x-3 text-lg'>
              <CheckCircleFilled className='text-third hover:text-white' />
              <span className='text-white'>Aliquam sed finibus</span>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default ReasonSection
