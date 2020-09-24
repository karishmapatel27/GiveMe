import React from 'react'
import { Route } from 'react-router-dom'

import LandingPage from './LandingPage'

function App () {

  return (
    <>
      <Route exact path='/' component={ LandingPage } />
    </>
  )
}

export default App