import React from 'react'
import { render } from 'react-dom'
import App from 'src/app'

if (process.env.NODE_ENV !== 'test')
  render(<App />, document.getElementById('main'))
