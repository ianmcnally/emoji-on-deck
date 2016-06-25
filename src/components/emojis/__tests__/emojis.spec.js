import React from 'react'
import Emojis from '../emojis'
import styles from '../emojis.css'
import { expect } from 'chai'
import renderShallow from 'src/test-helpers/lib/render-shallow'

describe('<Emojis />', () => {

  context('when rendered with a non-empty array of emojis', () => {
    const emojis = ['🤔']
    let component

    before(() => {
      component = renderShallow(<Emojis emojis={emojis} />).output
    })

    it('renders a list item and input for each emoji', () => {
      expect(component).to.be.eql(
        <ul className={styles.listContainer}>
        {emojis.map(emoji =>
          <li className={styles.itemWrapper} key={emoji}>
            <input className={styles.item} type='text' readOnly value={emoji} />
          </li>
        )}
        </ul>
      )
    })
  })

  context('when rendered with an empty array of emojis', () => {
    const emojis = []
    let component

    before(() => {
      component = renderShallow(<Emojis emojis={emojis} />).output
    })

    it('returns null', () => {
      expect(component).to.be.null
    })

  })

})
