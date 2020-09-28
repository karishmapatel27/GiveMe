import React from 'react'
import { HashRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'
import { UserProvider } from './UserContext'

import Register from './Register'

it('renders correctly', () => {
  const tree = renderer
    .create(
      <HashRouter>
        <UserProvider>
          < Register/>
        </UserProvider>
      </HashRouter>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
