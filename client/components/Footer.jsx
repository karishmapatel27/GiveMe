import React from 'react'
// import { fa }

export default function Footer () {
  return (
    <div className="footer">
      <footer>
        <div className='footer-left'>
          <p>&copy; 2020 GiveMe. All rights reserved</p>
        </div>
        <div className='socialMedia'>
          <a href="#" className="fa fa-facebook"></a>
          <a href="#" className="fa fa-twitter"></a>
          <a href="#" className="fa fa-google"></a>
          <a href="https://github.com/pohutukawa-2020/GiveMe" target="_blank" rel='noreferrer' className="fa fa-github"></a>
        </div>
      </footer>
    </div>
  )
}
