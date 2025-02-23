import Card from '@/components/common/Card'
import Introduce from '@/components/common/Introduce'
import { CloudSyncOutlined } from '@ant-design/icons'
import { Button } from 'antd'

const Career = () => {
  return (
    <div className='bg-white relative z-30 xl:py-28 lg:py-24 md:py-20 sm:py-16 py-12'>
      <Introduce
        className='xl:mb-16 lg:mb-14 md:mb-16 sm:mb-14 mb-12'
        title='Join our virtu'
        shortContent='Develop your skill and knowledge'
        description='Donec imperdiet porta pulvinar. Etiam gravida diam id dolor imperdiet rutrum. Cras quis nisi ut urna fringilla vulputate. Fusce fermentum ligula ut purus convallis, eu placerat odio tincidunt.'
      >
        <div>
          <Button className='xl:px-6 xl:py-5 lg:px-5 lg:py-4 md:px-4 md:py-3 sm:px-5 sm:py-4 px-4 py-3' type='primary'>
            Send your Application
          </Button>
        </div>
      </Introduce>
      <div className='xl:px-48 lg:px-24 md:px-12 sm:px-8 px-4'>
        <div className='w-full grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:gap-8 lg:gap-6 md:gap-8 sm:gap-6 gap-4'>
          <div data-aos='zoom-in' data-aos-delay={100}>
            <Card
              title='Data Driven'
              content='We bring the right people together to challenge established thinking and drive transform in 2020'
              Icon={CloudSyncOutlined}
              bgColor='bg-primary'
              textColor='text-white'
              link='#'
              linkTitle='Requirements'
              tag='Closing'
              isShowIcon={true}
            />
          </div>
          <div data-aos='zoom-in' data-aos-delay={200}>
            <Card
              fade='right'
              title='Data Driven'
              content='We bring the right people together to challenge established thinking and drive transform in 2020'
              Icon={CloudSyncOutlined}
              bgColor='white'
              textColor='text-secondary'
              textHoverColor='text-white'
              bgHoverColor='bg-primary'
              isShowIcon={true}
              link='#'
              linkTitle='Requirements'
            />
          </div>
          <div data-aos='zoom-in' data-aos-delay={300}>
            <Card
              fade='right'
              title='Data Driven'
              content='We bring the right people together to challenge established thinking and drive transform in 2020'
              Icon={CloudSyncOutlined}
              bgColor='white'
              textColor='text-secondary'
              textHoverColor='text-white'
              bgHoverColor='bg-primary'
              isShowIcon={true}
              link='#'
              linkTitle='Requirements'
            />
          </div>
          <div data-aos='zoom-in' data-aos-delay={400}>
            <Card
              fade='right'
              title='Data Driven'
              content='We bring the right people together to challenge established thinking and drive transform in 2020'
              Icon={CloudSyncOutlined}
              bgColor='white'
              textColor='text-secondary'
              textHoverColor='text-white'
              bgHoverColor='bg-primary'
              isShowIcon={true}
              link='#'
              linkTitle='Requirements'
            />
          </div>
          <div data-aos='zoom-in' data-aos-delay={500}>
            <Card
              fade='right'
              title='Data Driven'
              content='We bring the right people together to challenge established thinking and drive transform in 2020'
              Icon={CloudSyncOutlined}
              bgColor='white'
              textColor='text-secondary'
              textHoverColor='text-white'
              bgHoverColor='bg-primary'
              isShowIcon={true}
              link='#'
              linkTitle='Requirements'
            />
          </div>
          <div data-aos='zoom-in' data-aos-delay={600}>
            <Card
              title='Data Driven'
              content='We bring the right people together to challenge established thinking and drive transform in 2020'
              Icon={CloudSyncOutlined}
              bgColor='bg-primary'
              textColor='text-white'
              link='#'
              linkTitle='Requirements'
              tag='Closing'
              isShowIcon={true}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Career
