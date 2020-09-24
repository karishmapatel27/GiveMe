import React from 'react'
import { Route } from 'react-router-dom'

import LandingPage from './LandingPage'
import Register from './Register'
import SignIn from './SignIn'


function App() {

 return (
  <>
   <Route exact path='/' component={LandingPage} />
  </>
 )
}

export default App