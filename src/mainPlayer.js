import React from 'react'

export const MainPlayer = (props) => {
  let videoId = props.video.id
  return (
    <div className="video-detail">
      <iframe width="100%" height="315" src={`https://www.youtube.com/embed/${videoId}`} frameborder="0" allowfullscreen></iframe>
    </div>
  )

}
