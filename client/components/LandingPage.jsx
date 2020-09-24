import React from 'react'
import { Link } from 'react-router-dom'
//import Logo from '../../server/public/img/logo.png'

function LandingPage() {
    return (
        <>
            <div className="landingBackground">
                <div className="landingLogo">
                    <img className="is-rounded" src='./img/logo.png' />
                    <h1>Give Me</h1>
                </div>
                <p>GiveMe is an online platform where kiwis can donate their unwanted items to other kiwis, empowering the NZ community to improve sustainability and reduce the waste caused by unwanted products.</p>

                <Link className="button browseBtn">Browse</Link>
            </div>
        </>
    )
}

export default LandingPage