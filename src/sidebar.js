import React from 'react'

export const Sidebar = (props) => {

  function handleClick(vid, event) {
    let video = {id: vid.id, thumbnail: vid.thumbnail}
    vid.swap(video)
  }

  return (
    <div>
    {props.videos.map(vid => {
      let source = vid.thumbnail
      vid.swap = props.swap
      return <img videoInfo={vid} className='list-group-item video-item' src={`${source}`}  onClick={(event) => {handleClick(vid, event)}} />
    })}
    </div>

  )

}
