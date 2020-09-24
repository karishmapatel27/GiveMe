import React from 'react'
import { Route } from 'react-router-dom'

import Register from './Register'
import Nav from './Nav'

import LandingPage from './Register'
import SignIn from './SignIn'

function App () {

  return (
    <>
    
      <Route exact path='/' component={ Register } />
      <Route exact path='/signin' component={ SignIn } />
    </>
  )
}

export default App