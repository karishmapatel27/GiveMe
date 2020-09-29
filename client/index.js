import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router } from 'react-router-dom'
import { UserProvider } from './components/UserContext'

import '../server/public/style/main.scss'
// import '../node_modules/font-awesome/css/font-awesome.min.css'

import App from './components/App'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Router>
      <UserProvider>
        <App />
      </UserProvider>
    </Router>,
    document.getElementById('app')
  )
})
