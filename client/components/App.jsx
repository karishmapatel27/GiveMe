import React from 'react'
import { Route } from 'react-router-dom'

import RegisterButton from './RegisterButton'
import Register from './Register'
function App () {

  return (
    <>
      <Route exact path='/' component={ RegisterButton } />
      <Route path="/register" component={Register} />
    </>
  )
}

export default App