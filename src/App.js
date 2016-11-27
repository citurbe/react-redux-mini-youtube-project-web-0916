import React, { Component } from 'react';
import './App.css';
import {MainPlayer} from './mainPlayer'
import SearchBox from './searchBox'
import {Sidebar} from './sidebar'
import {connect} from 'react-redux'
import {fetchVideos} from './actions'
import {loadVideo} from './actions'

class App extends Component {

  constructor(props) {
    super(props)
    this.load = this.load.bind(this)
    this.swap = this.swap.bind(this)
  }

  load(searchTerm) {
    this.props.dispatch(fetchVideos(searchTerm))
  }

  componentWillMount() {
    this.props.dispatch(fetchVideos('The Big Lebowski'))
  }

  swap(clicked){
    let playing = this.props.player
    this.props.dispatch(loadVideo(playing, clicked))
  }

  render() {
    return (
      <div className="App container">
        <div className='two-thirds column'>
        <MainPlayer video={this.props.player} />
        <SearchBox load={this.load}/>
        </div>
        <div className='one-third column'>
        <Sidebar swap={this.swap} videos={this.props.sidebar} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state
}

const connector = connect(mapStateToProps)
const connectedComponent = connector(App)

export default connectedComponent;
