import React from 'react'
import Search from '../search'
import styles from '../search.css'
import { spy } from 'sinon'
import { expect } from 'chai'
import renderShallow from 'render-shallow'

describe('<Search>', () => {

  context('when rendered with required props', () => {
    let component

    before(() => {
      component = renderShallow(<Search onChange={spy()}/>).output
    })

    it('renders an input', () => {
      expect(component).to.eql(
        <input
          className={styles.input}
          onChange={spy()}
          type='text'
          placeholder='Find emojis by description'
        />
      )
    })

  })

  context('when the input changes', () => {
    const onChange = spy()
    const event = { target : { value : '100' } }

    before(() => {
      const component = renderShallow(<Search onChange={onChange}/>).output

      component.props.onChange(event)
    })

    it('props.onChange is called with the event', () => {
      expect(onChange).to.have.been.calledOnce.calledWith(event)
    })

  })

})
