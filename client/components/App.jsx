import React from 'react'
import { Route } from 'react-router-dom'
import LandingPage from './LandingPage'
import Register from './Register'
import SignIn from './SignIn'
import Home from './Home'
import ListAnItem from './ListAnItem'
import Items from './Items'
import SearchBar from './SearchBar'
import ItemDetails from './ItemDetails'

function App () {
  return (
    <>
      <div>
      </div>
      <div>
        <Route exact path='/' component={LandingPage} />
        <Route path='/Home' component={Home} />
        <Route path='/ListAnItem' component={ListAnItem} />
        <Route path='/Listings' component={Items} />
        <Route path='/SearchBar' component={SearchBar} />
        <Route path='/register' component={Register} />
        <Route path='/itemdetails' component={ItemDetails} />

        <Route path='/signin' component={SignIn} />
      </div>
    </>
  )
}

export default App
