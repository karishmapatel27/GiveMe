import React, {useEffect, useContext} from 'react'
import { Link, Route } from 'react-router-dom'
import { isAuthenticated } from 'authenticare/client'

import { UserContext, updateUserContext } from './UserContext'
import Nav from './Nav'
import Register from './Register'
import SignIn from './SignIn'
import BrowseListings from './BrowseListings'


function Home () {
    const [, setUser] = useContext(UserContext)

    useEffect (() => {
        if (isAuthenticated()) {
            updateUserContext(setUser)
        }
    }, [])
    
    return (
        <>
        <div className='container'>
            <h1>Home</h1>
            <div className='columns'>
            <Route path="/" component={Nav} />
            <Route path="/register" component={Register} />
            <Route path="/signin" component={SignIn} />
                
            </div>
        </div>
        </>
    )
}

export default Home