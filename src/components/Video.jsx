import React from 'react'

const Video = (props) => {
  return (
    <div>
        <video classname='video' loop autoPlay playsInline muted width="100%" height="auto" src="/videos/showreel.mp4" />
    </div>
  )
}

export default Video
