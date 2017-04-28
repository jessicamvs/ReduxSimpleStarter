// core react library knows how to work with components, knows how to render them and nest them
import React from 'react'
// functionality to insert into the dom come from this library
import ReactDOM from 'react-dom'

import SearchBar from './components/search-bar'

const API_KEY = process.env.API_KEY

// Create a new component. This component should produce some HTML
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  )
}

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'))
