import React from 'react'
import { Route } from 'react-router-dom'
import Register from './Register'

import LandingPage from './Register'

function App () {

  return (
    <>
      <Route exact path='/' component={ Register } />
    </>
  )
}

export default App