import { InfoCircleOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons'
import { Button, Input, Form, Tag } from 'antd'
import { useState } from 'react'
import Loader from './Loader'

// eslint-disable-next-line react/prop-types
const GetInTouchForm = ({ title = '', shortContent = '', description = '', hasContact = true }) => {
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)
  const [isShowTag, setIsShowTag] = useState(false)

  const onFinish = async (values) => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      form.resetFields()
      setIsShowTag(true)
    }, [500])
    console.log('Form values:', values)
  }
  return (
    <div className='xl:px-48 lg:px-24 md:px-12 sm:px-8 px-4 md:py-20 sm:py-16 py-12 lg:flex lg:flex-col lg:justify-center h-full'>
      <div className=' grid grid-cols-1 lg:grid-cols-2 xl:space-x-6 lg:space-x-5 space-x-0 lg:space-y-0 md:space-y-5 space-y-4'>
        <div data-aos='fade-right' data-aos-anchor-placement='top-center'>
          <div className='font-blinker h-full  xl:space-y-6 lg:space-y-5 md:space-y-6 sm:space-y-5 space-y-4'>
            <h4 className='text-primary font-semibold xl:text-xl lg:text-lg md:text-xl sm:text-lg text-base'>
              {title}
            </h4>
            <h1 className='text-secondary font-bold xl:text-5xl lg:text-4xl md:text-5xl sm:text-4xl text-3xl'>
              {shortContent}
            </h1>
            <p className='text-text xl:text-sm lg:text-xs md:text-sm sm:text-xs text-2xs'>{description}</p>
            {hasContact && (
              <div className='grid sm:grid-cols-2 grid-cols-1 lg:gap-x-2 sm:gap-x-1 lg:gap-y-4 md:gap-y-6 sm:gap-y-5 gap-y-4  gap-x-0 align-top'>
                <div className='flex lg:gap-x-3 md:gap-x-6 sm:gap-x-4 gap-x-2 items-start'>
                  <PhoneOutlined className='text-start text-primary  xl:text-2xl lg:text-xl md:text-2xl sm:text-xl text-lg ' />
                  <div className='flex-1 items-center lg:space-y-2 space-y-1'>
                    <h4 className='font-semibold text-secondary xl:text-base lg:text-sm md:text-base sm:text-sm text-xs'>
                      0869 610 949
                    </h4>
                  </div>
                </div>
                <div className='flex lg:gap-x-3 md:gap-x-6 sm:gap-x-4 gap-x-2 items-start'>
                  <MailOutlined className='text-start text-primary  xl:text-2xl lg:text-xl md:text-2xl sm:text-xl text-lg ' />
                  <div className='flex-1 items-center lg:space-y-2 space-y-1'>
                    <h4 className='font-semibold text-secondary xl:text-base lg:text-sm md:text-base sm:text-sm text-xs'>
                      dinhquangvinh2804@gmail.com
                    </h4>
                  </div>
                </div>
                <div className='flex lg:gap-x-3 md:gap-x-6 sm:gap-x-4 gap-x-2 items-start'>
                  <InfoCircleOutlined className='text-start text-primary  xl:text-2xl lg:text-xl md:text-2xl sm:text-xl text-lg ' />
                  <div className='flex-1 items-center lg:space-y-2 space-y-1'>
                    <h4 className='font-semibold text-secondary xl:text-base lg:text-sm md:text-base sm:text-sm text-xs'>
                      Headquarters
                    </h4>
                    <p className='text-text xl:text-sm lg:text-xs md:text-sm sm:text-xs text-2xs'>
                      1633 Broadway, 41st Floor, New York, NY 10019
                    </p>
                  </div>
                </div>
                <div className='flex lg:gap-x-3 md:gap-x-6 sm:gap-x-4 gap-x-2 items-start'>
                  <InfoCircleOutlined className='text-start text-primary  xl:text-2xl lg:text-xl md:text-2xl sm:text-xl text-lg ' />
                  <div className='flex-1 items-center lg:space-y-2 space-y-1'>
                    <h4 className='font-semibold text-secondary xl:text-base lg:text-sm md:text-base sm:text-sm text-xs'>
                      Chicago Office
                    </h4>
                    <p className='text-text xl:text-sm lg:text-xs md:text-sm sm:text-xs text-2xs'>
                      233 S Wacker Dr, Suite 4020, Chicago, IL 60606
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className='relative' data-aos='zoom-in' data-aos-anchor-placement='top-center'>
          <Form form={form} layout='vertical' onFinish={onFinish} onFinishFailed={()=>setIsShowTag(false)} className='bg-white xl:p-6 lg:p-5 md:p-6 sm:p-5 p-4 rounded-lg shadow-md'>
            <div className='grid grid-cols-2 lg:gap-4 sm:gap-3 gap-2'>
              {/* Full Name */}
              <Form.Item name='fullName' rules={[{ required: true, message: 'Please enter your full name!' }]}>
                <Input autoComplete='off' placeholder='Enter your full name' className='xl:px-6 xl:py-4 lg:px-5 lg:py-3 md:px-6 md:py-4 sm:px-5 sm:py-3 px-4 py-2 xl:text-base lg:text-sm md:text-base sm:text-sm text-xs' />
              </Form.Item>

              {/* Email */}
              <Form.Item
                name='email'
                rules={[
                  { required: true, message: 'Please enter your email!' },
                  { type: 'email', message: 'Please enter a valid email!' }
                ]}
              >
                <Input autoComplete='off' placeholder='Enter your email' className='xl:px-6 xl:py-4 lg:px-5 lg:py-3 md:px-6 md:py-4 sm:px-5 sm:py-3 px-4 py-2 xl:text-base lg:text-sm md:text-base sm:text-sm text-xs' />
              </Form.Item>
            </div>

            {/* Subject */}
            <Form.Item name='subject' rules={[{ required: true, message: 'Please enter the subject!' }]}>
              <Input autoComplete='off' placeholder='Enter subject' className='xl:px-6 xl:py-4 lg:px-5 lg:py-3 md:px-6 md:py-4 sm:px-5 sm:py-3 px-4 py-2 xl:text-base lg:text-sm md:text-base sm:text-sm text-xs' />
            </Form.Item>

            {/* Message */}
            <Form.Item name='message' rules={[{ required: true, message: 'Please enter your message!' }]}>
              <Input.TextArea rows={4} placeholder='Enter your message' className='xl:px-6 xl:py-4 lg:px-5 lg:py-3 md:px-6 md:py-4 sm:px-5 sm:py-3 px-4 py-2 xl:text-base lg:text-sm md:text-base sm:text-sm text-xs' />
            </Form.Item>

            {/* Submit Button */}
            <Form.Item>
              <Button type='primary' htmlType='submit' className='xl:text-base lg:text-sm md:text-base sm:text-sm text-xs xl:px-10 xl:py-5 lg:px-8 lg:py-4 md:px-10 md:py-5 sm:px-8 sm:py-4 px-6 py-3'>
                Submit
              </Button>
            </Form.Item>
            {isShowTag && (   
              <Tag
                className='xl:text-base lg:text-sm md:text-base sm:text-sm text-xs xl:p-2 lg:p-1.5 md:p-1 sm:p-1.5 p-1'
                color='green'
                data-aos='fade-up'
                data-aos-duration = '500'
              >
                Thank you for your message. It has been sent.
              </Tag>
            )}
          </Form>
          {loading && <Loader type='inside' />}
        </div>
      </div>
    </div>
  )
}

export default GetInTouchForm
