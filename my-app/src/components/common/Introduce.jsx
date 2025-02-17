import { IMAGES } from '@/constant'
import { PlayCircleOutlined } from '@ant-design/icons'
import { Button, Col, Flex, FloatButton, Row, Space, Tag } from 'antd'
import React from 'react'

// eslint-disable-next-line react/prop-types
const Introduce = ({ className = '', title = '', shortContent = '', description = '', children, tag = '' }) => {
  return (
    <div className={className}>
      <div className='px-48 h-full'>
        <Row className='h-full'>
          <Col span={12} className='relative h-full'>
            <img
              src={IMAGES.INTRODUCE_1.url}
              alt={IMAGES.INTRODUCE_1.name}
              className='absolute right-0 object-cover top-0 h-2/3'
            />
            <img
              src={IMAGES.INTRODUCE_2.url}
              alt={IMAGES.INTRODUCE_2.name}
              className='absolute left-0 object-cover bottom-0 h-2/3'
            />
            {tag && (
              <Tag className='text-xl font-semibold z-50 absolute top-5 p-2' color='blue'>
                {tag}
              </Tag>
            )}
          </Col>
          <Col span={12}>
            <Flex justify='center' vertical={true} className='h-full ml-6' gap={30}>
              <h4 className='text-primary font-semibold text-xl'>{title}</h4>
              <h1 className='text-secondary font-bold text-5xl'>{shortContent}</h1>
              <p className='text-text'>
               {description}
              </p>
             {children}
            </Flex>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Introduce
