import React from 'react'
import './SearchBar.css'

const SearchBar = ({handleSearch}) => {
  return (
    <div className="topnav">
      <input type="text" placeholder="Search.."  onChange={handleSearch}/>
    </div>
  )
}

export default SearchBar
