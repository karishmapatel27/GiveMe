import React from 'react'

import { Route } from 'react-router-dom'

import Home from './Home'

import LandingPage from './LandingPage'
import Register from './Register'
import SignIn from './SignIn'
// import Nav from './Nav'

function App () {
  return (
    <>
      <div>

      </div>
      <div>
        <Route exact path='/' component={LandingPage} />

        <Route exact path='/register' component={Register} />

        <Route path='/signin' component={SignIn} />

        <Route path='/home' component={Home} />
      </div>
    </>
  )
}

export default App
