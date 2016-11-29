import React, { Component } from 'react';
import './App.css';
import {MainPlayer} from './mainPlayer'
import SearchBox from './searchBox'
import {Sidebar} from './sidebar'
import {connect} from 'react-redux'
import {fetchVideos} from './actions'
import {loadVideo} from './actions'
import {bindActionCreators} from 'redux';

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
    this.props.fetchVideos('Hack the Planet')
  }

  swap(clicked){
    let playing = this.props.player
    this.props.loadVideo(playing, clicked)
  }

  render() {
    return (
      <div className="App container">
        <div className='one-half column'>
          <h1 className='centered-text'>Craig<span className='red-text'>Tube</span></h1>
        <MainPlayer video={this.props.player} />
        <SearchBox className='search-bar' load={this.load}/>
        </div>
        <div className='one-third offset-by-two column'>
        <Sidebar swap={this.swap} videos={this.props.sidebar} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchVideos: fetchVideos, loadVideo: loadVideo}, dispatch)
}

const connector = connect(mapStateToProps, mapDispatchToProps)
const connectedComponent = connector(App)

export default connectedComponent;
