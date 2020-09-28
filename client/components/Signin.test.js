import React from 'react'
import { HashRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'

import SignIn from './SignIn'

it('renders correctly', () => {
  const tree = renderer
    .create(
      <HashRouter>
        <SignIn/>
      </HashRouter>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
