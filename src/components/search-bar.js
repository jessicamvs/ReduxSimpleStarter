import React, { Component } from 'react'

// This is a react component that is called a functional component because it is a function
// const SearchBar = () => {
//   return <input />
// }

// A class based component is used whenever you want a component to have some sort of internal record keeping
class SearchBar extends Component {
// every class must have a render function
  render() {
    return <input onChange={(event) => console.log(event.target.value)} />
  }
}

export default SearchBar
