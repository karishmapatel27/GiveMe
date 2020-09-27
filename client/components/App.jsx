import React from 'react'
import { Route } from 'react-router-dom'
import LandingPage from './LandingPage'
import Register from './Register'
import SignIn from './SignIn'
import Home from './Home'
import ListAnItem from './ListAnItem'
import BrowseListings from './BrowseListings'
import SearchBar from './SearchBar'
import ItemDetails from './ItemDetails'


function App () {
  return (
    <>
      <div>
      </div>
      <div>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/Home' component={Home} />
        <Route exact path='/ListAnItem' component={ListAnItem} />
        <Route exact path='/BrowseListings' component={BrowseListings} />
        <Route exact path='/SearchBar' component={SearchBar} />
        <Route exact path='/SearchBar' component={ItemDetails} />

        <Route exact path='/register' component={Register} />

        <Route path='/signin' component={SignIn} />
      </div>
    </>
  )
}

export default App
