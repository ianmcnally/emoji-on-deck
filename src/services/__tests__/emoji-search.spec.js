import { getEmojisForQuery } from '../emoji-search'
import { stub } from 'sinon'
import { expect } from 'chai'

describe('emoji-search service', () => {

  describe('getEmojisForQuery', () => {

    context('when a query is specified', () => {
      const query = 'hey ian'

      before(() => {
        const response = new Response(JSON.stringify({ results : [] }))
        stub(window, 'fetch').returns(Promise.resolve(response))

        return getEmojisForQuery(query)
      })

      after(() => {
        window.fetch.restore()
      })

      it('fetches to the emoji API with the query', () => {
      })

    })

    context('when a query is specified and the request resolves successfully', () => {
      const query = 'hey ian'
      let result

      before(done => {
        const response = new Response(JSON.stringify({
          results : [
            { text : '😎' }
          ]
        }))
        stub(window, 'fetch').returns(Promise.resolve(response))

        getEmojisForQuery(query).then(response => {
          result = response
          done()
        })

      })

      after(() => {
        window.fetch.restore()
      })

      it('returns an array of emojis', () => {
        expect(result).to.eql(['😎'])
      })

    })

    context('when a query is not specified', () => {

      before(() => {
        stub(window, 'fetch')

        return getEmojisForQuery()
      })

      after(() => {
        window.fetch.restore()
      })

      it('does not perform a fetch', () => {
        expect(window.fetch).not.to.have.been.called
      })

    })

  })

})
