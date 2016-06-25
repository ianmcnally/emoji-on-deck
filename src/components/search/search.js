import React, { PropTypes } from 'react'
import styles from './search.css'

const Search = ({ onChange }) =>
  <input
    className={styles.input}
    onChange={onChange}
    type='text'
    placeholder='Find emojis by description'
  />

Search.propTypes = {
  onChange : PropTypes.func.isRequired
}

export default Search
