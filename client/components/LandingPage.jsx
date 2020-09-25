import React from 'react'
import { Link } from 'react-router-dom'
//import Logo from '../../server/public/img/logo.png'

function LandingPage() {
    return (
        <>
            <div className="landingBackground">
                <div className="landingLogo">
                    <h1 className="logoTitle">Give Me</h1>
                    <img className="is-rounded" src='./img/logo.png' />
                </div>
                <p>GiveMe is an online platform where kiwis can donate their unwanted items to other kiwis, empowering the NZ community to improve sustainability and reduce the waste caused by unwanted products.</p>

                <Link className="button browseBtn">Browse</Link>
            </div>
        </>
    )
}

export default LandingPage