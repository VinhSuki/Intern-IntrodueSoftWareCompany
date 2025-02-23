import { DATA, IMAGES } from '@/constant'
import { LineOutlined } from '@ant-design/icons'
import { List } from 'antd'

const CareerDetail = () => {
  return (
    <div>
      <section className='h-auto bg-white relative z-30 xl:pt-28 lg:pt-24 md:pt-20 sm:pt-16 pt-12 xl:pb-56 lg:pb-48 md:pb-40 sm:pb-32 pb-24'>
        <div className='xl:px-48 lg:px-24 md:px-12 sm:px-8 px-4 h-full xl:space-y-16 lg:space-y-14 md:space-y-16 sm:space-y-14 space-y-12'>
          <div className='gap-2 h-full grid grid-cols-1 lg:grid-cols-2 xl:space-x-6 lg:space-x-5 space-x-0 lg:space-y-0 md:space-y-5 space-y-4'>
            <img src={IMAGES.DESIGN.url} alt={IMAGES.DESIGN.name} className='w-full h-full object-cover' />
            <div className='font-blinker xl:space-y-6 lg:space-y-5 md:space-y-6 sm:space-y-5 space-y-4'>
              <h4 className='text-primary font-semibold xl:text-2xl lg:text-xl md:text-2xl sm:text-xl text-lg'>
                Are you what we looking for ?
              </h4>
              <h1 className='text-secondary font-bold xl:text-6xl lg:text-5xl md:text-6xl sm:text-5xl text-4xl'>
                Full-stack Developer
              </h1>
              <p className='text-text xl:text-base lg:text-sm md:text-base sm:text-sm text-xs'>
                We are looking for a Full-stack Developer to join our team. If you love to code and solve problems, then
                you are on the right track. You will develop our front-end and back-end applications of our product.
              </p>
              <h6 className='text-secondary font-semibold  xl:text-2xl lg:text-xl md:text-2xl sm:text-xl text-lg'>
                Closing at
              </h6>
              <p className='text-center text-text xl:text-base lg:text-sm md:text-base sm:text-sm text-xs'>
                <span>Countdown is finished!</span>
                <br />
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry&apos;s standard dummy text ever since the 1500s
              </p>
            </div>
            <List
              split={false}
              header={
                <h3 className='text-secondary font-semibold  xl:text-2xl lg:text-xl md:text-2xl sm:text-xl text-lg'>
                  Job description and responsibilities
                </h3>
              }
              dataSource={DATA.job}
              renderItem={(item) => (
                <List.Item className='xl:ml-4 lg:ml-3 md:ml-4 sm:ml-3 ml-2'>
                  <List.Item.Meta
                    avatar={<LineOutlined className='text-secondary xl:text-xl lg:text-lg md:text-xl sm:text-lg text-base' />}
                    title={
                      <span className='text-text xl:text-base lg:text-sm md:text-base sm:text-sm text-xs'>{item}</span>
                    }
                  />
                </List.Item>
              )}
            />
            <List
              split={false}
              header={
                <h3 className='text-secondary font-semibold  xl:text-2xl lg:text-xl md:text-2xl sm:text-xl text-lg'>
                  Requirements
                </h3>
              }
              dataSource={DATA.requirement}
              renderItem={(item) => (
                <List.Item className='xl:ml-4 lg:ml-3 md:ml-4 sm:ml-3 ml-2'>
                  <List.Item.Meta
                    avatar={<LineOutlined className='text-secondary xl:text-xl lg:text-lg md:text-xl sm:text-lg text-base' />}
                    title={
                      <span className='text-text xl:text-base lg:text-sm md:text-base sm:text-sm text-xs'>{item}</span>
                    }
                  />
                </List.Item>
              )}
            />
            <List
              split={false}
              header={
                <h3 className='text-secondary font-semibold  xl:text-2xl lg:text-xl md:text-2xl sm:text-xl text-lg'>
                  What we offer to you ?
                </h3>
              }
              dataSource={DATA.offer}
              renderItem={(item) => (
                <List.Item className='xl:ml-4 lg:ml-3 md:ml-4 sm:ml-3 ml-2'>
                  <List.Item.Meta
                    avatar={<LineOutlined className='text-secondary xl:text-xl lg:text-lg md:text-xl sm:text-lg text-base' />}
                    title={
                      <span className='text-text xl:text-base lg:text-sm md:text-base sm:text-sm text-xs'>{item}</span>
                    }
                  />
                </List.Item>
              )}
            />
            <div className='font-blinker xl:space-y-6 lg:space-y-5 md:space-y-6 sm:space-y-5 space-y-4'>
              <h1 className='text-secondary font-bold  xl:text-4xl lg:text-3xl md:text-4xl sm:text-3xl text-2xl'>
              Interesting to join our squad ?
              Send your application now
              </h1>
              <p className='text-text xl:text-base lg:text-sm md:text-base sm:text-sm text-xs'>
                We are looking for a Full-stack Developer to join our team. If you love to code and solve problems, then
                you are on the right track. You will develop our front-end and back-end applications of our product.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CareerDetail
