import React, { Component } from 'react'
import { Emojis, Search } from 'src/components'
import { getEmojisForQuery } from 'src/services/emoji-search'
import 'whatwg-fetch'

export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = { emojis : [] }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event) {
    const searchTerm = event.target.value
    getEmojisForQuery(searchTerm).then(emojis => {
      this.setState({ emojis })
    })
  }

  render () {
    return (
      <section>
        <Search onChange={this.handleChange} />
        <Emojis emojis={this.state.emojis} />
      </section>
    )
  }
}
