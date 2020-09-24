import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

class LandingPage extends React.Component {
  componentDidMount() {
    const backgroundGradient = 'gradient'
    const landing = document.getElementsByClassName('landing')
    if (landing) {
      document.body.classList.add(backgroundGradient)
    }

  }
  render() {
  return (
        <>
        {/* <Helmet >
         <body id='landingBody' />
        </Helmet> */}

            <div className="landing">
              <div className="landingLogo">
                <img className="is-rounded" src='./img/logo-alt.png' />
                <h1>Give Me</h1>
              </div>
              <p>GiveMe is an online platform where kiwis can donate their unwanted items to other kiwis, empowering the NZ community to improve sustainability and reduce the waste caused by unwanted products.</p>

              <div className='landingBtns'>
                <Link className="button browseBtn">Browse</Link>
                <Link className="button registerBtn">Register</Link>
              </div>
            </div>
        </>
  )
 }
}

export default LandingPage
