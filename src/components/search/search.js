import React, { PropTypes } from 'react'

const Search = ({ onChange }) =>
  <input
    onChange={onChange}
    type='text'
    placeholder='Search emojis by description'
  />

Search.propTypes = {
  onChange : PropTypes.func.isRequired
}

export default Search
