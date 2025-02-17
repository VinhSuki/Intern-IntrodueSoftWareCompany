import Introduce from '@/components/common/Introduce'
import { PlayCircleOutlined } from '@ant-design/icons'
import { Button, Space } from 'antd'
import ReasonSection from './components/ReasonSection'

const Home = () => {
  return (
    <div>
      <div className='bg-white py-12 relative z-30'>
        <Introduce
          className='h-[600px] py-24'
          tag='The best tech company in the year'
          title='Welcome to Virtu company'
          shortContent='The best tech company'
          description='Phasellus odio dolor, tincidunt sed rutrum at, condimentum ac ipsum. Nullam congue pretium nisl. Curabitur at sem et leo dictum pretium. Morbi in rutrum tellus. Donec interdum ut felis et rutrum. Proin vitae venenatis sem. Aenean mattis malesuada dolor eget aliquam.'
        >
          <Space size={30}>
            <div className='relative z-30 w-14 h-14'>
              <button className='z-30 absolute rounded-full w-full h-full bg-third text-white text-lg'>
                <PlayCircleOutlined />
              </button>
              <span className='absolute z-10 inset-[8px] bg-primary animate-ping rounded-full'></span>
            </div>
            <Button size='large' type='primary'>
              Read More
            </Button>
          </Space>
        </Introduce>
      </div>
      <ReasonSection />
    </div>
  )
}

export default Home
