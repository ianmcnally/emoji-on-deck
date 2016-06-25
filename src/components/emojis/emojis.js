import React, { PropTypes } from 'react'

const Emojis = ({ emojis }) => emojis.length &&
  <ul>
  {emojis.map(emoji =>
    <li key={emoji}>
      <input type='text' readOnly value={emoji} />
    </li>
  )}
  </ul> || null

Emojis.propTypes = {
  emojis : PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Emojis
