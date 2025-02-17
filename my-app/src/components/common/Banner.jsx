import { IMAGES } from '@/constant'
import { Button, Col, Flex, Input, Row } from 'antd'

const Banner = () => {
  return (
    <div className='relative z-20 bg-secondary h-screen'>
      <div className='absolute inset-0'>
        <img
          src={IMAGES.MAIN_OVERLAY.url}
          alt={IMAGES.MAIN_OVERLAY.name}
          className='h-full w-full object-cover absolute inset-0'
        />
        <img
          src={IMAGES.MAIN_BACKGROUND.url}
          alt={IMAGES.MAIN_BACKGROUND.name}
          className='h-full w-full object-cover absolute inset-0'
        />
      </div>
      <Row className='absolute px-48 top-1/2 transform -translate-y-1/2 w-full'>
        <Col span={12} className='space-y-8'>
          <h4 className='text-third font-bold text-xl'>Customised tech service</h4>
          <h1 className='text-white font-bold text-7xl'>Innovative future of digital world</h1>
          <p className='text-white'>Nulla quis feugiat mi. Mauris tincidunt dui massa, non feugiat ex blandit vel. Nam lacinia dapibus nisi, ac convallis est tempor ac. </p>
          <Flex gap={20}>
              <Input placeholder='Your Email Address'/>
              <Button size='large' type='primary'>
                  Sign Up
              </Button>
          </Flex>
        </Col>
    </Row>
    </div>
  )
}

export default Banner
