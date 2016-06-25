import React, { PropTypes } from 'react'
import styles from './emojis.css'

const Emojis = ({ emojis }) => emojis.length &&
  <ul className={styles.listContainer}>
  {emojis.map(emoji =>
    <li className={styles.itemWrapper} key={emoji}>
      <input className={styles.item} type='text' readOnly value={emoji} />
    </li>
  )}
  </ul> || null

Emojis.propTypes = {
  emojis : PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Emojis
