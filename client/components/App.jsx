import React from 'react'
import { Route } from 'react-router-dom'

import LandingPage from './LandingPage'
import Register from './Register'
import SignIn from './SignIn'
import Home from './Home'

function App () {
  return (
    <>
      <div>
      </div>
      <div>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/Home' component={Home} />

        <Route exact path='/register' component={Register} />

        <Route path='/signin' component={SignIn} />
      </div>
    </>
  )
}

export default App
