import { CloseCircleOutlined } from '@ant-design/icons'
import BackgroundOverlay from './BackgroundOverlay'

// eslint-disable-next-line react/prop-types
const Video = ({ onClose = () => {} }) => {
  return (
    <>
      <BackgroundOverlay onClose={onClose} className='z-50 h-screen w-screen' />
      <CloseCircleOutlined onClick={onClose} className='fixed right-5 top-5 text-5xl cursor-pointer text-text z-50 hover:opacity-85 transition'/>
      <div className='fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 shadow-md w-[90%] max-w-3xl'>
        <div className='relative w-full aspect-video'>
          <iframe
            className='absolute top-0 left-0 w-full h-full'
            src='https://www.youtube.com/embed/pGbIOC83-So?si=z_8af5MUavYkeEMt'
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            referrerPolicy='strict-origin-when-cross-origin'
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  )
}

export default Video
