import React, { Component } from 'react'
import { Emojis, Search } from 'src/components'
import { getEmojisForQuery } from 'src/services/emoji-search'
import 'whatwg-fetch'
import './app.css'

const initialState = { emojis : [] }

export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = initialState

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event) {
    const searchTerm = event.target.value

    if (!searchTerm)
      return this.setState(initialState)

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
