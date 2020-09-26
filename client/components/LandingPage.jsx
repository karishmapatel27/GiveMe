import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div className="gradient-background">
      <div className="landing-wrapper">
        <div className="landingLogo">
          <img className="is-rounded" src='./img/logo-txt-white.png' />
        </div>
        <div className='landing-text'>
          <p>
            GiveMe is an online platform where kiwis can donate their unwanted items to other kiwis, empowering the NZ community to improve sustainability and reduce the waste caused by unwanted products.
          </p>
        </div>

        <div className='landingBtns'>
          <Link className="button browseBtn" to="/home">Browse</Link>
          <Link className="button primaryBtn" to='/register'>Register</Link>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
