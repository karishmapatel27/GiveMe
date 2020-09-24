import React from 'react'
import { Route } from 'react-router-dom'

import Register from './Register'
import Signin from './SignIn'
import Nav from './Nav'

function App () {
  return (
    <>
      <div>
        <Nav/>
      </div>

      <Route exact path='/register' component={Register} />

      <Route path='/signin' component={Signin} />
    </>
  )
}

export default App
