import React from 'react'
import { Route } from 'react-router-dom'

import LandingPage from './LandingPage'
import Register from './Register'
import SignIn from './SignIn'
import Nav from './Nav'


function App() {
 return (
  <>
      <div>
        <Nav/>
      </div>
   <div>
    <Route exact path='/' component={LandingPage} />
     
      <Route exact path='/register' component={Register} />

        <Route path='/signin' component={Signin} />
   </div>
  </>
 )
}

export default App
