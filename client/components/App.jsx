import React from 'react'

import { Route } from 'react-router-dom'

import LandingPage from './LandingPage'
import Register from './Register'
import SignIn from './SignIn'
import Home from './Home'
import ListAnItem from './ListAnItem'

import BrowseListings from './BrowseListings'
import ItemDetails from './ItemDetails'
import SearchBar from './SearchBar'
import ContactUs from './ContactUs'

function App () {
  return (
    <>

      <Route exact path='/' component={LandingPage} />
      <Route exact path='/About' component={LandingPage}/>

      <Route exact path='/Home' component={Home} />
      <Route exact path='/ListAnItem' component={ListAnItem} />
      <Route exact path='/listings' component={BrowseListings} />

      <Route exact path='/register' component={Register} />

      <Route exact path='/ItemDetails/:id' component={ItemDetails} />

      <Route exact path='/SearchBar' component={SearchBar} />
      <Route exact path='/ContactUs' component={ContactUs} />

      <Route path='/SignIn' component={SignIn} />
    </>
  )
}

export default App
