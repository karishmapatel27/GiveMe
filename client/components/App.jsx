import React from 'react'
import { Route } from 'react-router-dom'
import LandingPage from './LandingPage'
import Register from './Register'
import SignIn from './SignIn'
//import { register } from 'authenticare/client'


function App() {

 return (
  <>
   <div >
    <Route exact path='/' component={LandingPage} />
    <Register />
    <SignIn />
   </div>
  </>
 )
}

export default App