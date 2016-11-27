import React from 'react'

export const Sidebar = (props) => {

  function handleClick(event) {
    let video = {id: event.id, thumbnail: event.thumbnail}
    event.swap(video)
  }

  return (
    <div>
    {props.videos.map(vid => {
      let source = vid.thumbnail
      vid.swap = props.swap
      return <img videoInfo={vid} className='list-group-item' src={`${source}`}  onClick={(event) => {handleClick(vid, event)}} />
    })}
    </div>

  )

}
