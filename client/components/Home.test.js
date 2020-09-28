import React from 'react'
import { HashRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'
import { UserProvider } from './UserContext'
import Home from './Home'

it('renders correctly', () => {
  const tree = renderer
    .create(
      <HashRouter>
        <UserProvider>
          <Home/>
        </UserProvider>
      </HashRouter>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
