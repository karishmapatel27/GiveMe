import React from 'react'
import { Route } from 'react-router-dom'

import RegisterButton from './Register'

function App () {

  return (
    <>
      <Route exact path='/' component={ RegisterButton } />
    </>
  )
}

export default App