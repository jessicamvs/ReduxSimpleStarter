import React, { Component } from 'react'

// This is a react component that is called a functional component because it is a function
// const SearchBar = () => {
//   return <input />
// }

// A class based component is used whenever you want a component to have some sort of internal record keeping
class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = { term: ''}
  }
// every class must have a render function
// always manipulate state with this.setState
  render() {
    return (
      <div>
        <input
          value={this.state.term}
          onChange={event => this.setState({ term: event.target.value }) }/>
      </div>
    )
  }
}

export default SearchBar
