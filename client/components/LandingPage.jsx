import React from 'react'
import { Link } from 'react-router-dom'

function LandingPage() {
    return (
        <>
            <h1>GIVE ME</h1>
            <p>GiveMe is an online platform where kiwis can donate their unwanted items to other kiwis, empowering the NZ community to improve sustainability and reduce the waste caused by unwanted products.</p>

            <Link className="button is-primary my-4" >Browse</Link>
        </>
    )
}

export default LandingPage