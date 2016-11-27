import { combineReducers } from 'redux'
import {loadVideo} from './actions'
import store from './store'

function sidebar(state = [], action){
  switch (action.type) {
    case "FETCH_VIDEOS":
      let sidebarList = action.payload.data.items.slice(1,5)
      return sidebarList.map(video => {
        return {id:video.id.videoId, thumbnail:video.snippet.thumbnails.medium.url}
      })
    case "LOAD_VIDEO":

    let newState = state.map(item => {
      if (item.id === action.payload.thumb.id) {
        return action.payload.main
      }
      else {
        return item
      }
    })

    return newState
    default:
      return state
  }
}

function player(state={}, action){

  switch (action.type) {
    case "FETCH_VIDEOS":
      let video = action.payload.data.items[0]
      return {id:video.id.videoId, thumbnail: video.snippet.thumbnails.medium.url}
    case "LOAD_VIDEO":
      return action.payload.thumb
    default:
      return state
  }

}


const rootReducer = combineReducers({sidebar, player})

export default rootReducer
