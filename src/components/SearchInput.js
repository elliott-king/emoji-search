import React from 'react'
import './SearchInput.css'

const SearchInput = (props) => {
  return (
    <div className="search-input">
      <div>
        <input onChange={props.handleSearchChange} />
      </div>
    </div>
  )
}

export default SearchInput