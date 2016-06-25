import React from 'react'
import App from 'src/app'
import { Emojis, Search } from 'src/components'
import { expect } from 'chai'
import * as emojiSearch from 'src/services/emoji-search'
import renderShallow from 'src/test-helpers/lib/render-shallow'
import noop from 'src/test-helpers/lib/noop'
import { findWithType } from 'react-shallow-testutils'
import { stub } from 'sinon'

describe('App', () => {

  context('when it first renders', () => {
    let component

    before(() => {
      component = renderShallow(<App />).output
    })

    it('renders <Search>', () => {
      expect(component).to.include(
        <Search onChange={noop} />
      )
    })

    it('renders <Emojis>', () => {
      expect(component).to.include(
        <Emojis emojis={[]}/>
      )
    })

  })

  context('when <Search> input changes', () => {
    const searchTerm = 'hey ian'
    const event = { target : { value : searchTerm } }
    let searchInput

    before(() => {
      stub(emojiSearch, 'getEmojisForQuery').returns(Promise.resolve([]))

      const component = renderShallow(<App />).output
      searchInput = findWithType(component, Search)

      searchInput.props.onChange(event)
    })

    after(() => {
      emojiSearch.getEmojisForQuery.restore()
    })

    it('gets emoji for the search term', () => {
      expect(emojiSearch.getEmojisForQuery).to.have.been.calledOnce.calledWith(searchTerm)
    })

  })

  context('when <Search> input changes and the search request resolves successfully', () => {
    const searchTerm = 'hey ian'
    const emojisResult = ['😁']
    const event = { target : { value : searchTerm } }
    let component

    before(done => {
      stub(emojiSearch, 'getEmojisForQuery').returns(Promise.resolve(emojisResult))

      const { output, rerender } = renderShallow(<App />)
      const searchInput = findWithType(output, Search)

      searchInput.props.onChange(event)

      setTimeout(() => {
        component = rerender()
        done()
      }, 0)
    })

    after(() => {
      emojiSearch.getEmojisForQuery.restore()
    })

    it('rerenders <Emojis> with the response', () => {
      expect(component).to.include(
        <Emojis emojis={emojisResult} />
      )
    })

  })

  context('when <Search> input is cleared', () => {
    const searchTerm = ''
    const event = { target : { value : searchTerm } }
    let component

    before(done => {
      stub(emojiSearch, 'getEmojisForQuery').returns(Promise.resolve())

      const { output, rerender } = renderShallow(<App />)
      const searchInput = findWithType(output, Search)

      searchInput.props.onChange(event)

      setTimeout(() => {
        component = rerender()
        done()
      }, 0)
    })

    after(() => {
      emojiSearch.getEmojisForQuery.restore()
    })

    // fix: setup state with emojis to prove its cleared
    it('renders <Emojis> with an empty emojis array', () => {
      expect(component).to.include(
        <Emojis emojis={[]} />
      )
    })

    it('does not query for emojis', () => {
      expect(emojiSearch.getEmojisForQuery).not.to.have.been.called
    })

  })

})

