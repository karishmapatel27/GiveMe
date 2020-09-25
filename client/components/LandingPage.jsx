import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

class LandingPage extends React.Component {
  componentDidMount() {
    const backgroundGradient = 'gradient'
    const landing = document.getElementsByClassName('landing')
    if (landing) {
      document.body.classList.add(backgroundGradient)
    } else {
      document.body.classList.remove(backgroundGradient)
    }
  }

  render() {
    return (
      <>
        <div className="landingBackground">
          <div className="landingLogo">
            <h1 className="logoTitle">Give Me</h1>
            <img className="is-rounded" src='./img/logo.png' />
          </div>
          <p>GiveMe is an online platform where kiwis can donate their unwanted items to other kiwis, empowering the NZ community to improve sustainability and reduce the waste caused by unwanted products.</p>

          <div className='landingBtns'>
            <Link className="button browseBtn">Browse</Link>
            <Link className="button registerBtn" to='/register'>Register</Link>
          </div>
        </div>
      </>
    )
  }
}

export default LandingPage
