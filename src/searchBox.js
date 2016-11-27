import React from 'react'

class SearchBox extends React.Component {

  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event){
    event.preventDefault();
    let searchTerm = event.target.children[0].value
    this.props.load(searchTerm)
  }

  render() {
    return(
      <form onSubmit={this.handleClick}>
        <input className='search-bar'type='text' /><input type='submit' value='Search' />
      </form>
    )
  }
}
module.exports = SearchBox
